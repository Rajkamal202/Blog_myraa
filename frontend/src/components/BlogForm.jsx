import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useBlogContext } from '../context/BlogContext';

const BlogForm = () => {
  const [prompt, setPrompt] = useState('');
  const { generateBlog, isLoading, error } = useBlogContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateBlog(prompt);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Generate Your Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prompt" className="block text-gray-700 font-bold mb-2">
            Enter your blog topic or idea:
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
            rows="4"
            placeholder="E.g., The future of artificial intelligence in healthcare"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Generating...' : 'Generate Blog'}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </motion.div>
  );
};

export default BlogForm;