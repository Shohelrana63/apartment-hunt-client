import React from 'react';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4">
            <div className="card mt-4">
                <img className="card-img-top mx-auto" style={{ width: '80px', height: '80px' }} src={service.img} alt="" />
                <div className="card-body" style={{ textAlign: 'center' }}>
                    <h4 className="card-title" style={{ color: '#16322E' }}>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;