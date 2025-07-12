import express from 'express';
import {
  createChannel,
  getChannelById,
  updateChannel,
  deleteChannel
} from '../Controllers/channel.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

// --------------- Fixing route --------------------------
function channelRoutes(app) {
    app.post('/api/channel', authMiddleware, createChannel); // create a channel
    app.get('/api/channel/:id', getChannelById);       // public
    app.put('/api/updateChannel/:id', authMiddleware, updateChannel);
    app.delete('/api/deleteChannel/:id', authMiddleware, deleteChannel);
}

export default channelRoutes;
