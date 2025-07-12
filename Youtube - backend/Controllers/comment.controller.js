import CommentModel from '../Models/Comment.model.js';
import VideoModel from '../Models/Video.model.js';

// -------------------To add a Comment -----------------------------
export const addComment = async (req, res) => {
  const { videoId, text } = req.body;

  try {
    const comment = await CommentModel.create({
      video: videoId,
      user: req.user.id,
      text
    });

    await VideoModel.findByIdAndUpdate(videoId, {
      $push: { comments: comment._id }
    });
    // const populatedComment = await comment.populate('user', 'username avatar');

    res.status(201).json(comment);
  } catch (err) {
    console.error('Error:', err); // This will log the stack trace
    res.status(500).json({ error: err.message, stack: err.stack });
  }
};

// ------------- To fetch the comment by Video Id------------------------------
export const getCommentsByVideo = async (req, res) => {
  try {
    const comments = await CommentModel.find({ video: req.params.videoId }).populate('user', 'username avatar');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get comments' });
  }
};

// -------------------- To edit the comment--------------------------
export const editComment = async (req, res) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    // Debug
    // console.log('comment.user:', comment.user, typeof comment.user);
    // console.log('req.user.id:', req.user.id, typeof req.user.id);
    // console.log('EQUAL?', comment.user && req.user.id && (comment.user.toString() === req.user.id.toString()));

    if (!comment.user || comment.user.toString() !== req.user.id.toString())
      return res.status(403).json({ error: 'Unauthorized' });

    comment.text = req.body.text || comment.text;
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update comment' });
  }
};

// ------------------- To Delete the comment--------------------------
export const deleteComment = async (req, res) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });

    if (!comment.user || !comment.user.equals(req.user.id))
      return res.status(403).json({ error: 'Unauthorized' });

    await VideoModel.findByIdAndUpdate(comment.video, {
      $pull: { comments: comment._id }
    });

    await CommentModel.findByIdAndDelete(comment._id);
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};
