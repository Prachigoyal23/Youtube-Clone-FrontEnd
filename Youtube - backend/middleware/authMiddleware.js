import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import UserModel from '../Models/User.model.js';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('JWT ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await UserModel.findById(decoded.userId);
      if (!user) return res.status(401).json({ error: 'User not found' });
      req.user = { id: user._id };
      // console.log('AUTH MIDDLEWARE req.user.id:', req.user.id, typeof req.user.id);
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  } else {
    return res.status(401).json({ error: 'No token provided' });
  }
};

export default authMiddleware;



