import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        wantToHearBack: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        window.location.reload();

        // Access form data using event.target
        const formData = new FormData(event.target);
        formData.set('name', formData.get('name'));
        formData.set('email', formData.get('email'));
        formData.set('message', formData.get('message'));
        formData.set('wantToHearBack', formData.get('wantToHearBack'));
        console.log(formData);

        try {
            // Make a POST request using fetch
            const response = await fetch('http://127.0.0.1:8000/contact/submit', {
                method: 'POST',
                body: formData // Pass the FormData object as the body
            });

            // Check if the request was successful
            if (!response.ok) {
                // If not successful, throw an error with the status text
                throw new Error(`Failed to submit form data: ${response.statusText}`);
            }

            // If successful, log a success message
            console.log('Form data submitted successfully');

        } catch (error) {
            // Catch any errors that occur during the fetch or processing of the response
            console.error('Error:', error);
        }
    };


    return (
        <>
            <p className='h1 m-2'>Contact Us</p>
            <div className="container d-flex ">
                <div className="row">
                    <div className='col-lg-9 col-sm-12'>
                        <form onSubmit={handleSubmit} id='contactform'>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message</label>
                                <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="3"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="wantToHearBack" name="wantToHearBack" checked={formData.wantToHearBack} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="wantToHearBack">Wanna hear back?</label>
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
    );
}
