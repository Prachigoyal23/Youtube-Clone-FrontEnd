
import VideoModel from '../Models/Video.model.js';
import ChannelModel from '../Models/Channel.model.js';
import UserModel from '../Models/User.model.js';

// ----------------- To fetch the all videos-----------------------------------
export const getAllVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find().populate('channel');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};

// ---------------------To fetch the video by its Id-------------------------------
export const getVideoById = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id)
      .populate('channel')
      .populate({
        path: 'comments',
        populate: { path: 'user', select: 'username avatar' }
      });
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
};

// -------------------------To upload the video-------------------------------------
export const uploadVideo = async (req, res) => {
  const {
    videoId,
    videoLink,
    title,
    thumbnail,
    description,
    category
  } = req.body;

  if (!videoLink) return res.status(400).json({ error: 'videoLink is required' });
  if (!title) return res.status(400).json({ error: 'Title is required' });
  if (!thumbnail) return res.status(400).json({ error: 'Thumbnail is required' });
  if (!description) return res.status(400).json({ error: 'Description is required' });
  if (!category) return res.status(400).json({ error: 'Category is required' });

  try {
    const channel = await ChannelModel.findOne({ owner: req.user.id });
    if (!channel) return res.status(404).json({ error: 'Channel not found' });

    const newVideo = await VideoModel.create({
      videoId,
      videoLink,
      title,
      thumbnail,
      description,
      category,
      channel: channel._id
    });

    if (!Array.isArray(channel.videos)) channel.videos = [];
    channel.videos.push(newVideo._id);
    await channel.save();

    res.status(201).json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Video upload failed' });
  }
};

// -------------------------To update the video------------------------------------
export const updateVideo = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    // Only channel owner can edit
    const channel = await ChannelModel.findById(video.channel);
    if (!channel) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // Update fields
    const fields = ["title", "description", "videoLink", "thumbnail", "category"];
    fields.forEach(field => {
      if (req.body[field] !== undefined) video[field] = req.body[field];
    });

    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).json({ message: "Failed to update the video" });
  }
};

// ---------------------------To delete the video---------------------------------------
export const deleteVideo = async (req, res) => {
  try {
    const video = await VideoModel.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    const channel = await ChannelModel.findById(video.channel);
    if (!channel)
      return res.status(403).json({ message: "Unauthorized" });

    await VideoModel.findByIdAndDelete(video._id);
    await ChannelModel.findByIdAndUpdate(channel._id, {
      $pull: { videos: video._id }
    });

    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
};

export const getVideosByChannel = async (req, res) => {
  try {
    const videos = await VideoModel.find({ channel: req.params.channelId });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// --- LIKE/DISLIKE CONTROLLERS ---

export const likeVideo = async (req, res) => {
  try {
    const userId = req.user.id;
    const video = await VideoModel.findById(req.params.id);
    const user = await UserModel.findById(userId);

    if (!video || !user) return res.status(404).json({ message: "Video or user not found" });

    if (!Array.isArray(video.likedBy)) video.likedBy = [];
    if (!Array.isArray(video.dislikedBy)) video.dislikedBy = [];
    if (!Array.isArray(user.likedVideos)) user.likedVideos = [];


    // console.log("video.likedBy:", video.likedBy);
    // console.log("video.dislikedBy:", video.dislikedBy);
    // console.log("user.likedVideos:", user.likedVideos);

    // If already liked, do nothing
    if (video.likedBy.includes(userId)) {
      return res.json({ likes: video.likes, dislikes: video.dislikes });
    }

    // Remove dislike if present
    if (video.dislikedBy.includes(userId)) {
      video.dislikedBy.pull(userId);
      video.dislikes = Math.max(0, video.dislikes - 1);
    }

    video.likedBy.push(userId);
    video.likes += 1;

    // Add to user's likedVideos if not present
    if (!user.likedVideos.includes(video._id)) {
      user.likedVideos.push(video._id);
    }

    await video.save();
    await user.save();

    res.json({ likes: video.likes, dislikes: video.dislikes });
  } catch (err) {
    console.error("likeVideo error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const unlikeVideo = async (req, res) => {
  try {
    const userId = req.user.id;
    const video = await VideoModel.findById(req.params.id);
    const user = await UserModel.findById(userId);

    if (!video || !user) return res.status(404).json({ message: "Video or user not found" });

    if (!Array.isArray(video.likedBy)) video.likedBy = [];
    if (!Array.isArray(user.likedVideos)) user.likedVideos = [];

    if (video.likedBy.includes(userId)) {
      video.likedBy.pull(userId);
      video.likes = Math.max(0, video.likes - 1);
    }

    // Remove from user's likedVideos
    if (user.likedVideos.includes(video._id)) {
      user.likedVideos.pull(video._id);
    }

    await video.save();
    await user.save();

    res.json({ likes: video.likes, dislikes: video.dislikes });
  } catch (err) {
    console.error("unlikeVideo error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const dislikeVideo = async (req, res) => {
  try {
    const userId = req.user.id;
    const video = await VideoModel.findById(req.params.id);
    const user = await UserModel.findById(userId);

    if (!video || !user) return res.status(404).json({ message: "Video or user not found" });

    if (!Array.isArray(video.likedBy)) video.likedBy = [];
    if (!Array.isArray(video.dislikedBy)) video.dislikedBy = [];
    if (!Array.isArray(user.likedVideos)) user.likedVideos = [];

    // If already disliked, do nothing
    if (video.dislikedBy.includes(userId)) {
      return res.json({ likes: video.likes, dislikes: video.dislikes });
    }

    // Remove like if present
    if (video.likedBy.includes(userId)) {
      video.likedBy.pull(userId);
      video.likes = Math.max(0, video.likes - 1);
      // Remove from user's likedVideos
      if (user.likedVideos.includes(video._id)) {
        user.likedVideos.pull(video._id);
      }
    }

    video.dislikedBy.push(userId);
    video.dislikes += 1;

    await video.save();
    await user.save();

    res.json({ likes: video.likes, dislikes: video.dislikes });
  } catch (err) {
    console.error("dislikeVideo error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const undislikeVideo = async (req, res) => {
  try {
    const userId = req.user.id;
    const video = await VideoModel.findById(req.params.id);

    if (!video) return res.status(404).json({ message: "Video not found" });

    if (!Array.isArray(video.dislikedBy)) video.dislikedBy = [];

    if (video.dislikedBy.includes(userId)) {
      video.dislikedBy.pull(userId);
      video.dislikes = Math.max(0, video.dislikes - 1);
    }

    await video.save();

    res.json({ likes: video.likes, dislikes: video.dislikes });
  } catch (err) {
    console.error("undislikeVideo error:", err);
    res.status(500).json({ message: err.message });
  }
};
