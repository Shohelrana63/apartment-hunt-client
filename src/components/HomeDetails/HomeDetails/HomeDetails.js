import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Home/Home/Navbar/Navbar";
import Apartment from "../Apartment/Apartment";
import BookingDetails from "../BookingDetails/BookingDetails";

const HomeDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [selectedRent, setSelectedRent] = useState({});

    useEffect(() => {
        fetch("https://afternoon-peak-72930.herokuapp.com/home/" + id)
            .then((res) => res.json())
            .then((data) => {
                setSelectedRent(data);
            });
    }, [id]);
    return (
        <div>
            <Navbar></Navbar>
            <Apartment selectedRent={selectedRent}></Apartment>
            <BookingDetails selectedRent={selectedRent}></BookingDetails>
        </div>
    );
};

export default HomeDetails;
