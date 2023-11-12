import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import React, { useState } from 'react';
import UserPool from '../UserPool';
import Logout from '../components/logout/Logout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })
        user.authenticateUser(authDetails, {
            onSuccess: (success) => {
                console.log({ success })
            },
            onFailure: (failure) => {
                console.error({ failure })
            },
            newPasswordRequired: (newPwd) => {
                console.log({ newPwd })
            }
        })
        console.log(email, password);
    };

    return (
        <div className="container mt-5">
            <Logout/>
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
