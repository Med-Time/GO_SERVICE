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
// const data = {
//     name: "Anmol Bhusal",
//     date: "2021-09-21",
//     description: "This is a project I did for my college. I used React.js for the frontend and Node.js for the backend. It was a great learning experience.",
//     file: "Image/image3.jpeg"
// }
  return (
    <div className='container'>
    <div className="d-flex flex-column user">
        <p className='h4 m-0'>Complaint by: {data.name}</p>
        <span className='text-end'>{data.date}</span>
    </div>
    <div className="details">
        <p>{data.description}</p>
    </div>
    <div className="file">
        {data.file && data.file.includes('image') ? (
            <img src={data.file} alt="User Media" />
        ) : data.file && data.file.includes('video') ? (
            <video controls>
                <source src={data.file} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        ) : (
            <p>No media available</p>
        )}
    </div>
</div>

  );
}

export default Education;
