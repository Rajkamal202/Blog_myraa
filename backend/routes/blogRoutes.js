const express = require('express');
const router = express.Router();
const { generateBlog, getRecentBlogs } = require('../controllers/blogControllers.js');

// Define routes for blog-related operations
router.post('/generate-blog', generateBlog);
router.get('/recent-blogs', getRecentBlogs);

module.exports = router;