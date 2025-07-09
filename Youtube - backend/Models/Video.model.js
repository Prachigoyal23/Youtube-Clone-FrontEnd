import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  videoId: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  thumbnailUrl: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  channelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel' },
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  views: {
    type: Number,
    default: 0
  },
  // likes: {
  //   type: Number,
  //   default: 0
  // },
  // dislikes: {
  //   type: Number,
  //   default: 0
  // },
  likes: [{ 
    type: mongoose.Types.ObjectId, 
    ref: 'User' 
  }],
dislikes: [{ 
  type: mongoose.Types.ObjectId, 
  ref: 'User' 
}],
  uploadDate: {
    type: Date,
    default: Date.now
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Video = mongoose.model('Video', VideoSchema);
export default Video;
