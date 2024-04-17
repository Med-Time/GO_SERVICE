/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import NavbarLogout from './NavbarLogout';

import {
    ref,
    getDownloadURL,
    listAll,
    deleteObject,
  } from "firebase/storage";
  import { storage } from "./firebase";

export default function Environment() {
    const [data, setData] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);
    
    const imagesListRef = ref(storage, "images/");
    
      useEffect(() => {
        listAll(imagesListRef).then((response) => {
          response.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              setImageUrls((prev) => [...prev, url]);
            });
          });
        });
      }, []);

    // for now it is showing all the complaints to the department user
    // Select the related department and then show the complaints to the department user according to the department
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
            // }
            const newData = responseData.filter(item => item.status === "Pending" && item.sector === "environment");
            console.log('New data:', newData);
            setData(newData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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


        } catch (error) {
            console.error('Error accepting item:', error);
        }
    };

    const handleReject = async (id) => {
        try {
            // Fetch the item details including the imageUrl based on the id
            const response = await fetch(`http://127.0.0.1:8000/form/view/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch item details');
            }
            const itemData = await response.json();
            const imageUrl = itemData.file; // Assuming 'file' contains the imageUrl
            
            // Delete the image from Firebase Storage
            const deleteImage = async () => {
                try {
                    // Extract the image path from the URL (assuming the URL format is consistent)
                    const imagePath = imageUrl.split(".com/o/")[1].split("?")[0].replace("%2F", "/");
    
                    // Create a reference to the image object
                    const imageRef = ref(storage, imagePath);
    
                    // Delete the image object from Firebase Storage
                    await deleteObject(imageRef);
    
                    console.log("Image deleted successfully");
                } catch (error) {
                    console.error("Error deleting image:", error);
                }
            };
    
            // Delete the item from the backend
            const deleteResponse = await fetch(`http://127.0.0.1:8000/form/delete/${id}`, {
                method: 'DELETE',
            });
            if (!deleteResponse.ok) {
                throw new Error('Failed to delete item');
            }
            
            // If the backend deletion is successful, delete the image from Firebase Storage
            await deleteImage();
        } catch (error) {
            console.error('Error handling rejection:', error);
        }
    };
// Upload the image to the firebase storage and then get the url of the image and then save the url in the database
// Also show the image in the post
    return (
        <>
        <NavbarLogout/>
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
                            <img src={item.file} alt="User Media" onError={(e) => { e.target.onerror = null; e.target.src = "Image/error.png" }} key={item.id}/>
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
