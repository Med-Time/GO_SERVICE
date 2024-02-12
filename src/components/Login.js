import React from 'react'

export default function Login() {
    return (
        <div className='Container'>
            <div className='row gx-5'>
                <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'style={{ height: '70vh' }}>
                        <div className='h1 text-center'>Go Service</div>
                        <div className="fs-5 text-end">We are the change we seek for our society</div>
                </div>
                <div className='col-md-6 align-items-center' style={{width : '45vw',height: '70vh',marginTop:'10%'}}>
                    <form >
                        {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
                        {/* <h1 className="h3 mb-3 fw-normal">Please sign in</h1> */}

                        <div className="form-floating">
                            <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email daddress" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
                        <button className="btn btn-success w-50 py-2 mx-2" type="submit">Create new Account</button>
                        <p className="mt-5 mb-3 text-body-secondary">© 2024</p>
                    </form>
                </div>
            </div>
        </div>
    )
}
