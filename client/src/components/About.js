import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="container">
            <div className="company">
                <h2 className='text-center'>About Go Service</h2>
                <p className='header'>Company Profile and Brand:</p>
                <p className='details'>GoService is will boast a user-friendly interface, enabling individuals to
                    seamlessly request services from the concerned authorities. The project empowers
                    users to express concerns and provide feedback effortlessly. </p>

                <p className='header'>Company Mission:</p>
                <p className='details'>GoService is  the project prioritizes scalability and adaptability, ensuring that "GO
                    SERVICE" can cater to a broad spectrum of services, including but not limited to
                    education, healthcare, transportation, and waste management. The integration of
                    geolocation services enhances service accessibility, providing users with localized
                    and relevant information. </p>

                <p className='header'>Company Vision:</p>
                <p className='details'>GoService is This Full Stack project is designed to develop an integrated service delivery
                    platform that addresses diverse societal needs, providing a streamlined, user
                    centric experience. It encompasses both front-end and back-end development,
                    utilizing React.js for the user interface and Node.js and Python for robust server
                    side functionality.</p>

            </div>
            <h2>Our Team</h2>
            <div className="team">
                <div className="team-member">
                    <h5 className="team-role">Developer</h5>
                    <img src="Image/man-dummy.jpeg" alt="Anmol Bhusal" />
                    <p className="member">Anmol Bhusal<br />USN: 1BM22CD006</p>
                    <div className="social-media">
                        <a href="/" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/anmol-bhusal-432792278" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/gitter52490" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <h5 className="team-role">Developer</h5>
                    <img src="Image/bhishan.jpg" alt="Bhishan Pangeni" />
                    <p className="member">Bhishan Pangeni<br />USN: 1BM22CD017</p>
                    <div className="social-media">
                        <a href="https://twitter.com/BhishanPangeni" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/bhishan-pangeni" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/bhishanP" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
                <div className="team-member">
                    <h5 className="team-role">Developer</h5>
                    <img src="Image/man-dummy.jpeg" alt="Sagar Khadka" />
                    <p className="member">Sagar Khadka<br />USN: 1BM22CD053</p>
                    <div className="social-media">
                        <a href="/" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/sagar-khadka-50612925a" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/thisisSagarKhadka" target="_blank" rel="me noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
