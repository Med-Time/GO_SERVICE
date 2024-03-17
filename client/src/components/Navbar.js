import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function navbar({ isLoggedIn, onLogout}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 m-0">
          <a className="navbar-brand text-primary " href="/"><img src="Image/logo.jpeg" alt="Logo" className="logo" />GO SERVICE</a>
        <div className="container-fluid fs-5">
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
              <NavLink exact="true" activeclassname="active" className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item mx-3">
              <NavLink activeclassname="active" className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item mx-3">
              <NavLink activeclassname="active" className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
            </ul>
            {isLoggedIn ? (
              <Link to="/login">
                <button type="button" onClick={onLogout} class="btn btn-outline-dark">Log Out</button>
              </Link>
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
