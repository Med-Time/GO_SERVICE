import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="container">
            <div className="company">
                <h2 className='text-center'>About Go Service</h2>
                <p>Welcome to <b>"GO SERVICE,"</b> where innovation meets community empowerment. At "GO SERVICE,"
                    we're dedicated to revolutionizing the way individuals interact with their surroundings,
                    fostering a culture of proactive engagement and positive change.</p>
                <p className='header'>Company Profile and Brand:</p>
                <p className='details'>Our Project embodies versatility and inclusivity, seamlessly integrating front-end
                    design, back-end development, and database management. With a focus on efficient service delivery and
                    user-centric experiences, we empower individuals to raise concerns and contribute to positive change.
                    From education to healthcare, transportation, and waste management, we cater to diverse societal needs.</p>

                <p className='header'>Company Mission:</p>
                <p className='details'>At "GO SERVICE," our mission is to empower individuals and communities by providing 
                innovative technology-driven solutions that streamline service delivery and foster proactive engagement. 
                We are committed to bridging the gap between citizens and authorities, enabling seamless communication and 
                collaboration to address societal needs effectively. Through our user-centric approach, we strive to create 
                a more connected and responsive society where every voice is heard and every concern addressed.</p>

                <p className='header'>Company Vision:</p>
                <p className='details'>Our vision at "GO SERVICE" is to create a world where technology serves as a catalyst 
                for positive social change, driving sustainable development and community empowerment. We envision a future 
                where individuals have easy access to essential services, regardless of their background or location. 
                By leveraging cutting-edge technology and fostering a culture of collaboration, we aim to build resilient 
                communities where people thrive and meaningful progress is achieved.</p>

            </div>
            <h2>Our Team</h2>
            <div className="team">
                <div className="team-member">
                    <h5 className="team-role">Developer</h5>
                    <img src="Image/Anmol.jpg" alt="Anmol Bhusal" />
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
                    <img src="Image/sagar.jpg" alt="Sagar Khadka" />
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
