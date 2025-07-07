import Comment from '../Models/Comment.model.js';
import Video from '../Models/Video.model.js';

export const addComment = async (req, res) => {
  const { videoId, text } = req.body;

  try {
    const newComment = await Comment.create({
      videoId,
      userId: req.user,
      text
    });

    await Video.findByIdAndUpdate(videoId, {
      $push: { comments: newComment._id }
    });

    res.status(201).json(newComment);
  } catch (err) {
    console.log(`Error`, err);
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).populate('userId');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get comments' });
  }
};

export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    if (comment.userId.toString() !== req.user)
      return res.status(403).json({ error: 'Unauthorized' });

    comment.text = req.body.text || comment.text;
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update comment' });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    if (comment.userId.toString() !== req.user)
      return res.status(403).json({ error: 'Unauthorized' });

    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};
