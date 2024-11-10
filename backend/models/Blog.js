const mongoose = require('mongoose');

// Define the schema for the Blog model
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the Blog model
module.exports = mongoose.model('Blog', BlogSchema);