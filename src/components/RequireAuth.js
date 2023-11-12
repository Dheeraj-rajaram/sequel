import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./hooks/useAuth"

const RequireAuth = () => {
    const { authToken, setAuthToken } = useAuth()
    const location = useLocation();

    console.log("here is auth from requreSUt", authToken)
    return (authToken ?
        <Outlet /> :
        <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth;