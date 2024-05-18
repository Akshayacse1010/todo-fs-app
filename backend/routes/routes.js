const express = require('express');
const router = express.Router();
const User = require('../db/db'); // Correct path to db.js
const userMiddleware = require('../middleware/user');

router.post('/addUser', userMiddleware, async (req, res) => {
  const { name, job } = req.body;

  try {
    // Create a new user
    const newUser = await User.create({ name, job });
    res.json({ msg: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

module.exports = router;
