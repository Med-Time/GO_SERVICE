import React from 'react'
import { Link } from 'react-router-dom'
export default function Login({ onLogin}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin();
        console.log('Login Successful');
      };

    return (
        <div className='Container'>
            <div className='row gx-5 d-flex align-items-center justify-content-center'>
                <div className='col-lg-6 col-sm-12'>
                        <div className='title'><a href='/'>Go Service</a>
                        </div>
                        <p className='slogan'>-We are the change we seek for our society</p>
                </div>
                <div className='col-md-6 align-items-center my-4'>
                    <form onSubmit={handleSubmit} method='' action=''>
                        <div className="form-floating">
                            <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email daddress" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="current-password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <Link to='/education'>
                        <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
                        </Link>
                    </form>
                        <p className="mt-5 mb-3 text-footer-secondary">Go Service © 2023-2024</p>
                </div>
            </div>
        </div>
    )
}
