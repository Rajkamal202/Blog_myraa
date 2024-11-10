const Blog = require('../models/Blog.js');
const { Configuration, OpenAIApi } = require('openai');

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Controller function to generate a blog post
exports.generateBlog = async (req, res) => {
  try {
    const { prompt } = req.body;

    // Validate input
    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    // Generate blog content using OpenAI API
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `Write a 1000-word blog post about: ${prompt}\n\nTitle: `,
      max_tokens: 1500,
      temperature: 0.7,
    });

    // Process the generated text
    const generatedText = completion.data.choices[0].text.trim();
    const [title, ...contentArray] = generatedText.split('\n\n');

    // Create and save the new blog post
    const blog = new Blog({
      title: title.replace('Title: ', ''),
      content: contentArray.join('\n\n'),
    });

    await blog.save();

    // Send the generated blog post as the response
    res.json(blog);
  } catch (error) {
    console.error('Error generating blog:', error);
    res.status(500).json({ message: 'Error generating blog', error: error.message });
  }
};

// Controller function to fetch recent blog posts
exports.getRecentBlogs = async (req, res) => {
  try {
    // Fetch the 5 most recent blog posts
    const blogs = await Blog.find().sort({ createdAt: -1 }).limit(5);
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    res.status(500).json({ message: 'Error fetching recent blogs', error: error.message });
  }
};