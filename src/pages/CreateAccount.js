import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import UserPool from "../UserPool";

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phonenumber, setPhonenumber] = useState();
    const [lastName, setLastName] = useState("");
    const [date, setDate] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('eyeoff');
    const [confirmType, setConfirmType] = useState('password');
    const [confirmIcon, setConfirmIcon] = useState('eyeoff');
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
        if (password && email) {
            setCanSignin(true)
        } else {
            setCanSignin(false)
        }
    }, [password, email])

    const onSubmit = (event) => {
        event.preventDefault();
        // UserPool.signUp(email, password, [], null, (err, data) => {
        //     if (err) {
        //         console.error(err.message)
        //     }
        //     else {
        //         console.log({ userSub: data.userSub, userName: data.user.username, clientId: data.user.pool.clientId });
        //     }
        // })
    }
    const handlePhoneChange = (event) => {
        const num = event.target.value.replace(/\D/g, '');
        const formattedPhoneNumber = '(' + num.substring(0, 3) + ') ' + num.substring(3, 6) + '-' + num.substring(6, 10);
        setPhonenumber(formattedPhoneNumber);
      };
    return (
        <section className="">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <nav className="navbar navbar-light bg-light border-bottom px-3 py-3">
                        <img src="/images/logo.png" alt="logo" width="130" />
                    </nav>
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
                                        <input className="form-control" id="email" type="email" placeholder=""
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="email">Enter Email Address *</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="has-float-label mb-3">
                                        <input className="form-control" id="firstName" type="text" placeholder=""
                                            onChange={(e) => setFirstName(e.target.value)} />
                                        <label htmlFor="firstName">First Name *</label>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="has-float-label mb-3">
                                        <input className="form-control" id="lastName" type="text" placeholder=""
                                            onChange={(e) => setLastName(e.target.value)} />
                                        <label htmlFor="lastName">Last Name *</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="my-2">Date of birth *</div>
                                    <div className="mb-3">
                                        <input className="form-control" id="yy" type="date" placeholder=""
                                            onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="my-2">Primary Phone number *</div>
                                    <div className="mb-3">
                                        <input className="form-control" 
                                            id="phone" 
                                            type="text" 
                                            placeholder="(XXX) XXX-XXXX"
                                            value={phonenumber}
                                            onChange={handlePhoneChange} />
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
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
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
                                                autoComplete="current-password"
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
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault0" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault0">
                                            Characters from (uppercase, lowercase, number, special characters)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault10">
                                            At least 8 characters long
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexCheckDefault20">
                                            Cannot include parts of first name, last name or username
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <strong className="">Health information</strong>
                            <div className="row mt-2">
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="has-float-label mb-2 col-sm-6">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value='0'>Gender</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                            </select>
                                        </div>
                                        <div className="has-float-label mb-2 col-sm-6">
                                            <select className="form-select" aria-label="Default select example">
                                                <option value='0'>Type of diabetes</option>
                                                <option value="1">Type one</option>
                                                <option value="2">Type two</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <h1 className="mt-3">Terms of use</h1>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Im 18 years of age or older
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                    <div className="mt-1">I have read and understood  <span className="text-primary"> Privacy Policy </span> and  <span className="text-primary">Terms of Use </span> </div>
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                <label className="form-check-label" htmlFor="flexCheckDefault2">
                                    I Authorize corporation, its distributors, affiliates, and wholly-owned subsidiaries to contact my telephone <br />
                                    or email regarding the Sequel Insulin management system and other diabetes related supplies and services
                                </label>
                            </div>

                            <div className="modal fade" style={{ marginTop: "-100px" }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog text-center modal-dialog-centered">
                                    <div className="modal-content">
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
                                </div>
                            </div>
                            <div className="d-grid col-lg-4 mt-4">
                                {
                                    canSignin ?
                                        <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={onSubmit}>Create account </button> :
                                        <button type="submit" className="btn btn-secondary" disabled>Create Account</button>
                                }
                            </div>
                            <div className="mt-3 mb-5">Already have an account?   <Link className="text-primary" style={{ textDecoration: "none" }} to="/access">Sign in</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateAccount;