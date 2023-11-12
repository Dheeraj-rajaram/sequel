import Logout from "../components/logout/Logout";
import MinimalNav from "../components/navbar/MinimalNav";

export default function Dashboard() {

    return (<>
        <MinimalNav />
        <Logout/>
        <h1 className="text-center">Dashboard</h1>
    </>)
}