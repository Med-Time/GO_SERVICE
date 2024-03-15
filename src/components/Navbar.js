import React from 'react'
import { Link } from 'react-router-dom';
export default function navbar() {
  const isLoggedIn = false; // replace with your logic to check if user is logged in or not

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="/">GO SERVICE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
            {isLoggedIn ? (
              <img src="man-dummy" alt="User Face" className="mx-2" />
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-success mx-2" type="button">Login</button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}
