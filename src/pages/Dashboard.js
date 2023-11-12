import Logout from "../components/logout/Logout";
import MinimalNav from "../components/navbar/MinimalNav";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem('token')
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            };
            try {
                const response = await Axios.post('/verify', {}, { headers });
                if (!response.data.isAuth) {
                    navigate('/login');
                } else {
                    setIsloading(false)
                }
            } catch (error) {
                navigate('/login');
            }
        }
        fetchData();
    }, []);

    return (<>
        {isLoading ? 
        <></> 
        :
        <>
            <MinimalNav />
            <Logout />
            <h1 className="text-center">Dashboard</h1>
        </>}
    </>)
}