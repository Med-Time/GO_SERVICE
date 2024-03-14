import React from 'react'

export default function Contact() {
    return (
        <div className="container">
            <h1>Contact Us</h1>
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
            <div className="team">
                <h2>Our Team</h2>
                <ol>
                    <li>
                        <p className='Team Member'>Developer</p>
                        <img src="team_member_image.jpg" alt="Anmol Bhusal" />
                        <div className="social-media">
                            <a href="https://twitter.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <p className='Team Member'>Developer</p>
                        <img src="team_member_image.jpg" alt="Bhishan Pangeni" />

                        <div className="social-media">
                            <a href="https://twitter.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <p className='Team Member'>Developer</p>
                        <img src="team_member_image.jpg" alt="Sagar Khadka" />
                        <div className="social-media">
                            <a href="https://twitter.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://linkedin.com/in/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/team_member" target="_blank" rel="me noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}