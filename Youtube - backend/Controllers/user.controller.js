import User from '../Models/User.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Inline utility function (local to this file)
const isStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  return strongPasswordRegex.test(password);
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

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
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: 'Email already in use' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
  

  // try {
  //   const hashedPassword = await bcrypt.hash(password, 10);
  //   const newUser = await User.create({
  //     username,
  //     email,
  //     password: hashedPassword
  //   });

  //   res.status(201).json(newUser);
  // } catch (error) {
  //    console.error('Registration error:', error);
  //   res.status(500).json({ error: 'Registration failed' });
  // }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ error: 'Email is required' });
  if (!password) return res.status(400).json({ error: 'Password is required' });

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
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
