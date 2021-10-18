import React from 'react';
import './Service.css'
const Service = ({service}) => {
    console.log(service)
    const {img, name, desf} = service;
    return (
        <div id="card" className="card col-lg-3 col-12">
            
                <img className="img-fluid" src={img} alt="" />
                <div className="card-body">
                <h4>{name}</h4>
                <small>{desf}</small><br/>
                </div>
                <div className="card-footer">

                <button className="btn btn-danger">detail</button>
                </div>
            </div>
       
    );
};

export default Service;