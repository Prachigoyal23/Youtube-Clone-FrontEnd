import express from 'express';
import {
  addComment,
  getComments,
  updateComment,
  deleteComment
} from '../Controllers/comment.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, addComment);
router.get('/:videoId', getComments);
router.put('/:id', authMiddleware, updateComment);
router.delete('/:id', authMiddleware, deleteComment);

export default router;
