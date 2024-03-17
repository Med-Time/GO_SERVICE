import React, { useState, useEffect } from 'react';
import Alert from './Alert';


export default function Form() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/form/view-list')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  
  const renderData1 = data.filter((innumerate,ind)=>ind>data.length-6).reverse().map((item, index) => {
    return(
    <tr key={item.id}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.sector}</td>
      <td>{item.location}</td>
      <td>{item.date}</td>
      <td>{item.status}</td>
    </tr>
  )
    }
  )

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setIsSubmitted(true); // Set isSubmitted to true
    // Access form data using event.target
    const formData = new FormData(event.target);
    
    formData.set('name', formData.get('name'));
    formData.set('phone', formData.get('phone'));
    formData.set('sector', formData.get('sector'));
    formData.set('details', formData.get('details'));
    formData.set('file', formData.get('file'));
    formData.set('location', formData.get('location'));
    formData.set('check', formData.get('check'));
    console.log(formData);
   

    try {
      // Make a POST request using fetch
      const response = await fetch('http://127.0.0.1:8000/form/submit', {
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

      // Refresh the page
      window.location.reload();


      // document.getElementById('myform').reset();
    } catch (error) {
      // Catch any errors that occur during the fetch or processing of the response
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="h1 text-dark mt-4">Your Concerns</p>
                  <form method='POST' action='/' onSubmit={handleSubmit} id='myform'>
                    <div className="mb-3">
                    <label htmlFor="InputName" className="form-label text-dark">Name</label>
                    <input type="text" className="form-control" name="name" id="InputName" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="Inputphone" className="form-label text-dark">Phone</label>
                    <input type="tel" className="form-control" id="Inputphone" name="phone" pattern="[0-9]{10,12}" required />
                    <div id="emailHelp" className="form-text text-dark">We'll never share your details with anyone else.</div>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="releted" className="form-label text-dark">Sector</label>
                    <select className="form-select" name="sector" aria-label="Select">
                      <option value="transportation"  defaultValue={'Transportation'}>Transportation</option>
                      <option value="education" >Education</option>
                      <option value="health" >Health</option>
                      <option value="environment" name="environment">Environment</option>
                    </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="details" className="form-label text-dark">Details</label>
                    <textarea className="form-control" id="details" name='details' rows="4" required></textarea>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="formFileMultiple" className="form-label text-dark">Upload file</label>
                    <input className="form-control" type="file" name="file" id="formFileMultiple" accept="image/*, video/*" multiple required/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="InputName" className="form-label text-dark">Location</label>
                    <input type="text" className="form-control" id="InputName" name="location" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" name="check" id="exampleCheck1" />
                    <label className="form-check-label text-dark" htmlFor="exampleCheck1">Want to hear from us</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>

                  <div className="container my-4">
                    <p className="fs-2 text-success">Our Ongoing Tasks</p>
                    <table className="table table-hover">
                    <thead>
                      <tr>
                      <th scope="col">#</th>
                      <th scope="col">Applicant</th>
                      <th scope="col">About</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>{renderData1}</tbody>
                    </table>
                  </div>
                  </div>
                </div>
                </div>
              </div>
              )
}