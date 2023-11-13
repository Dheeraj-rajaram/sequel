import MinimalNav from "../components/navbar/MinimalNav";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(true);
    const email = localStorage.getItem('email')

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
                    navigate('/access');
                } else {
                    setIsloading(false)
                }
            } catch (error) {
                navigate('/access');
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
            <p className="text-center">Welcome to the dashboard! {email}</p>
        </>}
    </>)
}