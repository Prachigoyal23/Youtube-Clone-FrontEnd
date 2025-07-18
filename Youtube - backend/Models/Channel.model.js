import mongoose from 'mongoose';

const ChannelSchema = new mongoose.Schema({
  channelName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, 'Channel name must be at least 3 characters']
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  description: {
    type: String,
    required: true,
    trim: true
  },
  channelPic: {
    type: String
  },
  channelBanner: String,
  subscribers: {
    type: Number,
    default: 0
  },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }]
},
{ timestamps: true });

const ChannelModel = mongoose.model('Channel', ChannelSchema);
export default ChannelModel;
