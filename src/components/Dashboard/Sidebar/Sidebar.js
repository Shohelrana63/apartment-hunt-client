import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../../image/logos/Logo.png";
import bookIcon from "../../../image/logos/Group 1343.png";
import addIcon from "../../../image/logos/plus 1.png";
import rentIcon from "../../../image/logos/Group 33351.png";
import "./Sidebar.css";
const Sidebar = () => {
    return (
      <div className="sidebar mt-5 ml-5">
        <Link to="/" className="sidebar-header">
          <img
            style={{ width: "100px", height: "54.8px" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <ul className="list-unstyled mt-5 mr-3">
          <li>
            <Link to="/dashboard/bookingList">
              <img src={bookIcon} alt="" />
              <span>Booking List</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/addHouse">
              <img src={addIcon} alt="" />
              <span>Add House</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myRent">
              <img src={rentIcon} alt="" /> <span>My Rents</span>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;