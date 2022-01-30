import React, { useState } from 'react';
import './adminWrapper.css'

const AdminDashboardWrapper = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleMenu = () => setShow(!show);
  return (
    <>
      <main className='dashboard-container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">Hospital name</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={handleMenu}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <h6 className='logged-in-user'>Welcome: <span>Administrator</span></h6>
              </div>
            </div>
          </div>
        </nav>
        <div className="d-flex">
          <div className="d-none d-lg-block">
          <div className="sidebar">
            <div className="d-flex flex-column flex-shrink-0 ps-3 pt-3 text-white sidebar-content">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Sidebar</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#profie" className="nav-link active" aria-current="page">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#reporting" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Reporting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#register" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Register Staff
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#clinic" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Set Up Clinic
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#customers" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div> */}
            </div>
          </div>
          </div>
        {show ? (
          <div className="sidebar">
            <div className="d-flex flex-column flex-shrink-0 ps-3 pt-3 text-white sidebar-content">
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <span className="fs-4">Sidebar</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#profile" className="nav-link active" aria-current="page">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#reporting" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Reporting
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#register" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Register Staff
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#clinic" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Set Up Clinic
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#customer" className="nav-link text-white">
                    <svg className="bi me-2" width="16" height="16"></svg>
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              {/* <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item" href="#">New project...</a></li>
                  <li><a className="dropdown-item" href="#">Settings</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div> */}
            </div>
          </div>): (
                ""
              )}

          <div className="main-content space-on-mobile">
            <div className="">
              <div className="container">
                {children}
              </div>
            </div>

          </div>
        </div>
      </main>

    </>
  );
};

export default AdminDashboardWrapper;
