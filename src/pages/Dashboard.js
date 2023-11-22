import MinimalNav from "../components/navbar/MinimalNav";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CustomNav from "../components/navbar/CustomNav";

export default function Dashboard() {
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState(true);
    const email = localStorage.getItem('email')

    useEffect(() => {
        async function fetchData() {
            const token = localStorage.getItem('token')
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            };
            try {
                const response = await Axios.post('/verify', {}, { headers });
                if (!response.data.isAuth) {
                    navigate('/access');
                } else {
                    setIsloading(false)
                }
            } catch (error) {
                navigate('/access');
            }
        }
        fetchData();
    }, []);

    return (<>
        {isLoading ?
            <></>
            :
            <>
                <MinimalNav />
                <div className="container-fluid border border-bottom-dark shadow bg-white ">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src="/images/img9.png" alt="logo" height="55" className="m-3" />
                                </div>
                                <div className="col-lg-10">
                                    <h4 className="align-middle">Welcome, {email}</h4>
                                    <h6 className="align-middle text-secondary">Let's walk you through some basic steps on setting up your account.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-end">
                            <img src="/images/img8.png" alt="logo" height="100" />
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-5 w" style={{ width: "1000px" }}>
                    <div className="row row-cols-1 row-cols-md-3 g-4 ">
                        <div className="col">
                            <div className="card h-100 color1" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Onboarding checklist
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Review, you have all supplies needed for your Twiist insulin pump.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>View Onboarding Checklist</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color2" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Account management
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Account management oversees user accounts in the app.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>Update accounts</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color3" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Customer support
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Get answers to all your questions. Quick chat with our live team to get started.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>Start a conversation</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div><div className="col">
                            <div className="card h-100 color4" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Health data
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Personalized record of your health data.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>View profile history</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color5" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Device & pump settings
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Get a better understanding of how the insulin works with the pump.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>View pump flow</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color6" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Access management
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Customize the data access by selecting who can view your information
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>Access management</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 color5" style={{ borderRadius: "20px" }}>
                                <h4 className="card-text mt-3  mx-3">
                                    Knowledge hub
                                </h4>
                                <h6 className="card-text mt-4 mx-3">
                                    Get a better understanding through videos and eLearning material.
                                </h6>
                                <div className="mt-4 text-center">
                                    <button type="button" style={{ backgroundColor: "white", color: "black" }} className="btn btn-outline-dark rounded-pill"><strong>Visit Knowledge hub</strong> <i className="bi bi-arrow-right"></i></button>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid text-center mt-4 " style={{backgroundColor: "#12284c", color: "white"}}>
                    <div className="row align-items-center pt-5">
                        <div className="col text-start mx-4">
                            <h5> Sequel / Twiist device</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            <br/><img src="/images/img11.png" alt="logo" height="30" className="m-3" />
                            </p>
                        </div>
                        <div className="col text-start mx-4">
                            <h5> Need help </h5>
                            <p><i class="bi bi-chevron-right"></i> About data / Sequel</p>
                            <p><i class="bi bi-chevron-right"></i> Customer support</p>
                            <p><i class="bi bi-chevron-right"></i> Faq</p>
                            <br/><br/>
                        </div>
                        <div className="col text-start  mx-4">
                            <h5> Legal </h5>
                            <p><i class="bi bi-chevron-right"></i> Privacy policy</p>
                            <p><i class="bi bi-chevron-right"></i> Terms of use</p>
                            <p><i class="bi bi-chevron-right"></i> Important safety information</p>
                            <p><i class="bi bi-chevron-right"></i> Copyright statement</p><br/>
                        </div>
                    </div>
                </div>
            </>}
    </>)
}