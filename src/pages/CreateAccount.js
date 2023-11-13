import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import UserPool from "../UserPool";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from 'primereact/calendar';
import { InputMask } from 'primereact/inputmask';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Axios from "../api/Axios";
import { Modal } from 'react-bootstrap';

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phonenumber, setPhonenumber] = useState();
    const [lastName, setLastName] = useState("");
    const [dob, setDOB] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('eyeoff');
    const [confirmType, setConfirmType] = useState('password');
    const [confirmIcon, setConfirmIcon] = useState('eyeoff');
    const [canSignin, setCanSignin] = useState(false);
    const [older18, setOlder18] = useState(false)
    const [hasReadPolicy, setHasreadPolicy] = useState(false)
    const [hasAuthorized, setHasAuthorized] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')
    const [fnameErr, setFnameErr] = useState('')
    const [lnameErr, setLnameErr] = useState('')

    const [isPwdLength, setIsPwdLengthValid] = useState(false);
    const [isPwdChars, setIsPwdCharValid] = useState(false);
    const [isPwdLName, setIsPwdLNameValid] = useState(false);
    const [isPwdFName, setIsPwdFNameValid] = useState(false);
    const [pwdMatchState, setPwdMatchState] = useState(true);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon("eye");
            setType('text')
        } else {
            setIcon("eyeoff")
            setType('password')
        }
    }
    const handleConfirmToggle = () => {
        if (confirmType === 'password') {
            setConfirmIcon("eye");
            setConfirmType('text')
        } else {
            setConfirmIcon("eyeoff")
            setConfirmType('password')
        }
    }

    
    useEffect(() => {
        setError(null);
    }, [email, firstName, lastName, dob, phonenumber, confirmPassword, password]);
    
    useEffect(() => {
        setFnameErr(null);
    }, [email, lastName, firstName, dob, phonenumber, confirmPassword, password]);
    
    useEffect(() => {
        setLnameErr(null);
    }, [email, firstName, dob, phonenumber, confirmPassword, password]);

    useEffect(() => {
        if (password && email && older18 && hasAuthorized && hasReadPolicy) {
            setCanSignin(true)
        } else {
            setCanSignin(false)
        }
    }, [password, email, older18, hasAuthorized, hasReadPolicy])

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
            if(!emailRegex.test(email)){
                throw 'email is invalid';
            }
            if(/\d/.test(firstName) || firstName.length === 0 ){
                throw 'first name can only contain letter'
            }
            if(/\d/.test(lastName) || lastName.length === 0){
                throw 'last name can only contain letter'
            }
            if(!phonenumber){
                throw 'phone number cannot be empty'
            }
            if(!dob){
                throw 'date of birth cannot be empty'
            }
            if (!isPwdLength || !isPwdChars || !isPwdLName || !isPwdFName || !pwdMatchState) {
                throw "passwords do not match the criteria"
            }

            if (password !== confirmPassword) {
                setPwdMatchState(false)
                throw "passwords are not the same";
            }
            let response = await Axios.post('/signup', { email, firstName, lastName, dob, phonenumber, password });
            if(response.data?.isDuplicate) {
                throw "user already exists";
            }
            UserPool.signUp(email, password, [], null, (err, data) => {
                if (err) {
                    console.error(err.message)
                }
                else {
                    console.log({ userSub: data.userSub, userName: data.user.username, clientId: data.uddser.pool.clientId });
                }
            })
            handleShow()
        } catch (error) {
            setError(error || 'something went wrong!')
        }
    }


    function handlePasswordValidation(password) {
        setPassword(password)
        if (password.length < 8) {
            setIsPwdLengthValid((prev) => false)
        } else {
            setIsPwdLengthValid((prev) => true)
        }

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (hasUppercase &&
            hasLowercase &&
            hasDigit &&
            hasSpecialChar) {
            setIsPwdCharValid((prev) => true)
        } else {
            setIsPwdCharValid((prev) => false)
        }

        if (password.toLocaleLowerCase().includes(firstName.toLocaleLowerCase()) || password.length === 0) {
            setIsPwdFNameValid((prev) => false)
        } else {
            setIsPwdFNameValid((prev) => true)
        }

        if (password.toLocaleLowerCase().includes(lastName.toLocaleLowerCase()) || password.length === 0) {
            setIsPwdLNameValid((prev) => false)
        } else {
            setIsPwdLNameValid((prev) => true)
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <section className="">
                <div className="container-fluid">
                    <div className="row justify-content-md-center">
                        <nav className="navbar navbar-light bg-light border-bottom px-3 py-3">
                            <img src="/images/logo.png" alt="logo" width="130" />
                        </nav>
                        {error? <div className="alert alert-danger" role="alert">{error}</div>: ''}
                        <div className="col-md-auto w-75">
                            <div className="text-start mt-5">
                                <div className="">Account setup</div>
                                <h1 className=" font-weight-bold">Twiist User Information</h1>
                                <div className="">To finish creating a new account, please complete the information below</div>
                            </div>
                            <form className="pt-4">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="has-float-label mb-3">
                                            <input className="form-control" id="email" type="email"
                                                placeholder=""
                                                onChange={(e) => setEmail(e.target.value)} />
                                            <label htmlFor="email">Enter Email Address *</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="has-float-label mb-3">
                                            <input className="form-control" id="firstName" type="text"
                                                placeholder=""
                                                onChange={(e) => setFirstName(e.target.value)} />
                                            <label htmlFor="firstName">First Name *</label>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="has-float-label mb-3">
                                            <input className="form-control" id="lastName" type="text"
                                                placeholder=""
                                                onChange={(e) => setLastName(e.target.value)} />
                                            <label htmlFor="lastName">Last Name *</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="my-2">Date of birth *</div>
                                        <div className="mb-3">
                                            <Calendar
                                                value={dob}
                                                onChange={(e) => setDOB(e.value)}
                                                dateFormat="mm/dd/yy"
                                                placeholder="mm-dd-yy"
                                                showIcon />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="my-2">Primary Phone number *</div>
                                        <div className="mb-3">
                                            <InputMask id="phone"
                                                mask="(999) 999-9999"
                                                placeholder="(XXX) XXX-XXXX"
                                                onChange={(e) => setPhonenumber(e.target.value)}></InputMask>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2 mb-3">
                                    <div className="col-sm-6">
                                        <strong className="my-2">Create new password *</strong>
                                        <div className="input-group mb-3 mt-3">
                                            <span className="has-float-label">
                                                <input
                                                    className="form-control"
                                                    id="password"
                                                    type={type}
                                                    name="password"
                                                    placeholder=""
                                                    value={password}
                                                    onChange={(e) => handlePasswordValidation(e.target.value)}
                                                />
                                                <label htmlFor="password">Password</label>
                                            </span>
                                            <div className="input-group-append">
                                                <button style={{ borderTop: "solid #dee2e6 1px", borderLeft: "solid #dee2e6 1px", borderRight: "solid #dee2e6 1px", borderBottom: "solid #dee2e6 1px", padding: "6px", background: 'white', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} type="button"><span onClick={handleToggle}>
                                                    {
                                                        icon === 'eye' ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                                    }
                                                </span></button>
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="has-float-label">
                                                <input
                                                    className="form-control"
                                                    id="confirmPassword"
                                                    type={confirmType}
                                                    name="confirmPassword"
                                                    placeholder=""
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                                <label htmlFor="confirmPassword">Confirm Password</label>
                                            </span>
                                            <div className="input-group-append">
                                                <button style={{ borderTop: "solid #dee2e6 1px", borderLeft: "solid #dee2e6 1px", borderRight: "solid #dee2e6 1px", borderBottom: "solid #dee2e6 1px", padding: "6px", background: 'white', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} type="button"><span onClick={handleConfirmToggle}>
                                                    {
                                                        confirmIcon === 'eye' ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                                    }
                                                </span></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <strong className="">Password requirements</strong>
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault0" checked={isPwdChars} readOnly />
                                            <label className="form-check-label" htmlFor="flexCheckDefault0">
                                                Characters from (uppercase, lowercase, number, special characters)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" checked={isPwdLength} readOnly />
                                            <label className="form-check-label" htmlFor="flexCheckDefault10">
                                                At least 8 characters long
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" checked={isPwdFName && isPwdLName} readOnly />
                                            <label className="form-check-label" htmlFor="flexCheckDefault20">
                                                Cannot include parts of first name, last name or username
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="mt-3">Terms of use</h1>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" checked={older18} onChange={() => setOlder18((prevState) => !prevState)} id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Im 18 years of age or older
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" checked={hasReadPolicy} onChange={() => setHasreadPolicy((prevState) => !prevState)} id="flexCheckDefault1" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                        <div className="mt-1">I have read and understood  <span className="text-primary"> Privacy Policy </span> and  <span className="text-primary">Terms of Use </span> </div>
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="checkbox" checked={hasAuthorized} onChange={() => setHasAuthorized((prevState) => !prevState)} id="flexCheckDefault2" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                                        I Authorize corporation, its distributors, affiliates, and wholly-owned subsidiaries to contact my telephone <br />
                                        or email regarding the Sequel Insulin management system and other diabetes related supplies and services
                                    </label>
                                </div>
                                <div className="modal fade" style={{ marginTop: "-100px" }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog text-center modal-dialog-centered">
                                        <Modal show={show} onHide={handleClose} centered>
                                            <div className="modal-content text-center">
                                                <div className="modal-body">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-1"></div>
                                                            <div className="col-lg-10"><div className="modal-body w-100">

                                                                <img src="/images/img3.png" style={{ marginTop: "-90px" }} alt="logo" width="130" />
                                                                <h2>Thank you!</h2>
                                                                <div> You will recieve a confirmation email shortly with a link to setup the rest of your account</div>
                                                                <Link to="/access" className="d-grid" style={{ textDecoration: "none" }} > <button type="button" className="btn btn-custom mt-3" data-bs-dismiss="modal">Close</button></Link>
                                                            </div></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="d-grid col-lg-4 mt-4">
                                    {
                                        canSignin ?
                                            <button type="button" className="btn btn-custom" onClick={onSubmit}>Create account </button> :
                                            <button type="submit" className="btn btn-secondary" disabled>Create Account</button>
                                    }
                                </div>
                                <div className="mt-3 mb-5">Already have an account?   <Link className="text-primary" style={{ textDecoration: "none" }} to="/access">Sign in</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CreateAccount;