import Channel from '../Models/Channel.model.js'
import User from '../Models/User.model.js';

export const createChannel = async (req, res) => {
  const { channelName, description, channelBanner } = req.body;

  try {
    const channel = await Channel.create({
      channelName,
      description,
      channelBanner,
      owner: req.user
    });

    await User.findByIdAndUpdate(req.user, {
      $push: { channels: channel._id }
    });

    res.status(201).json(channel);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create channel' });
  }
};

export const getChannelById = async (req, res) => {
  try {
    const channel = await Channel.findById(req.params.id).populate('videos');
    if (!channel) return res.status(404).json({ error: 'Channel not found' });
    res.json(channel);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.json(channels);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
