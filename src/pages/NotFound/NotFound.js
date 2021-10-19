import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container text-center">
            <img className="img-fluid" src="https://i.ibb.co/qk56GBz/404-1.jpg" alt="" />
            <Link to="/home">
                <button className="my-3 btn btn-primary">Go Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;