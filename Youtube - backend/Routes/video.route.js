import express from 'express';
import {
  getAllVideos,
  getVideoById,
  uploadVideo,
  updateVideo,
  deleteVideo,
  incrementViews
} from '../Controllers/video.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/', authMiddleware, uploadVideo);
router.put('/:id', authMiddleware, updateVideo);
router.delete('/:id', authMiddleware, deleteVideo);
router.patch('/:id/views', incrementViews);


export default router;
