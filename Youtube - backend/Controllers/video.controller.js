import Video from '../Models/Video.model.js';
import Channel from '../Models/Channel.model.js';

export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().populate('channelId uploader');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};

export const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
      .populate('channelId uploader comments');
    if (!video) return res.status(404).json({ error: 'Video not found' });
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
};

export const uploadVideo = async (req, res) => {
  const {
    videoId,
    title,
    thumbnailUrl,
    description,
    channelId
  } = req.body;

  try {
    const newVideo = await Video.create({
      videoId,
      title,
      thumbnailUrl,
      description,
      channelId,
      uploader: req.user
    });

    await Channel.findByIdAndUpdate(channelId, {
      $push: { videos: newVideo._id }
    });

    res.status(201).json(newVideo);
  } catch (err) {
    res.status(500).json({ error: 'Video upload failed' });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    if (video.uploader.toString() !== req.user)
      return res.status(403).json({ error: 'Unauthorized' });

    const updated = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update video' });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ error: 'Video not found' });

    if (video.uploader.toString() !== req.user)
      return res.status(403).json({ error: 'Unauthorized' });

    await Video.findByIdAndDelete(req.params.id);
    res.json({ message: 'Video deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete video' });
  }
};
