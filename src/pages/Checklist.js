import Axios from "../api/Axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

function CheckList() {
    let [progress, setProgress] = useState(33)
    let [isLoading, setIsloading] = useState(true);

    // change here
    let [step, setStep] = useState(1)
    let [IsUserGuideChecked, setUserGuide] = useState(false)
    let [IsInsulinPumpWithCoverChecked, setInsulinPumpWithCoverChecked] = useState(false)
    let [IsWalladapterChecked, setWalladapter] = useState(false)
    let [IsUsebCableChecked, setUsbCable] = useState(false)
    let [IsPumpchargerChecked, setPumpCharger] = useState(false)
    let [IsRechargableBatteryChecked, setRechargableBattery] = useState(false)
    let [IsPumpclipChecked, setPumpclip] = useState(false)

    let [checklistOptionText, setChecklistOptionText] = useState("A trainer will reach out to you within 24 hours to help you setup your device");

    const navigate = useNavigate();

    async function saveStepOne() {
        setStepToTwo();
        // try {
        //     // change here
        //     const email = localStorage.getItem('email')
        //     const response = await Axios.post(
        //         '/save-stepone',
        //         { email, IsUserGuideChecked, IsInsulinPumpWithCoverChecked, IsUsebCableChecked, IsWalladapterChecked, IsPumpchargerChecked, IsRechargableBatteryChecked, IsPumpclipChecked, step }
        //     );
        // } catch (error) {
        //     console.log(error)
        // }
    }
    function stringToBoolean(str) {
        return str === "true";
    }

    useEffect(() => {
        async function fetchData() {
            const email = localStorage.getItem('email')
            try {
                // change here
                const response = await Axios.post('/get-stepdata', { email });
                setUserGuide(stringToBoolean(response.data.user.IsUserGuideChecked));
                setInsulinPumpWithCoverChecked(stringToBoolean(response.data.user.IsInsulinPumpWithCoverChecked));
                setWalladapter(stringToBoolean(response.data.user.IsWalladapterChecked));
                setUsbCable(stringToBoolean(response.data.user.IsUsebCableChecked));
                setPumpCharger(stringToBoolean(response.data.user.IsPumpchargerChecked));
                setRechargableBattery(stringToBoolean(response.data.user.IsRechargableBatteryChecked));
                setPumpclip(stringToBoolean(response.data.user.IsPumpclipChecked));
            } catch (error) {

            }
        }
        fetchData();
    }, [])

    function setStepToTwo() {
        setStep(2);
        setProgress(66);
    }
    function setStepToOne() {
        setStep(1);
        setProgress(33);
    }

    async function setStepToThree() {
        setStep(3);
        setProgress(100);
        try {
            // change here
            const email = localStorage.getItem('email')
            const response = await Axios.post(
                '/save-stepone',
                { email, IsUserGuideChecked, IsInsulinPumpWithCoverChecked, IsUsebCableChecked, IsWalladapterChecked, IsPumpchargerChecked, IsRechargableBatteryChecked, IsPumpclipChecked, step }
            );
        } catch (error) {
            console.log(error)
        }
    }
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

    useEffect(() => {
        if (step !== 1) {
            setChecklistOptionText('Before activating the twist device we must show you how to use it')
        } else {
            setChecklistOptionText('A trainer will reach out to you within 24 hours to help you setup your device')
        }
    }, [step])

    return (<>
        {isLoading ? <></> : <section className="">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className=" container-fluid text-end">
                        <div className="row">
                            <div className="col-lg-6 bg-light">
                            </div>
                            <div className="col-lg-6">
                                <Link className="" to="/dashboard" style={{ textDecoration: "none" }}>
                                    <button type="submit" className="btn btn-sm shadow-none">
                                        <h4><i class="bi bi-x" style={{ color: "black" }}></i></h4>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 vh-100 bg-light">
                        <div className="container-fluid"  style={{maxWidth: "600px"}}>
                            <h1>Get started checklist</h1>
                            <h6>To get the best experience, we recommend completing these onboarding steps.</h6>
                            <div className="progress my-3" style={{ height: "12px" }}>
                                <div className="progress-bar bg-custom" role="progressbar" style={{ width: `${progress}%`, height: "20px" }}></div>
                            </div>
                            <div className="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px", cursor: "pointer" }} onClick={setStepToOne}>
                                <div className="p-2 my-1">
                                    <div>
                                        <h6>Schedule your training</h6>
                                        <p>
                                            {checklistOptionText}
                                        </p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            <div className="text-end" style={{ marginTop: "-50px" }}>
                                                <img src="/images/img4.png" alt="logo" width="20" />
                                            </div>
                                    }

                                </div>
                            </div>
                            <div className="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px", cursor: "pointer" }} onClick={setStepToTwo}>
                                <div className="p-2 my-1">
                                    <div>
                                        <h6>Supply checklist</h6>
                                        <p>Make sure your supplies are ready for testing</p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            <div className="text-end" style={{ marginTop: "-50px" }}>
                                                <img src="/images/img4.png" alt="logo" width="20" />
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px" }}>
                                <div className="p-2 my-1">
                                    <div>
                                        <h6>Download the medical app</h6>
                                        <p>Access health hub: intro, how it works, a day in the life</p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            step == 3 ?
                                                <div className="text-end" style={{ marginTop: "-50px" }}>
                                                    <img src="/images/img4.png" alt="logo" width="20" />
                                                </div> : <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                    }
                                </div>
                            </div>
                        </div><br /><br />
                    </div>
                    <div className="col-lg-6 vh-100">
                        {
                            step === 1 ? <div className="container-fluid" style={{maxWidth: "600px"}}>
                                <h1>Schedule your training</h1>
                                <div className="">
                                    <div className=" mt-4" style={{ maxWidth: "600px" }}>
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            <div className="px-3 mt-2">
                                                <h6>A trainer will reach out to you within 24 hours to help with mandatory training on your Twiist device and Oreo - CGM app. Alternatively, you can call us on 1-800# and set up  a training session.</h6>
                                                <h6>
                                                    <div className="my-4">Let's get you started with pre-training activities.</div>
                                                </h6>
                                                <h6>
                                                    <div className="my-4">Before meeting with your trainer, please ensure that you complete the following three sections of training in Medical App</div>
                                                </h6>
                                                <p><strong>Introduction:</strong> Begin your wellness adventure with a warm introduction to our App, discover support, resources and personalized care.</p>

                                                <p>
                                                    <div className="my-4"><strong>How your application works:</strong> Learn how to effortlessly manage your health. Uncover features empowering you, from tracking vital signals to accessing educational materials.</div>
                                                </p>
                                                <p>
                                                    <div className="my-4"><strong>A day in the life:</strong> Before meeting your trainer, see how the app seamlessly integrates into daily life. Witness a day in the life of a user, preparing you for success on your health journey.</div>
                                                </p>

                                                <strong className="mt-1">
                                                    NOTE: Your Twiist ID remains the same across all Twiist applications.
                                                </strong>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="p-2">
                                        <div className="">
                                            <div className="d-grid mt-4">
                                                <button type="submit" className="btn btn-custom" onClick={saveStepOne}>Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> : step === 2 ? <div>
                                <div className="container-fluid mt-5" style={{maxWidth: "600px"}}>
                                    <h1>Supply checklist</h1>
                                    <div className="mt-2">
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            <div className="mt-2">
                                                <h6>If you find any supplies missing from the kit, please contact Sequel <br />on 1-800 # and we will be able to assist you</h6>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="border mt-2 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-" type="checkbox" value=""
                                                        id="tuserguide"
                                                        checked={IsUserGuideChecked}
                                                        onChange={() => setUserGuide(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="tuserguide">
                                                        <div className="px-3 mt-2">
                                                            <h6>Twiist user guide</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="insulinpumpwithcover"
                                                        checked={IsInsulinPumpWithCoverChecked}
                                                        onChange={() => setInsulinPumpWithCoverChecked(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="insulinpumpwithcover">
                                                        <div className="px-3 mt-2">
                                                            <h6>Twiist insulin pump with attached pump cover</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="usbcable"
                                                        checked={IsUsebCableChecked}
                                                        onChange={() => setUsbCable(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="usbcable">
                                                        <div className="px-3 mt-2">
                                                            <h6>USB cable</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="walladapter"
                                                        checked={IsWalladapterChecked}
                                                        onChange={() => setWalladapter(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="walladapter">
                                                        <div className="px-3 mt-2">
                                                            <h6>Wall powered adapter with 2 USB ports</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="pumpcharger"
                                                        checked={IsPumpchargerChecked}
                                                        onChange={() => setPumpCharger(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="pumpcharger">
                                                        <div className="px-3 mt-2">
                                                            <h6>2 pump batter chargers</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="rechargablebattery"
                                                        checked={IsRechargableBatteryChecked}
                                                        onChange={() => setRechargableBattery(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="rechargablebattery">
                                                        <div className="px-3 mt-2">
                                                            <h6>Rechargable pump batteries (4 batteries)</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div className="border mt-3 p-1 px-3">
                                                    <input className="form-check-input mt-2 m-1" type="checkbox" value=""
                                                        id="pumpclip"
                                                        checked={IsPumpclipChecked}
                                                        onChange={() => setPumpclip(prev => !prev)} />
                                                    <label className="form-check-label" htmlFor="pumpclip">
                                                        <div className="px-3 mt-2">
                                                            <h6>Pump clip</h6>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-custom" onClick={setStepToThree}>Continue</button>
                                    </div>
                                </div>
                            </div> : <div className="container-fluid"  style={{maxWidth: "600px"}}>
                                <h1>Download the medical app</h1>
                                <strong>Let's guide you on how to download Oreo- CGM app.<br /><br /></strong>

                                <img src="/images/img5.png" alt="logo" width="500" />
                                <Link className="d-grid mt-4" to="/dashboard" style={{ textDecoration: "none" }}>
                                    <button type="submit" className="btn btn-custom">Go to dashboard</button>
                                </Link>
                            </div>
                        }
                        <br /><br />
                    </div>
                </div>
            </div>
        </section>}
    </>);
}

export default CheckList;