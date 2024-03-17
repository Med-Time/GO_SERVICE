// // import React, { useState, useEffect } from 'react';


//   // const [data, setData] = useState(null);
//   // const [error, setError] = useState(null);
//   // const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         throw new Error('Network response was not ok');
//   //       }
//   //       return response.json();
//   //     })
//   //     .then((jsonData) => {
//   //       setData(jsonData);
//   //     })
//   //     .catch((error) => {
//   //       setError(error);
//   //     })
//   //     .finally(() => {
//   //       setLoading(false);
//   //     });
//   // }, []);

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>Error: {error.message}</p>;
//   // }









//   function Education() {
//   const data = [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "date": "12/12/2021",
//       "description": "There is a pothole on the road near my house. It is causing a lot of problems for the people in the area.",
//       "file": "Image/image1.jpeg"
//     },
//     {
//       "id": 2,
//       "name": "Jane Doe",
//       "date": "12/12/2021",
//       "description": "The street light near my house is not working. It is causing a lot of problems for the people in the area.",
//       "file": "https://source.unsplash.com/776x776/?street,light"
//     },
//     {
//       "id": 3,
//       "name": "John Doe",
//       "date": "12/12/2021",
//       "description": "There is a pothole on the road near my house. It is causing a lot of problems for the people in the area.",
//       "file": "https://source.unsplash.com/776x776/?road,pothole"
//     },
//     {
//       "id": 4,
//       "name": "Jane Doe",
//       "date": "12/12/2021",
//       "description": "The street light near my house is not working. It is causing a lot of problems for the people in the area.",
//       "file": "Image/image2.jpeg"
//     }
//   ];

//   return (
//     <>
//       {data && data.map((item) => (
//         <div className='post' key={item.id}>
//           <div className="post-head">
//             <p className='h4 m-0'>Complaint by: {item.name}</p>
//           </div>
//           <div className="details">
//             <p>{item.description}</p>
//           </div>
//           <div className="file">
//             {1 ? (
//               /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(item.file) ? (
//                 <img src="https://source.unsplash.com/776x776/?street,light" alt="User Media" />
//               ) : /\.(mp4|webm|ogg)$/i.test(item.file) ? (
//                 <video controls>
//                   <source src={item.file} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               ) : (
//                 <p>Unsupported media format</p>
//               )
//             ) : (
//               <p>No media available</p>
//             )}
//           </div>
//           <div className='post-date'>-{item.date}</div>
//           <div className="button-group">
//             <div className="btn btn-primary w-25 mx-3">Accept</div>
//             <div className="btn btn-danger w-25 mx-3">Reject</div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Education;









// import React, { useState, useEffect } from 'react';

// function Education() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://127.0.0.1:8000/form/view-list');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const responseData = await response.json();
//             setData(responseData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <>
//             {data.map((item) => (
//                 <div className='post' key={item.id}>
//                     <div className="post-head">
//                         <p className='h4 m-0'>Complaint by: {item.name}</p>
//                     </div>
//                     <div className="details">
//                         <p>{item.description}</p>
//                     </div>
//                     <div className="file">
//                         {item.file ? (
//                             /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(item.file) ? (
//                                 <img src={item.file} alt="User Media" />
//                             ) : /\.(mp4|webm|ogg)$/i.test(item.file) ? (
//                                 <video controls>
//                                     <source src={item.file} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             ) : (
//                                 <p>Unsupported media format</p>
//                             )
//                         ) : (
//                             <p>No media available</p>
//                         )}
//                     </div>
//                     <div className='post-date'>-{item.date}</div>
//                     <div className="button-group">
//                         <div className="btn btn-primary w-25 mx-3">Accept</div>
//                         <div className="btn btn-danger w-25 mx-3">Reject</div>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default Education;



// import React, { useState, useEffect } from 'react';

// function Education() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('http://127.0.0.1:8000/form/view-list');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch data');
//             }
//             const responseData = await response.json();
//             setData(responseData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleAccept = async (id) => {
//         // Implement accept logic here if needed
//     };

//     const handleReject = async (id) => {
//         try {
//             const response = await fetch(`http://127.0.0.1:8000/form/delete/${id}`, {
//                 method: 'DELETE',
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to delete item');
//             }
//             const newData = data.filter(item => item.id !== id);
//             setData(newData);
//         } catch (error) {
//             console.error('Error deleting item:', error);
//         }
//     };

//     return (
//         <>
//             {data.map((item) => (
//                 <div className='post' key={item.id}>
//                     <div className="post-head">
//                         <p className='h4 m-0'>Complaint by: {item.name}</p>
//                     </div>
//                     <div className="details">
//                         <p>{item.description}</p>
//                     </div>
//                     <div className="file">
//                         {item.file ? (
//                             /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(item.file) ? (
//                                 <img src={item.file} alt="User Media" />
//                             ) : /\.(mp4|webm|ogg)$/i.test(item.file) ? (
//                                 <video controls>
//                                     <source src={item.file} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             ) : (
//                                 <p>Unsupported media format</p>
//                             )
//                         ) : (
//                             <p>No media available</p>
//                         )}
//                     </div>
//                     <div className='post-date'>-{item.date}</div>
//                     <div className="button-group">
//                         <button className="btn btn-primary w-25 mx-3" onClick={() => handleAccept(item.id)}>Accept</button>
//                         <button className="btn btn-danger w-25 mx-3" onClick={() => handleReject(item.id)}>Reject</button>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default Education;






import React, { useEffect, useState } from 'react';

function Education() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/form/view-list');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAccept = async (id) => {
        try {
            setData(prevData => {
                return prevData.map(item => {
                    if (item.id === id) {
                        item.status = 'accepted';
                    }
                    return item;
                });
            });
    
            // Implement accept logic here if needed
    
            // You can also send a request to update the status in the backend if required
        } catch (error) {
            console.error('Error accepting item:', error);
        }
    };
    //const handleAccept = async (id) => {
    //     const newData = data.filter(item => item.id !== id);
    //     setData(newData);
    //     // Implement accept logic here if needed
    // };

    const handleReject = async (id) => {
        const newData = data.filter(item => item.id !== id);
        setData(newData);
        try {
            const response = await fetch(`http://127.0.0.1:8000/form/delete/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <>
            {data.map((item) => (
                <div className='post' key={item.id}>
                    
                    <div className="post-head">
                        <p className='h4 m-0'>Complaint by: {item.name}</p>
                    </div>
                    <div className="details">
                        <p>{item.description}</p>
                    </div>
                    <div className="file">
                        {item.file ? (
                            /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(item.file) ? (
                                <img src={item.file} alt="User Media" />
                            ) : /\.(mp4|webm|ogg)$/i.test(item.file) ? (
                                <video controls>
                                    <source src={item.file} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <p>Unsupported media format</p>
                            )
                        ) : (
                            <p>No media available</p>
                        )}
                    </div>
                    <div className='post-date'>-{item.date}</div>
                    <div className="button-group">
                        <button className="btn btn-primary w-25 mx-3" onClick={() => handleAccept(item.id)}>Accept</button>
                        <button className="btn btn-danger w-25 mx-3" onClick={() => handleReject(item.id)}>Reject</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Education;
