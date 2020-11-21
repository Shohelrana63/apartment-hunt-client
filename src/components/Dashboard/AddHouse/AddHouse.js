import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import icon from "../../../image/logos/cloud-upload-outline 1.png";
import "./AddHouse.css";
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const AddHouse = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const [user] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://afternoon-peak-72930.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);
  //
  // handling blur
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  // handle file
  const handleFile = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  // adding new service
  const addService = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", info.title);
    formData.append("location", info.location);
    formData.append("price", info.price);

    fetch("https://afternoon-peak-72930.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((success) => {
        if (success) {
          alert("Apartment Added Successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };
  return (
    <div className="house-area row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mt-3">
        <div className="d-flex justify-content-between mt-5 mb-5">
          <h4>Add House</h4>
          <h6>{user.name}</h6>
        </div>
        <div className="booking-form ml-md-5 ml-0">
          {
            isAdmin && <form id="serviceForm" onSubmit={addService}>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="title">House Title</label>
                  <input
                    name="title"
                    onBlur={handleBlur}
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="price">Price</label>
                  <input
                    onBlur={handleBlur}
                    name="price"
                    type="text"
                    id="price"
                    className="form-control"
                    placeholder="Enter Price"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="location">Location</label>
                  <input
                    onBlur={handleBlur}
                    name="location"
                    type="text"
                    id="location"
                    className="form-control"
                    placeholder="Enter Location"
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="bedroom">No of Bedroom</label>
                  <input
                    name="bedroom"
                    type="text"
                    id="bedroom"
                    className="form-control"
                    placeholder="Enter No of Bedroom"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-6">
                  <label htmlFor="bathroom">No of Bathroom</label>
                  <input
                    name="bathroom"
                    type="text"
                    id="bathroom"
                    className="form-control"
                    placeholder="Enter No of Bathroom"
                  />
                </div>
                <div className="col-md-3 col-6">
                  <div className="file-upload">
                    <p className="mb-2">Thumbnail</p>
                    <label htmlFor="file">
                      <img style={{ width: "20px" }} src={icon} alt="" />
                      <span>Upload Image</span>
                    </label>
                    <input
                      name="file"
                      onChange={handleFile}
                      type="file"
                      id="file"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right">
                <button type="submit" className="btn">
                  Submit
              </button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};;

export default AddHouse;