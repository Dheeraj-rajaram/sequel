import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Axios from "../api/Axios";
import { Modal } from 'react-bootstrap';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState('')

    useEffect(() => {
        setError(null)
    }, [email])

    async function handleClick(e) {
        e.preventDefault();
        try {
            await Axios.post('/forgot-password', { email });
            handleShow()
        } catch (error) {
            setError(error.response.data)
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<>
        <section className="bg-light vh-100">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <nav className="navbar navbar-light bg-light border-bottom px-3 py-3">
                        <img src="/images/logo.png" alt="logo" width="130" />
                    </nav>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                        <form className="pt-5">
                            <h2>Forgot Password?</h2>
                            <p>Please enter your email address, we will send you an email shortly</p>
                            <div className="has-float-label mb-3">
                                <input className="form-control" id="email" type="email" placeholder=""
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="email">Email Address *</label>
                                <p className="text-danger">{error}</p>
                            </div>

                            <div className="modal fade" style={{ marginTop: "-100px" }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog text-center modal-dialog-centered">
                                    <Modal show={show} onHide={handleClose} centered>
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <div className="container text-center">
                                                    <div className="row">
                                                        <div className="col-lg-1"></div>
                                                        <div className="col-lg-10"><div className="modal-body w-100">
                                                            <img src="/images/img3.png" style={{ marginTop: "-90px"}} alt="logo" width="130" />
                                                            <h2>Thank you!</h2>
                                                            <div> You will recieve a reminder email shortly.</div>
                                                            <Link style={{ textDecoration: "none" }} className="d-grid">
                                                                <button type="button" className="btn btn-custom mt-3" onClick={handleClose}>Close</button>
                                                            </Link>
                                                        </div></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            {email ? <div className="d-grid mt-4">
                                <button type="button"
                                    className="btn btn-custom"
                                    onClick={handleClick}>Submit</button>
                            </div> : ''}
                            <div className="mt-3">Go to <Link className="text-primary" style={{ textDecoration: "none" }} to="/access">Sign in</Link></div>
                        </form>
                    </div>

                    <div className="col-lg-6"></div>
                </div>
            </div>
        </section>
    </>);
}

export default ForgotPassword;