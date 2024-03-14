import React from 'react'

export default function About() {
    return (
        <div className="container">
            <div className="company">
                <h1>About</h1>
                <h2>About Go Service</h2>
                <ol>
                    <li>
                        <p >Company Profile and Brand:</p>
                        <p className='details'>GoService is </p>
                    </li>
                    <li>
                        <p >Company Mission:</p>
                        <p className='details'>GoService is </p>
                    </li>
                    <li>
                        <p >Company Vision:</p>
                        <p className='details'>GoService is </p>
                    </li>
                </ol>
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