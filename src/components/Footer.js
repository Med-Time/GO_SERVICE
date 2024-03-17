import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container">
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
        {/* <li className="nav-item"><Link to ="/contact" className="nav-link px-2 text-body-secondary">Features</Link></li> */}
        {/* <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Pricing</a></li> */}
        <li className="nav-item"><Link to="/faq" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
        <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
      </ul>
      <p className="text-center text-body-secondary">© 2023-2024 Go Service, Inc</p>
    </footer>
  </div>
  )
}
