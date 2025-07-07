import express from 'express';
import {
  getAllVideos,
  getVideoById,
  uploadVideo,
  updateVideo,
  deleteVideo
} from '../Controllers/video.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/', authMiddleware, uploadVideo);
router.put('/:id', authMiddleware, updateVideo);
router.delete('/:id', authMiddleware, deleteVideo);

export default router;
