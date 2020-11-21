import React, { useContext } from "react";
import "./BookingForm.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../App";

const BookingForm = ({ selectedRent }) => {
    const { register, handleSubmit, errors } = useForm();
    const [user, setUser] = useContext(UserContext);
    const onSubmit = (data) => {
        console.log(data);
        const orderDetails = { orderedRent: selectedRent, ...data, status: "Pending" }
        console.log(data);
        fetch("https://afternoon-peak-72930.herokuapp.com/orderRent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderDetails),
        })
            .then((res) => res.json())
            .then((success) => {
                if (success) {
                    alert("Order PLaced successfully");
                }
            });
    };
    return (
        <div>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        ref={register({ required: true })}
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                        required
                    />
                    {errors.name && <span>This field is required</span>}
                    <br />
                    <input
                        type="number"
                        ref={register({ required: true })}
                        name="number"
                        placeholder="Phone No."
                        className="form-control"
                        required
                    />
                    {errors.number && <span>This field is required</span>}
                    <br />
                    <input
                        type="text"
                        ref={register({ required: true })}
                        name="email"
                        defaultValue={user.email}
                        placeholder="Email Address"
                        className="form-control"
                        required
                    />
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <textarea
                        ref={register({ required: true })}
                        name="message"
                        placeholder="Message"
                        className="form-control"
                        cols="22"
                        rows="5"
                        required
                    ></textarea>
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input
                        type="submit"
                        style={{ backgroundColor: "#16322E", color: "white" }}
                        className="btn btn-block"
                        value="Request Booking"
                    />
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
