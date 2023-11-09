import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Access() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('eyeoff');
    const [canSignin, setCanSignin] = useState(false);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon("eye");
            setType('text')
        } else {
            setIcon("eyeoff")
            setType('password')
        }
    }

    useEffect(() => {
        if (password && email) {
            setCanSignin(true)
        } else {
            setCanSignin(false)
        }
    }, [password, email])

    return (
        <section className="">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-lg-5 vh-100">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <nav className="navbar navbar-expand-lg navbar-light mb-5">
                                    <img src="/images/logo.png" alt="logo" width="90" />
                                </nav>
                                <div className="col-md-auto">
                                    <div className="text-center">
                                        <h1 className="display-6">Welcome to Twiist</h1>
                                        <p className="mb-3">Sign in to Sequel with your Email ID</p>
                                        <form className="pt-2">
                                            <div className="has-float-label mb-3">
                                                <input className="form-control" id="email" type="email" placeholder=""
                                                    onChange={(e) => setEmail(e.target.value)} />
                                                <label htmlFor="email">Enter Email *</label>
                                            </div>

                                            <div className="input-group mb-3">
                                                <span className="has-float-label">
                                                    <input
                                                        className="form-control"
                                                        id="password"
                                                        type={type}
                                                        name="password"
                                                        placeholder=""
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        autoComplete="current-password"
                                                    />
                                                    <label htmlFor="password">Password *</label>
                                                </span>
                                                <div className="input-group-append">
                                                    <button style={{ borderTop: "solid #dee2e6 1px", borderLeft: "solid #dee2e6 1px", borderRight: "solid #dee2e6 1px", borderBottom: "solid #dee2e6 1px", padding: "6px", background: 'white', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} type="button"><span onClick={handleToggle}>
                                                        {
                                                            icon === 'eye' ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                                        }
                                                    </span></button>
                                                </div>
                                            </div>
                                            <div className="d-grid">
                                                {canSignin ? <Link type="submit" to="/checklist" className="btn btn-custom">Sign In</Link> : <button type="submit" className="btn btn-secondary" disabled>Sign In</button>}
                                            </div>
                                            <div className="mt-1">Frogot your <Link className="text-primary" style={{ textDecoration: "none" }} to="/forgot-password">Password?</Link></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 vh-100 bg-light">
                        <div className="container">
                            <div className="row justify-content-md-center">
                                <div className="col-md-auto  mt-5">
                                    <div className="text-center">
                                        <div className="card" style={{ marginTop: "197px" }}>
                                            <div style={{ marginTop: "-197px" }}><img src="/images/img2.png" alt="logo" width="280" /></div>
                                            <div className="card-body text-start">
                                                <h5 className="card-title">Information about why patient needs to create account</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur.</p>
                                                <h5 className="card-title">Information about why patient needs to create account</h5>
                                                <div className="row">
                                                    <div className="col-lg-5"><ul>
                                                        <li className="">Lorem ipsum</li>
                                                        <li className="">Lorem ipsum</li>
                                                        <li className="">Lorem ipsum</li>
                                                    </ul>
                                                    </div>
                                                    <div className="col-lg-5"><ul>
                                                        <li className="">Lorem ipsum</li>
                                                        <li className="">Lorem ipsum</li>
                                                    </ul>
                                                    </div>
                                                </div>
                                                <Link className="d-grid" style={{textDecoration: "none"}} to="/create-account">
                                                    <button type="submit" className="btn btn-custom">Create Account</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Access;