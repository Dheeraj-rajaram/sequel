import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth"

const RequireAuth = () => {
    const { authToken, setAuthToken } = useAuth()
    const location = useLocation();
    
    return (authToken ?
        <Outlet /> :
        <Navigate to="/access" state={{ from: location }} replace />
    )
}

export default RequireAuth;