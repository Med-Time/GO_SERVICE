import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
  return (
    <>
      {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="/">GO SERVICE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact Us</a>
              </li>
            </ul>
            {/* <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success mx-2" type="submit">Search</button>
            </form> */}
             <Link to="/login">
            {/*  target = "_blank" */}
              <button className="btn btn-outline-success mx-2" type="button">Builder</button>
            </Link>
          </div>
      </div>
      </nav>
    </>
  )
}
