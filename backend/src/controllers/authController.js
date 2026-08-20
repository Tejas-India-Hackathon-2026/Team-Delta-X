const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { mockData, isDbConnected } = require('../utils/mockStore');

const generateToken = (id, role, storeId) => {
  return jwt.sign(
    { id, role, storeId },
    process.env.JWT_SECRET || 'dhoondo_jwt_secret_key_2026',
    { expiresIn: '30d' }
  );
};

// @desc    Register a new user (Customer / Retailer / Admin)
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, role, storeId } = req.body;

    if (isDbConnected()) {
      const userExists = await User.findOne({ email: email.toLowerCase() });
      if (userExists) {
        return res.status(400).json({ success: false, message: 'User already exists with this email' });
      }

      const user = await User.create({
        name,
        email: email.toLowerCase(),
        phone,
        password,
        role: role || 'customer',
        storeId: storeId || null,
      });

      return res.status(201).json({
        success: true,
        data: {
          _id: user._id,
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role,
          storeId: user.storeId,
          avatar: user.avatar,
          token: generateToken(user._id, user.role, user.storeId),
        },
      });
    }

    const userId = `usr-${Date.now()}`;
    const newUser = {
      id: userId,
      name,
      email: email.toLowerCase(),
      phone,
      role: role || 'customer',
      storeId: storeId || null,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    };
    mockData.users.push(newUser);

    res.status(201).json({
      success: true,
      data: {
        ...newUser,
        token: generateToken(userId, newUser.role, newUser.storeId),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Auth user & get token (Login)
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { identifier, email, password } = req.body;
    const loginTarget = identifier || email;

    if (!loginTarget) {
      return res.status(400).json({ success: false, message: 'Please provide email or phone' });
    }

    if (isDbConnected()) {
      const user = await User.findOne({
        $or: [
          { email: loginTarget.toLowerCase() },
          { phone: loginTarget },
        ],
      }).select('+password');

      if (user && (await user.matchPassword(password || 'password123'))) {
        return res.json({
          success: true,
          data: {
            _id: user._id,
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            phone: user.phone,
            role: user.role,
            storeId: user.storeId,
            avatar: user.avatar,
            token: generateToken(user._id, user.role, user.storeId),
          },
        });
      }
    }

    const user = mockData.users.find(
      u => u.email.toLowerCase() === loginTarget.toLowerCase() || u.phone === loginTarget
    ) || mockData.users[0];

    res.json({
      success: true,
      data: {
        ...user,
        token: generateToken(user.id, user.role, user.storeId),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
  try {
    if (isDbConnected()) {
      const user = await User.findById(req.user.id);
      if (user) return res.json({ success: true, data: user });
    }

    const user = mockData.users.find(u => u.id === req.user.id) || mockData.users[0];
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, loginUser, getMe };
