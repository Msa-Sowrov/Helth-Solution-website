import React from 'react';

const About = () => {
    return (
        <div id="about" className="container">
            <h1 className="text-center text-primary my-5">About Us</h1>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src="https://i.ibb.co/ccpGKNT/doctor-nurses-special-equipment.jpg" alt="" /></div>
                <div className="col-md-6 col-12">
                    <h1>A Global Leader In The Treatment Of Quality.</h1>
                    <p>With occupancy rates at near capacity and an increasing number of complex patients,</p>
                    <small>With occupancy rates at near capacity and an increasing number of complex patients, our existing facilities are being enhanced and new facilities created to meet .</small>
                </div>
            </div>
            <div className="row d-flex align-items-center my-5" >
                <div className="col-md-6 col-12">
                    <h1>We Are The Best Support for You</h1>
                    <p>Our clinic largest private mental health partnership, with a carefully selected nationwide team of Psychiatrists, Psychologists and Psychotherapists. We only work with highly experienced and capable partners who share our values.</p>
                </div>
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src="https://i.ibb.co/F891BDK/414.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;