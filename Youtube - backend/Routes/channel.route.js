import express from 'express';
import {
  createChannel,
  getChannelById,
  getAllChannels
} from '../Controllers/channel.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createChannel);
router.get('/:id', getChannelById);
router.get('/', getAllChannels);

export default router;
