import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"

const useAuth = () => {
    // return useContext(AuthContext)
    return { 
        authToken: localStorage.getItem('token'), 
        setAuthToken: (token) => { localStorage.setItem('token', token); } 
    }
}

export default useAuth;