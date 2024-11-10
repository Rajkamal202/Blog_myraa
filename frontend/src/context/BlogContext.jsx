import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

// Create a context for the blog state
const BlogContext = createContext();

// Custom hook to use the blog context
export const useBlogContext = () => useContext(BlogContext);

// Provider component to wrap the app and provide the blog state
export const BlogProvider = ({ children }) => {
  const [generatedBlog, setGeneratedBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to generate a blog post
  const generateBlog = async (prompt) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/generate-blog`, { prompt });
      setGeneratedBlog(response.data);
    } catch (err) {
      setError('An error occurred while generating the blog. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Value object to be provided to consumers
  const value = {
    generatedBlog,
    isLoading,
    error,
    generateBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};