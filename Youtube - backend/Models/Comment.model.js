import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  text: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model('Comment', CommentSchema);
export default Comment;
