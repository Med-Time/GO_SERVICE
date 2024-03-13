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
        </div>
    )
}