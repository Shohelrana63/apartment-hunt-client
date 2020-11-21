import React from 'react';
import { Link } from "react-router-dom";
import map from "../../../../image/logos/map-marker-alt-solid 1.png";
import facebook from "../../../../image/logos/Vector.png";
import instagram from "../../../../image/logos/Vector-1.png";
import linkedin from "../../../../image/logos/Vector-2.png";
import youtube from "../../../../image/logos/Vector-3.png";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-3 my-5">
                        <div className="d-flex">
                            <img className="mr-2" src={map} alt="" />
                            <p>H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-3 my-4">
                        <ul className="list-unstyled">
                            <li><a className="bold-text" href="#">Company</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Submit Listing</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 my-4">
                        <ul className="list-unstyled">
                            <li><a className="bold-text" href="#">Quick Links</a></li>
                            <li><a href="#">Quick Links</a></li>
                            <li><a href="#">Rentals</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Terms Conditions</a></li>
                            <li><a href="#">Our blog</a></li>
                        </ul>

                    </div>
                    <div class="col-md-3 my-4">
                        <p className="bold-text"> <b>about us</b></p>
                        <p>We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>

                        <div className="d-flex pt-4">
                            <Link>
                                <img className="mr-4" src={facebook} alt="" />
                            </Link>
                            <Link>
                                <img className="mr-4" src={instagram} alt="" />
                            </Link>
                            <Link>
                                <img className="mr-4" src={linkedin} alt="" />
                            </Link>
                            <Link>
                                <img className="mr-4" src={youtube} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;