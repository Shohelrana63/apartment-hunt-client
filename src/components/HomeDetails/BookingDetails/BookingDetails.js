import React from "react";
import BookingInfo from "../BookingInfo/BookingInfo";
import BookingForm from "../BookingForm/BookingForm";
import "./BookingDetails.css";

const BookingDetails = ({ selectedRent }) => {
    return (
        <section className="container my-5">
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="img-fluid">
                            <img src={selectedRent.img} className="img-fluid" />
                        </div>

                        <div className="room-gallery d-flex justify-content-between mt-3">
                            <img src="https://iili.io/FxrKzP.png" className="small" />
                            <img src="https://iili.io/Fxrn1a.png" className="small" />
                            <img src="https://iili.io/Fxrzdv.png" className="small" />
                            <img src="https://iili.io/Fxr5Xt.png" className="small" />
                        </div>

                        <div className="my-3">
                            <BookingInfo selectedRent={selectedRent}></BookingInfo>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <BookingForm selectedRent={selectedRent}></BookingForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingDetails;
