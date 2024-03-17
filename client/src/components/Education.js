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
    var link = 'Image';
    return (
        <>
            {data.map((item) => (
                <div className='post' key={item.id}>

                    <div className="post-head">
                        <p className='h4 m-0'>Complaint by: {item.name}</p>
                    </div>
                    <div className="details">
                        <p>{item.details}</p>
                    </div>
                    <div className="file">
                        {item.file ? (
                            console.log(link + item.file.slice(12)),
                            /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(item.file) ? (
                                <img src={link + item.file.slice(12)} alt="User Media" onError={(e) => { e.target.onerror = null; e.target.src = "Image/error.png" }} />
                            ) : /\.(mp4|webm|ogg)$/i.test(item.file) ? (
                                <video controls>
                                    <source src={link + item.file} type="video/mp4" />
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
