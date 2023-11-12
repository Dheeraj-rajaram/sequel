import { Link } from 'react-router-dom'

export default function Home() {
    return (<>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="logo" width="90" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-shop-window"></i>
                  &nbsp;About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-clipboard-plus"></i>
                  &nbsp;Our Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-lightbulb"></i>
                  &nbsp;Knowledge Base
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-robot"></i>
                  &nbsp;Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <section className="py-5 bg-custom">
            <div className="container">
                <div className="row">
                    <Link to="/access" className="col-lg-6 text-start d-flex align-items-center"  style={{ textDecoration: "none" }}>
                        <button type="button" className="col-4 mx-auto btn bg-white fw-bold text-primary">Get Started</button>
                    </Link>
                    <div className="col-lg-6 text-end">
                        <img src="/images/img1.png" alt="logo" width="350" />
                    </div>
                </div>
            </div>
        </section >
    </>)
}