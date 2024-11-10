import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-3xl"
    >
      <h1 className="text-4xl font-bold mb-6">About BlogGenius</h1>
      <div className="prose prose-lg">
        <p>
          BlogGenius is an innovative platform that harnesses the power of artificial intelligence to help content creators
          generate high-quality blog posts with ease. Our advanced AI technology analyzes your input and creates
          well-structured, informative articles on a wide range of topics.
        </p>
        <p>
          Whether you're a seasoned blogger looking to streamline your content creation process or a newcomer seeking
          inspiration, BlogGenius is here to assist you in crafting engaging and relevant blog posts that resonate with
          your audience.
        </p>
        <h2 className="text-2xl font-bold mt-6 mb-4">How It Works</h2>
        <ol>
          <li>Enter your blog topic or idea into our user-friendly interface.</li>
          <li>Our AI-powered system processes your input and generates a comprehensive blog post.</li>
          <li>Review and edit the generated content to add your personal touch and ensure accuracy.</li>
          <li>Publish your polished blog post and engage your readers!</li>
        </ol>
        <p>
          With BlogGenius, you can save time and effort while maintaining a consistent flow of high-quality content for your
          blog or website. Try it today and experience the future of content creation!
        </p>
      </div>
    </motion.div>
  );
};

export default About;