import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const ServicesLoad = () => {
    const [services, setService]=useState([]);
    useEffect(()=>{
        fetch("./services.json")
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    
    return (
        <div className="container">
            <h1 className="text-center m-5 text-primary">Find What We Do</h1>
            <div className="row gap-3 d-flex justify-content-center">
                {
                    services.map(service=><Service
                        key = {service.key}
                        service = {service}
                    
                    
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesLoad;