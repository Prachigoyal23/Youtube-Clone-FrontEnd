import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  videoId: String,
  title: String,
  thumbnailUrl: String,
  description: String,
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Video = mongoose.model('Video', VideoSchema);
export default Video;
