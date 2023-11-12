import { Navigate, Outlet} from "react-router-dom";

const useAuth = () => {
    const user = {loggedIn: true};
    return user && user.loggedIn;
}

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return isAuth? <Outlet /> : <Navigate to="/access" />
};

export default ProtectedRoute;
