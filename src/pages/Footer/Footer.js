import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-dark mt-5 mb-0 text-white">
            <div className='container'>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-6 col-12 my-3" >
                        <h2>Heath solution</h2>
                        <small>With occupancy rates at near capacity and an increasing number of complex patients, our existing facilities are being enhanced and new facilities created to meet .</small>
                        <p>+974 1111111</p>
                        <p>mdsowrov315@gmail.com</p>
                        <p>mdsowrov315@gmail.com</p>
                    </div>
                    <div className="col-md-6 col-12 my-3" >
                        <h3>Useful Links</h3>
                        <Link to='/home'>Home</Link><br/>
                        <Link to='/about'>about</Link><br/>
                        <Link to='/service'>Service</Link><br/>
                        <Link to='/shop'>Shop</Link><br/>
                        <Link to='/login'>Login</Link><br/>
                    </div>
            <div className="text-center mb-3">

                    <small >© Copyright 2022 msa sowrov rights reserved.</small>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;