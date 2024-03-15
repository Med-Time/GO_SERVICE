import React, { useState, useEffect } from 'react';
import Alert from './Alert';


export default function Form() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
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
  // const renderdata = () => {
  //   return data && data.map((item, index) => (
  //     <tr key={item.id}>
  //       <td>{index + 1}</td>
  //       <td>{item.name}</td>
  //       <td>{item.sector}</td>
  //       <td>{item.date}</td>
  //       <td>{item.status}</td>
  //     </tr>
  //   ));
  // };
  const handleSubmit = (event) => {
   // event.preventDefault(); // Prevent the form from being submitted in the traditional way
    //alert('Form submitted'); // Display an alert
    setIsSubmitted(true); // Set the isSubmitted state to true
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p className="h1 text-dark">Your Concerns</p>
            {isSubmitted && <Alert />} {/* If isSubmitted is true, display the Alert component */}
            <form method='' action='#'onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="InputName" className="form-label text-dark">Name</label>
                <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3">
                <label htmlFor="Inputphone" className="form-label text-dark">Phone</label>
                <input type="tel" className="form-control" id="Inputphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                <div id="emailHelp" className="form-text text-dark">We'll never share your details with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="releted" className="form-label text-dark">Sector</label>
                <select className="form-select" aria-label="Select">
                  <option value="transportation" defaultValue={'Transportation'}>Transportation</option>
                  <option value="education">Education</option>
                  <option value="health">Health</option>
                  <option value="environment">Environment</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="details" className="form-label text-dark">Details</label>
                <textarea className="form-control" id="details" rows="4"></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="formFileMultiple" className="form-label text-dark">Upload file</label>
                <input className="form-control" type="file" id="formFileMultiple" multiple />
              </div>
              <div className="mb-3">
                <label htmlFor="InputName" className="form-label text-dark">Location</label>
                <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {/* <tbody>{renderdata()}</tbody> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}