import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './Routes/user.route.js';
import videoRoutes from './Routes/video.route.js';
import channelRoutes from './Routes/channel.route.js';
import commentRoutes from './Routes/comment.route.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




