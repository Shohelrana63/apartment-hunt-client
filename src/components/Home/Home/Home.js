import React from 'react';
import Footer from './Footer/Footer';
import HeaderMain from './HeaderMain/HeaderMain';
import HouseRent from './HouseRent/HouseRent';
import Navbar from './Navbar/Navbar';
import Service from './Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div className="homepage">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <HouseRent></HouseRent>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;