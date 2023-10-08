import { useRouter } from "next/router"

const ProjectDetails = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <>These are project details of a client</>
    )
}

export default ProjectDetails;