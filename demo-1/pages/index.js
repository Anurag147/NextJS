import Link from "next/link";
import { useRouter } from "next/router";

const HomePage = () => {

    const router = useRouter();

    return (
        <div>
            Home Page
            <ul>
                <li><Link href={"/clients"}>Clients</Link> </li>
                <li><Link href={"/portfolio"}>Portfolios</Link> </li>
            </ul>
            <button onClick={()=>{router.push('/clients/BHP/Finance')}}>Navigate to Client Page</button>
        </div>
    )
}

export default HomePage;