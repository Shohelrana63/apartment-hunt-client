import React, { useEffect, useState } from 'react';
import HouseRentDetails from '../HouseRentDetails/HouseRentDetails';

const HouseRent = () => {
    const [rentsData, setRentsData] = useState([])

    useEffect(() => {
        fetch("https://afternoon-peak-72930.herokuapp.com/rentData")
            .then((res) => res.json())
            .then((data) => setRentsData(data));
    }, [])
    return (
        <section>

            <div className='container'>
                <div className="text-center my-5" style={{ color: '#16322E' }}>
                    <h5>House Rent</h5>
                    <h1 style={{ fontWeight: 'bold' }}>Discover the latest
                    rent
                    <br />
                    available today</h1>
                </div>
                <div>
                    <div className="row">
                        {
                            rentsData.map(houseRentData =>
                                <HouseRentDetails houseRentData={houseRentData}></HouseRentDetails>)
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HouseRent;