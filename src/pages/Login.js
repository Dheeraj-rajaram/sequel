import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { useContext, useState } from 'react';
import UserPool from '../UserPool';
import Logout from '../components/logout/Logout';
import Axios from '../api/Axios';
import AuthContext from '../context/AuthProvider';
import useAuth from '../components/hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3002';

const Login = () => {
    let { authToken, setAuthToken } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/checklist';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await Axios.post('/login', { email, password });
        const token = response.data.accessToken;
        localStorage.setItem('token', token);

        // axios.defaults.baseURL = 'http://localhost:3002';
        // axios.defaults.headers.common['Content-Type'] = 'application/json';
        // axios.defaults.headers.post['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        navigate(from, { replace: true });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
