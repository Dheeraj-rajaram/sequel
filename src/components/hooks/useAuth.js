import { useContext } from "react"
import AuthContext from "../../context/AuthProvider"
import Axios from '../../api/Axios';
import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3002';
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// const response = await axios.post('/verify');
// // console.log({isAuth: response.data.isAuth, mes: 'from useAuth'})

const useAuth = () => {
    return {
        authToken: localStorage.getItem('token'),
        setAuthToken: (token) => { localStorage.setItem('token', token); }
    }
}

export default useAuth;