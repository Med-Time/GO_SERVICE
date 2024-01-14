import React from 'react'

export default function Form() {
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <p className="fs-1">Complaint Heading</p>
        <form>
          <div className="mb-3">
            <label for="InputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3">
            <label for="Inputphone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="Inputphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="details" className="form-label">Details</label>
            <textarea className="form-control" id="details" rows="4"></textarea>
          </div>
          <div className="mb-3">
            <label for="formFileMultiple" className="form-label">Upload file</label>
            <input className="form-control" type="file" id="formFileMultiple" multiple/>
          </div>
          <div className="mb-3">
            <label for="InputName" className="form-label">Location</label>
            <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Want to hear from us</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="container my-4">
          <p className="fs-2 text-success">Our Ongoing Tasks</p>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    
    </div>
  </div>
  )
}