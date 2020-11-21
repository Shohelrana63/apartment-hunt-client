import React from "react";
import "./BookingInfo.css";
const BookingInfo = ({ selectedRent }) => {
    return (
        <div>
            <div className="info mb-5">
                <h3 class="d-flex heading ">
                    <span>Family Apartment Three</span>
                    <span className="ml-auto">${selectedRent.price}</span>
                </h3>
                <p className="text">
                    3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
                    Apartment for Rent in Rangs Malancha, Melbourne.
        </p>
                <h2 className="heading">Price Details-</h2>
                <p className="text">
                    Rent/Month: $550 (negotiable) Service Charge : 8,000/= Tk per month,
                    subject to change Security Deposit : 3 month’s rent Flat Release
                    Policy : 3 months earlier notice required
        </p>
                <h3 className="heading font-weight-bold">Property Details-</h3>
                <p className="text">
                    Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road),
                    Dhanmondi Residential Area. Flat Size : 3000 Sq Feet. Floor : A5 (5th
                    Floor) (6 storied Building ) (South Facing Unit) Room Category : 3
                    Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family
                    Living Room, Highly Decorated Kitchen with Store Room and Servant room
                    with attached Toilet. Facilities : 1 Modern Lift, All Modern Amenities
                    & Semi Furnished. Additional Facilities : a. Electricity with full
                    generator load, b. Central Gas Geyser, c. 2 Car Parking with 1
                    Driver’s Accommodation, d. Community Conference Hall, e. Roof Top
                    Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC
                    camera
        </p>
            </div>
        </div>
    );
};

export default BookingInfo;