import React from 'react';

export default function Contact() {
    return (<>
        <p className='h1 m-2'>Contact Us</p>
        <div className="container d-flex ">
            <div className='w-50'>
                <form action="#" method="post">
                    <div class="mb-3">
                        <label for="email" class="form-label">Name</label>
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="problem" class="form-label">Your Message</label>
                        <textarea class="form-control" id="" rows="3"></textarea>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Wanna hear back?</label>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Send Message</button>
                </form>
            </div>
            <div className="team flex-column"style={{marginLeft:15}}>
                <div class="team-member">
                    <p>
                        Anmol Bhusal<br />
                        Phone: +917607665605
                    </p>
                        <a href="mailto:anmolbhusal.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
                <div class="team-member">
                    <p>
                        Bhishan Pangeni<br />
                        Phone: +919019979712
                    </p>
                    <a href="mailto:bhishan.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
                <div class="team-member">
                    <p>
                        Sagar Khadka<br />
                        Phone: +919764307846
                    </p>
                    <a href="mailto:sagar.cd22@bmsce.ac.in?subject=Contact">Send email</a>
                </div>
            </div>
        </div>
    </>
    )
}