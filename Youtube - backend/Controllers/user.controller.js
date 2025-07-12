import UserModel from '../Models/User.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Inline utility function (local to this file)
const isStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return strongPasswordRegex.test(password);
};

// ---------------- To Sign Up the User Account-------------------------------
export const registerUser = async (req, res) => {
  const { username, email, password, avatar } = req.body;

   if (!username) return res.status(400).json({ error: 'Username is required' });
   if (!email) return res.status(400).json({ error: 'Email is required' });
   if (!password) return res.status(400).json({ error: 'Password is required' });

  // Email format validation
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      error:
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
    });
  }

  try {
    // Check if email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser){
      return res.status(400).json({ error: 'Email already in use' });
    }
      
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      email,
      password: hashedPassword,
      avatar: avatar || undefined
    });

    // await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '4d'
    });

    res.status(201).json({
      token, 
      user: {
        username: newUser.username,
        id: newUser._id,
        avatar: newUser.avatar,
        email: newUser.email,
        }
     });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

// ------------------ To Login the Account -----------------------------------------
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!password) return res.status(400).json({ error: 'Password is required' });

  try {
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '5d'
    });

    res.json({ token, user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar
      } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// --------------- To fetch the user's profile------------------------------
export const getUserProfile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user.id).populate("channel");
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            channelId: user.channel ? user.channel._id.toString() : null,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Server Error" });
    }
};
