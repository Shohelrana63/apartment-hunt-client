import React from 'react';
import img1 from '../../../../image/logos/apartment 1.png';
import img2 from '../../../../image/logos/affordable 1.png';
import img3 from '../../../../image/logos/lessee 1.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
const Service = () => {
    const service = [
        {
            img: img1,
            title: 'Wide Range of Properties',
            description: 'With a robust selection of popular properties on hand as well as leading properties from experts. '
        },
        {
            img: img2,
            title: 'Financing Made Easy',
            description: 'Our stress-free finance department that can find financial solutions to save you money.'
        },
        {
            img: img3,
            title: 'Trusted by Thousands',
            description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.'
        },
    ]
    return (
        <section>

            <div className='container'>
                <div className="text-center my-5" style={{ color: '#16322E' }}>
                    <h5>Service</h5>
                    <h1 style={{ fontWeight: 'bold' }}>We're an agency tailored to all
                    <br />
                    client's needs that always delivers </h1>
                </div>
                <div>
                    <div className="row">
                        {
                            service.map(service =>
                                <ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Service;