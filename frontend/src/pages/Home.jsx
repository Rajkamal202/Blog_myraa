
import BlogForm from '../components/BlogForm';
import BlogPost from '../components/BlogPost';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <BlogForm />
      <BlogPost />
    </div>
  );
};

export default Home;