import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {auth} from '../Firebase/config';  
import '../CSS/Admin.css';

const Admin = () => {
    const [cropPrices, setCropPrices] = useState([]);

    const fetchCropPrices = async () => {
        try {
            const response = await axios.get('http://localhost:3737/v1/proposeCropPrice');
            setCropPrices(response.data.data);
        } catch (error) {
            console.error('Error fetching crop prices:', error);
        }
    };

    useEffect(() => {
        fetchCropPrices();
    }, []);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (!user) {
                fetchCropPrices();
            }
        });
        return unsubscribe;
    }, []);

    return (
        <div>
            {auth.currentUser?<> <h2 className='headAdmin'>Welcome to the Admin page</h2>
            <div className="cropLists">
                {cropPrices.map((crop, index) => (
                    <div className='cropItem' key={index}>
                        <h1>{index + 1}. Crop name: {crop.cropName}</h1>
                        <h2>User : {crop.userName}</h2>
                        <h2>Proposed Price: Rs. {crop.proposedPrice}</h2>
                        <h2>Address : {crop.userAddress}</h2>
                        <h2>Phone : {crop.userPhoneNum}</h2>
                        {/* <h3>Proposed by User ID: {crop.userId}</h3> */}
                    </div>
                ))}
            </div></> :<><h2 style={{color:"red",textalign:"center"}}>Kindly Login to view this page</h2></>}
           
        </div>
    );
}

export default Admin;
