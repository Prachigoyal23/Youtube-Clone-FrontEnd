import express from 'express';
import {
  addComment,
  getCommentsByVideo,
  editComment,
  deleteComment
} from '../Controllers/comment.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';


function commentRoutes(app) {
    app.post('/api/comment', authMiddleware, addComment);
    app.get('/api/comment/:videoId', getCommentsByVideo);
    app.delete('/api/comment/:id', authMiddleware, deleteComment);
    app.patch('/api/comment/:id', authMiddleware, editComment);
}

export default commentRoutes;