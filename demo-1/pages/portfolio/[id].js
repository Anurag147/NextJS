import { useRouter } from "next/router";

const dynamicPortfolioId = ()=> {

    const router = useRouter();
    console.log(router); //Contains the dynamic ID in the router.query property 

    return (
        <>dynamicPortfolioId Page</>
    )
}

export default dynamicPortfolioId;