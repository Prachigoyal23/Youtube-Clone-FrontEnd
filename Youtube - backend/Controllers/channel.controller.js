import ChannelModel from '../Models/Channel.model.js'
import UserModel from '../Models/User.model.js';

// ----------------- Creating the channel-----------------------------
export const createChannel = async (req, res) => {
  const { channelName, description, channelPic, channelBanner } = req.body;

   if (!channelName) return res.status(400).json({ error: 'Channel name is required' });
   if (!description) return res.status(400).json({ error: 'Description is required' });

  try {
    const channel = await ChannelModel.create({
      channelName,
      description,
      channelPic,
      channelBanner,
      owner: req.user.id
    });

    await UserModel.findByIdAndUpdate(req.user.id, { channels: channel._id });

    res.status(201).json({...channel.toObject(),
      channelId: channel._id.toString()});
  } catch (err) {
    res.status(500).json({ error: 'Failed to create channel' });
  }
};

// ------------------- To Fetch the channel by Id-----------------------------
export const getChannelById = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id).populate('videos');
    if (!channel) return res.status(404).json({ error: 'Channel not found' });
    res.json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// ----------------- To update the Channel -------------------------
export const updateChannel = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id);
    if (!channel) {
      console.log('Channel not found:', req.params.id);
      return res.status(404).json({ message: "Channel not found" });
    }

    // Convert both to string for comparison!
    if (String(channel.owner) !== String(req.user.id)) {
      console.log("Owner mismatch:", String(channel.owner), String(req.user.id));
      return res.status(403).json({ message: "Unauthorized" });
    }

    Object.assign(channel, req.body);
    await channel.save();
    res.json({
      ...channel.toObject(),
      channelId: channel._id.toString()
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// We can delete the channel only from server
export const deleteChannel = async (req, res) => {
  try {
    const channel = await ChannelModel.findById(req.params.id);
    if (!channel || channel.owner.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });

    await channel.remove();
    res.json({ message: "Channel deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
