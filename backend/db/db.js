const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://akshayathecoder:d8b1McoLW9Xhb6re@cluster0.g0sdvgj.mongodb.net/todo'
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

const userSchema = mongoose.Schema({
  name: String,
  job: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User; // Export the model directly
