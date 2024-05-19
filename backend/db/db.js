// Load environment variables from .env file
require('dotenv').config();
const mongoose = require('mongoose');

// Use the MONGO_URL environment variable for the connection string
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const userSchema = new mongoose.Schema({
  name: String,
  job: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
