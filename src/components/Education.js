import React, { useState, useEffect } from 'react';

function Education() {
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    data && data.map((item) => (
      <div className='container'>
        <div className="d-flex flex-column user">
          <p className='h4 m-0'>Complaint by: {item.name}</p>
          <span className='text-end'>{item.date}</span>
        </div>
        <div className="details">
          <p>{item.description}</p>
        </div>
        <div className="file">
          {item.file && item.file.includes('image') ? (
            <img src={item.file} alt="User Media" />
          ) : item.file && item.file.includes('video') ? (
            <video controls>
              <source src={item.file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>No media available</p>
          )}
        </div>
      </div>
    ))
  );
}

export default Education;
