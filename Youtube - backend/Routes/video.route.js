import express from 'express';
import {
  getAllVideos,
  getVideoById,
  uploadVideo,
  getVideosByChannel,
  updateVideo,
  deleteVideo,
  likeVideo,
  unlikeVideo,
  dislikeVideo,
  undislikeVideo,
} from '../Controllers/video.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

function videoRoutes(app) {
    app.post('/api/video', authMiddleware, uploadVideo);
    app.get('/api/videos', getAllVideos);
    app.get('/api/video/:id', getVideoById);
    app.get('/api/videos/:channelId', getVideosByChannel);
    app.delete('/api/video/:id', authMiddleware, deleteVideo);
    app.put('/api/video/:id', authMiddleware, updateVideo);

    // Like/dislike endpoints
    app.patch('/api/video/:id/like', authMiddleware, likeVideo);
    app.patch('/api/video/:id/unlike', authMiddleware, unlikeVideo);
    app.patch('/api/video/:id/dislike', authMiddleware, dislikeVideo);
    app.patch('/api/video/:id/undislike', authMiddleware, undislikeVideo);
    
}

export default videoRoutes;
