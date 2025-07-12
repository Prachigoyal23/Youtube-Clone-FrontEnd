import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  videoId: { 
    type: String, 
  },
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  thumbnail: { 
    type: String, 
  },
  description: { 
    type: String, 
    required: true, 
    trim: true 
  },
  channel: { type: mongoose.Schema.Types.ObjectId, ref: 'Channel'},
  uploader: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
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
  likedBy:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikedBy:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
  uploadDate: {
    type: Date,
    default: Date.now
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  videoLink: { 
        type: String, 
        required: true 
    },
    category: String ,
}, { timestamps: true });

const VideoModel = mongoose.model('Video', VideoSchema);
export default VideoModel;
