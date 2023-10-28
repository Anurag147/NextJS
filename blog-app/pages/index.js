import Hero from "../components/home-page/Hero";
import FeaturedPosts from '../components/home-page/featured-posts';

const HomePage = () => {

  const dummy = [{
    slug:'getting-started-with-next-js',
    title:'Getting Started with Next JS',
    image:'getting-started-nextjs.png',
    excerpt:'NextJS is a react framework for production',
    date:'2023-02-10'
  },
  {
    slug:'getting-started-with-next-js1',
    title:'Getting Started with Next JS',
    image:'getting-started-nextjs.png',
    excerpt:'NextJS is a react framework for production',
    date:'2023-03-10'
  }];
    return(
        <>
          <Hero/>
          <FeaturedPosts posts={dummy} />
        </>
    )
}

export default HomePage;