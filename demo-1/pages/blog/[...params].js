import { useRouter } from "next/router"

const BlogPosts = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <>These are project details of a client</>
    )
}

export default BlogPosts;