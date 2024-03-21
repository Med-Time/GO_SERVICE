import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission

        try {
            // Make a POST request to the backend server to authenticate the user
            const response = await fetch('http://127.0.0.1:8000/account/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (!response.ok) {
                throw new Error('Failed to authenticate');
            }
            else{
            // If authentication is successful, navigate the user to /education
            props.onLogin();
            navigate('/education');
            }
        } catch (error) {
            // Handle authentication errors
            console.error('Error authenticating:', error);
            alert("Invalid Credentials")
            setErrorMessage('Invalid credentials');
        }
        
    };

    return (
        <div className='Container'>
            <div className='row gx-5 d-flex align-items-center justify-content-center'>
                <div className='col-lg-6 col-sm-12 brand'>
                    <div className='title'>Go Service
                    </div>
                        <p className='slogan'>-We are the change we seek for our society</p>
                </div>
                <div className='col-md-6 align-items-center login'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating">
                            <input type="email" className="form-control mb-3" id="floatingInput" name="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        {errorMessage && <p className="error">{errorMessage}</p>}

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        
                        <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
                        
                    </form>
                        <p className="mt-5 mb-3 text-footer-secondary">Go Service © 2023-2024</p>
                </div>
            </div>
        </div>
    );
}