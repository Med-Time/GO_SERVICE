// // // import { useNavigate } from 'react-router-dom';
// import React from 'react'
// import { Link } from 'react-router-dom'
// export default function Login() {
//     return (
//         <div className='Container'>
//             <div className='row gx-5 d-flex align-items-center justify-content-center'>
//                 <div className='col-lg-6 col-sm-12'>
//                         <div className='h1 text-center'>Go Service
//                         <p className='h6 text-end'>We are the change we seek for our society</p>
//                         </div>
//                 </div>
//                 <div className='col-md-6 align-items-center login'>
//                     <form method='' action=''>
//                         <div className="form-floating">
//                             <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email daddress" />
//                             <label htmlFor="floatingInput">Email address</label>
//                         </div>
//                         <div className="form-floating">
//                             <input type="current-password" className="form-control" id="floatingPassword" placeholder="Password" />
//                             <label htmlFor="floatingPassword">Password</label>
//                         </div>

//                         <div className="form-check text-start my-3">
//                             <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
//                             <label className="form-check-label" htmlFor="flexCheckDefault">
//                                 Remember me
//                             </label>
//                         </div>
//                         <Link to='/education'>
//                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
//                         </Link>
//                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }









import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

            // If authentication is successful, navigate the user to /education
            navigate('/education');
        } catch (error) {
            // Handle authentication errors
            console.error('Error authenticating:', error);
            // You can display an error message to the user or handle it in any way you want
        }
    };

    return (
        <div className='Container'>
            <div className='row gx-5 d-flex align-items-center justify-content-center'>
                <div className='col-lg-6 col-sm-12'>
                    <div className='title'>Go Service
                    </div>
                        <p className='slogan'>-We are the change we seek for our society</p>
                </div>
                <div className='col-md-6 align-items-center login'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating">
                            <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
    );
}



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault(); // Prevent the default form submission

//         try {
//             // Make a POST request to the backend server to authenticate the user
//             const response = await fetch('http://127.0.0.1:8000/account/submit', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email, password })
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to authenticate');
//             }

//             // If authentication is successful, navigate the user to /education
//             navigate('/education');
//         } catch (error) {
//             // Handle authentication errors
//             console.error('Error authenticating:', error);
//             // You can display an error message to the user or handle it in any way you want
//         }
//     };

//     return (
//         <div className='Container'>
//             <div className='row gx-5 d-flex align-items-center justify-content-center'>
//                 <div className='col-lg-6 col-sm-12'>
//                     <div className='h1 text-center'>Go Service
//                         <p className='h6 text-end'>We are the change we seek for our society</p>
//                     </div>
//                 </div>
//                 <div className='col-md-6 align-items-center login'>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-floating">
//                             <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
//                             <label htmlFor="floatingInput">Email address</label>
//                         </div>
//                         <div className="form-floating">
//                             <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                             <label htmlFor="floatingPassword">Password</label>
//                         </div>

//                         <div className="form-check text-start my-3">
//                             <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
//                             <label className="form-check-label" htmlFor="flexCheckDefault">
//                                 Remember me
//                             </label>
//                         </div>
//                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
//                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }




// // // import React, { useState } from 'react';



// // // export default function Login() {
// // //     const [email, setEmail] = useState('');
// // //     const [password, setPassword] = useState('');
// // //     const navigate = useNavigate();

// // //     const handleSubmit = async (event) => {
// // //         event.preventDefault(); // Prevent the default form submission
// // //         // formData.set('email', formData.get('email'));
// // //         // formData.set('password', formData.get('password'));
// // //         // formData.set('remember', formData.get('remember'));


// // //         try {
// // //             // Make a POST request to the backend server
// // //             const response = await fetch('http://127.0.0.1:8000/account/submit', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify({ email, password })
// // //             });

// // //             // Check if the request was successful
// // //             if (response.ok) {
// // //                 const data = await response.json();
// // //                 // Check if the email and password match
// // //                 if (data.success) {
// // //                     // Redirect the user to the /education link
// // //                     history.push('/education');
// // //                 } else {
// // //                     // Display an error message or handle invalid credentials
// // //                     console.error('Invalid credentials');
// // //                 }
// // //             } else {
// // //                 // If not successful, throw an error with the status text
// // //                 throw new Error(`Failed to submit form data: ${response.statusText}`);
// // //             }
// // //         } catch (error) {
// // //             // Catch any errors that occur during the fetch or processing of the response
// // //             console.error('Error:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className='Container'>
// // //             <div className='row gx-5 d-flex align-items-center justify-content-center'>
// // //                 <div className='col-lg-6 col-sm-12'>
// // //                     <div className='h1 text-center'>Go Service
// // //                         <p className='h6 text-end'>We are the change we seek for our society</p>
// // //                     </div>
// // //                 </div>
// // //                 <div className='col-md-6 align-items-center login'>
// // //                     <form onSubmit={handleSubmit}>
// // //                         <div className="form-floating">
// // //                             <input type="email" className="form-control mb-3" name="email" id="floatingInput" placeholder="Email daddress" value={email} onChange={(e) => setEmail(e.target.value)} />
// // //                             <label htmlFor="floatingInput">Email address</label>
// // //                         </div>
// // //                         <div className="form-floating">
// // //                             <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // //                             <label htmlFor="floatingPassword">Password</label>
// // //                         </div>

// // //                         <div className="form-check text-start my-3">
// // //                             <input className="form-check-input" type="checkbox" value="remember-me" name="remember" id="flexCheckDefault" />
// // //                             <label className="form-check-label" htmlFor="flexCheckDefault">
// // //                                 Remember me
// // //                             </label>
// // //                         </div>
// // //                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
// // //                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }
// // // // import React, { useState } from 'react';
// // // // import { Link, withRouter } from 'react-router-dom';

// // // // function Login(props) {
// // // //     const [email, setEmail] = useState('');
// // // //     const [password, setPassword] = useState('');

// // // //     const handleSubmit = async (event) => {
// // // //         event.preventDefault(); // Prevent the default form submission

// // // //         try {
// // // //             // Make a POST request to the backend server
// // // //             const response = await fetch('http://127.0.0.1:8000/account/submit', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify({ email, password })
// // // //             });

// // // //             // Check if the request was successful
// // // //             if (response.ok) {
// // // //                 const data = await response.json();
// // // //                 // Check if the email and password match
// // // //                 if (data.success) {
// // // //                     // Redirect the user to the /education link
// // // //                     props.history.push('/education');
// // // //                 } else {
// // // //                     // Display an error message or handle invalid credentials
// // // //                     console.error('Invalid credentials');
// // // //                 }
// // // //             } else {
// // // //                 // If not successful, throw an error with the status text
// // // //                 throw new Error(`Failed to submit form data: ${response.statusText}`);
// // // //             }
// // // //         } catch (error) {
// // // //             // Catch any errors that occur during the fetch or processing of the response
// // // //             console.error('Error:', error);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className='Container'>
// // // //             <div className='row gx-5 d-flex align-items-center justify-content-center'>
// // // //                 <div className='col-lg-6 col-sm-12'>
// // // //                     <div className='h1 text-center'>Go Service
// // // //                         <p className='h6 text-end'>We are the change we seek for our society</p>
// // // //                     </div>
// // // //                 </div>
// // // //                 <div className='col-md-6 align-items-center login'>
// // // //                     <form onSubmit={handleSubmit}>
// // // //                         <div className="form-floating">
// // // //                             <input type="email" className="form-control mb-3" name="email" id="floatingInput" placeholder="Email daddress" value={email} onChange={(e) => setEmail(e.target.value)} />
// // // //                             <label htmlFor="floatingInput">Email address</label>
// // // //                         </div>
// // // //                         <div className="form-floating">
// // // //                             <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// // // //                             <label htmlFor="floatingPassword">Password</label>
// // // //                         </div>

// // // //                         <div className="form-check text-start my-3">
// // // //                             <input className="form-check-input" type="checkbox" value="remember-me" name="remember" id="flexCheckDefault" />
// // // //                             <label className="form-check-label" htmlFor="flexCheckDefault">
// // // //                                 Remember me
// // // //                             </label>
// // // //                         </div>
// // // //                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
// // // //                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
// // // //                     </form>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default withRouter(Login); // Wrap your component with withRouter
// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // function Login() {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const navigate = useNavigate();

// //     const handleSubmit = async (event) => {
// //         event.preventDefault(); // Prevent the default form submission

// //         try {
// //             // Make a POST request to the backend server
// //             const response = await fetch('http://127.0.0.1:8000/account/view-acclist', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ email, password })
// //             });

// //             // Check if the request was successful
// //             if (response.ok) {
// //                 const data = await response.json();
// //                 // Check if the email and password match
// //                 if (data.success) {
// //                     // Redirect the user to the /education link
// //                     navigate('/education');
// //                 } else {
// //                     // Display an error message or handle invalid credentials
// //                     console.error('Invalid credentials');
// //                 }
// //             } else {
// //                 // If not successful, throw an error with the status text
// //                 throw new Error(`Failed to submit form data: ${response.statusText}`);
// //             }
// //         } catch (error) {
// //             // Catch any errors that occur during the fetch or processing of the response
// //             console.error('Error:', error);
// //         }
// //     };

// //     return (
// //         <div className='Container'>
// //             <div className='row gx-5 d-flex align-items-center justify-content-center'>
// //                 <div className='col-lg-6 col-sm-12'>
// //                     <div className='h1 text-center'>Go Service
// //                         <p className='h6 text-end'>We are the change we seek for our society</p>
// //                     </div>
// //                 </div>
// //                 <div className='col-md-6 align-items-center login'>
// //                     <form onSubmit={handleSubmit}>
// //                         <div className="form-floating">
// //                             <input type="email" className="form-control mb-3" name="email" id="floatingInput" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
// //                             <label htmlFor="floatingInput">Email address</label>
// //                         </div>
// //                         <div className="form-floating">
// //                             <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
// //                             <label htmlFor="floatingPassword">Password</label>
// //                         </div>

// //                         <div className="form-check text-start my-3">
// //                             <input className="form-check-input" type="checkbox" value="remember-me" name="remember" id="flexCheckDefault" />
// //                             <label className="form-check-label" htmlFor="flexCheckDefault">
// //                                 Remember me
// //                             </label>
// //                         </div>
// //                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
// //                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
// //                     </form>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Login;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Login() {
//     const [formData, setFormData] = useState({ email: '', password: '' });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch('http://127.0.0.1:8000/account/submit', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 // Check if the login was successful based on the response from the backend
//                 if (data.success) {
//                     // Redirect to education page if login successful
//                     navigate('/education');
//                 } else {
//                     console.error('Invalid credentials');
//                 }
//             } else {
//                 console.error('Failed to submit form data');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <div className='Container'>
//             <div className='row gx-5 d-flex align-items-center justify-content-center'>
//                 <div className='col-lg-6 col-sm-12'>
//                     <div className='h1 text-center'>Go Service
//                         <p className='h6 text-end'>We are the change we seek for our society</p>
//                     </div>
//                 </div>
//                 <div className='col-md-6 align-items-center login'>
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-floating">
//                             <input type="email" className="form-control mb-3" name="email" id="floatingInput" placeholder="Email address" value={formData.email} onChange={handleChange} />
//                             <label htmlFor="floatingInput">Email address</label>
//                         </div>
//                         <div className="form-floating">
//                             <input type="password" className="form-control" name="password" id="floatingPassword" placeholder="Password" value={formData.password} onChange={handleChange} />
//                             <label htmlFor="floatingPassword">Password</label>
//                         </div>

//                         <div className="form-check text-start my-3">
//                             <input className="form-check-input" type="checkbox" value="remember-me" name="remember" id="flexCheckDefault" />
//                             <label className="form-check-label" htmlFor="flexCheckDefault">
//                                 Remember me
//                             </label>
//                         </div>
//                         <button className="btn btn-primary w-25 py-2" type="submit">Log in</button>
//                         <p className="mt-5 mb-3 text-body-secondary">Go Service © 2023-2024</p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }
