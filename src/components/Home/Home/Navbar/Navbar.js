import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserContext } from '../../../../App';
import logo from '../../../../image/logos/Logo.png';
import "firebase/auth";
import firebase from "firebase/app";


const Navbar = () => {
    const [user, setUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);


    // check for admin
    useEffect(() => {
        if (user.signed) {
            fetch(`https://radiant-hamlet-66107.herokuapp.com/checkAdmin/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setAdmin(data);
                })
        }
    }, [user.signed, user.email])

    // signing out
    function signOutAll() {
        firebase.auth().signOut()
            .then(() => setUser({
                signed: false,
                name: '',
                email: '',
                password: '',
                message: ''
            }))
            .catch(error => console.log(error))
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/home">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/about">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/service">Service</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/dashboard/myRent">Dashboard</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/event">Event</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link mr-5 font-weight-bold" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {
                        user.signed ?
                            <Button onClick={signOutAll} style={{ padding: '4px 20px', color: "white", backgroundColor: " #275A53" }}
                                className='btn-sm font-weight-bold'>Logout {user.name}</Button> :
                            <Link to="/login">
                                <Button style={{ padding: '4px 20px', color: "white", backgroundColor: " #275A53" }}
                                    className='btn-sm font-weight-bold'>Login</Button>
                            </Link>
                    }

                    {
                        user.signed && !admin &&
                        <h5 className="nav-link"><b>{user.name}</b></h5>
                    }

                </div>
            </div>
        </nav>
    );
};

export default Navbar;