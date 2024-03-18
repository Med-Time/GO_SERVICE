/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

export default function Education() {
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
            // console.log('Response data:', responseData); 
            // for (const item of responseData) {
            //     const filename = item.file.replace('/media/', ''); 
            //     console.log('Filename:', filename); 
            //     await fetchImage(filename);
            // }
            const newData = responseData.filter(item => item.status === "Pending");
            console.log('New data:', newData);
            setData(newData);
            // setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    

    // const fetchImage = async (filename) => {
    //     try {
    //         if (!filename) {
    //             console.error('Error fetching image: Filename is undefined');
    //             return;
    //         }
    
    //         const response = await axios.get(`http://127.0.0.1:8000/view/${encodeURIComponent(filename)}/`, {
    //             responseType: 'arraybuffer'
    //         });
    //         const base64 = btoa(
    //             new Uint8Array(response.data).reduce(
    //                 (data, byte) => data + String.fromCharCode(byte),
    //                 '',
    //             ),
    //         );
    //         setData(prevData => {
    //             return prevData.map(item => {
    //                 if (item.file === filename) { // Updated to use item.file
    //                     item.imageSrc = `data:image/jpeg;base64,${base64}`;
    //                 }
    //                 return item;
    //             });
    //         });
    //     } catch (error) {
    //         console.error('Error fetching image:', error);
    //     }
    // };
    
    
    
    

    // const handleAccept = async (id) => {
    //     try {
    //         setData(prevData => {
    //             return prevData.map(item => {
    //                 if (item.id === id) {
    //                     item.status = 'accepted';
    //                 }
    //                 return item;
    //             });
    //         });

    //         // Implement accept logic here






    //         //Send a request to update the status in the backend if required
    //         const response = await fetch(`http://127.0.0.1:8000/form/submit`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ status: 'accepted' })
    //         });
    //         if (!response.ok) {
    //             throw new Error('Failed to update status');
    //         }

    //         console.log('Response:', response);

    //     } catch (error) {
    //         console.error('Error accepting item:', error);
    //     }
    // };
    const handleAccept = async (id) => {
        alert("Complaint Accepted");
        try {
            // Send a request to the backend to update the status
            const response = await fetch(`http://127.0.0.1:8000/form/update/${id}`, {
                method: 'PATCH', // Use PATCH method to update the status
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: 'accepted' }) // Send the new status in the request body
            });


            if (!response.ok) {
                throw new Error('Failed to update status');
            }

            // Filter out the item from the data array
            const newData = data.filter(item => item.id !== id);
            setData(newData);


            // Implement accept logic here if needed


            // You can also send a request to update the status in the backend if required

        } catch (error) {
            console.error('Error accepting item:', error);
        }
    };

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
                        <p>{item.details}</p>
                        <p>Location: {item.location}</p>
                    </div>
                    <div className="file">
                        {item.file ? (
                            console.log(item.file),
                            <img src={`Image/${item.file.slice(13)}`} alt="User Media" onError={(e) => { e.target.onerror = null; e.target.src = "Image/error.png" }} />
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
