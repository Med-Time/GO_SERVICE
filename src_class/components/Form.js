import React from 'react'

export default function Form() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* <p className={`fs-1 text-${props.mode === 'light' ? 'success' : 'white'}`}>Complaint Heading</p> */}
          <p className="fs-1 text-dark">Fill Details</p>
          <form>
            <div className="mb-3">
              {/* <label htmlFor="InputName" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Name</label> */}
              <label htmlFor="InputName" className="form-label text-dark">Name</label>
              <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="Inputphone" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Phone</label> */}
              <label htmlFor="Inputphone" className="form-label text-dark">Phone</label>
              <input type="tel" className="form-control" id="Inputphone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              {/* <div id="emailHelp" className={`form-text text-${props.mode === 'light' ? 'black' : 'white'}`}>We'll never share your details with anyone else.</div> */}
              <div id="emailHelp" className="form-text text-dark">We'll never share your details with anyone else.</div>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="releted" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Property</label> */}
              <label htmlFor="releted" className="form-label text-dark">Property</label>
              <select className="form-select" aria-label="Select">
                <option value="public" defaultValue={'Public'}>Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="details" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Details</label> */}
              <label htmlFor="details" className="form-label text-dark">Details</label>
              <textarea className="form-control" id="details" rows="4"></textarea>
            </div>
            <div className="mb-3">
              {/* <label htmlFor="formFileMultiple" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Upload file</label> */}
              <label htmlFor="formFileMultiple" className="form-label text-dark">Upload file</label>
              <input className="form-control" type="file" id="formFileMultiple" multiple />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="InputName" className={`form-label text-${props.mode === 'light' ? 'black' : 'white'}`}>Location</label> */}
              <label htmlFor="InputName" className="form-label text-dark">Location</label>
              <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              {/* <label className={`form-check-label text-${props.mode === 'light' ? 'black' : 'white'}`} htmlFor="exampleCheck1">Want to hear from us</label> */}
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
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Finished</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                  <td>Validated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}