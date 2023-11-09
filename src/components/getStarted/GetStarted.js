import { Link } from 'react-router-dom'

function GetStarted() {
    return (
        <section className="py-5 bg-custom">
            <div className="container">
                <div className="row">
                    <Link to="/access" className="col-lg-6 text-start mt-auto">
                        <button type="button" className="col-4 mx-auto btn bg-white fw-bold text-primary">Get Started</button>
                    </Link>
                    <div className="col-lg-6 text-end">
                        <img src="/images/img1.png" alt="logo" width="350" />
                    </div>
                </div>
            </div>
        </section >
    );
}

export default GetStarted;