import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


import videoRoutes from './Routes/video.route.js';
import channelRoutes from './Routes/channel.route.js';
import commentRoutes from './Routes/comment.route.js';
import userRoutes from './Routes/user.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
});

// cors is used for integration from backend to frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());

userRoutes(app)
videoRoutes(app);
commentRoutes(app);
channelRoutes(app);

app.get('/', (req, res) => {
  res.send('API is running ✅');
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB is Connected ✅'))
.catch(err=>console.log('DataBase is not Connected ❌'));