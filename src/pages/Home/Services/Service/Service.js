import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
 
    const {img,key, name, desf} = service;
    return (
        <div id="card" className="card col-lg-3 col-12">
            
                <img className="img-fluid" src={img} alt="" />
                <div className="card-body">
                <h4>{name}</h4>
                <small>{desf}</small><br/>
                </div>
                <div className="card-footer">
                    <Link to={`/service/${key}`}>
                        <button className="btn btn-danger">Make An Appointment</button>
                    </Link>
                </div>
            </div>
       
    );
};

export default Service;