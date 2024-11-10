import { motion } from 'framer-motion';
import { useBlogContext } from '../context/BlogContext';

const BlogPost = () => {
  const { generatedBlog } = useBlogContext();

  if (!generatedBlog) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4">{generatedBlog.title}</h2>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: generatedBlog.content }}></div>
    </motion.article>
  );
};

export default BlogPost;