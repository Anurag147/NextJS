import AllPosts from "../../components/posts/all-posts";

const AllPostPage = () => {

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

    return (
        <AllPosts posts={dummy}></AllPosts>
    )
}

export default AllPostPage;