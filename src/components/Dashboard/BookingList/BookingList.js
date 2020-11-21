import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import "./BookingList.css";
const BookingList = () => {
  const [user] = useContext(UserContext);
  const [allOrders, setAllOrders] = useState([]);
  const statuses = ["Pending", "Processing", "Done"];

  // loading all orders
  useEffect(() => {
    fetch("https://afternoon-peak-72930.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [user.email]);

  // handling status change
  function statusChange(id, e) {
    const modifiedOrder = { status: e.target.value };

    // updating status
    fetch(`https://afternoon-peak-72930.herokuapp.com/edit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedOrder),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert('Updated Successful')
        }
      });
  }
  return (
    <div className="booking-area  row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mt-3">
        <div className="d-flex justify-content-between mt-5 mb-5">
          <h4>Booking List</h4>
          <h6>{user.name}</h6>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
                <th className="text-secondary" scope="col">
                  Phone No
                </th>
                <th className="text-secondary" scope="col">
                  Message
                </th>
                <th className="text-secondary" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.number}</td>
                  <td>{order.message}</td>
                  <td>
                    <select
                      className="form-control"
                      onChange={(e) => statusChange(order._id, e)}
                      name="status"
                    >
                      {statuses.map((option) => (
                        <option
                          key={option}
                          value={option}
                          selected={option === order.status}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList;