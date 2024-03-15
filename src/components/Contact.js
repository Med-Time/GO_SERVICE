import React from 'react';

export default function Contact() {
    return (<>
        <p className='h1 m-2'>Contact Us</p>
        <div className="container d-flex ">
            <div className="row">
            <div className='col-lg-9 col-sm-12'>
                <form action="#" method="post">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="problem" className="form-label">Your Message</label>
                        <textarea className="form-control" id="" rows="3"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Wanna hear back?</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
            <div className="flex-column col-lg-2 col-sm-12">
                <div className="team-member">
                    <p>
                        Anmol Bhusal<br />
                        Phone: +917607665605
                    </p>
                        <a href="mailto:anmolbhusal.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
                <div className="team-member">
                    <p>
                        Bhishan Pangeni<br />
                        Phone: +919019979712
                    </p>
                    <a href="mailto:bhishan.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
                <div className="team-member">
                    <p>
                        Sagar Khadka<br />
                        Phone: +919764307846
                    </p>
                    <a href="mailto:sagar.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}