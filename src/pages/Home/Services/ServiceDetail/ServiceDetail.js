import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = () => {
   const {serviceKey} = useParams();
    const [product, setProduct] = useState([]);
    const [pro, setPro] = useState({})
    useEffect(()=>{
            fetch('/services.json')
            .then(res=>res.json())
            .then(data=>setProduct(data))
    },[])

    setTimeout(() => {
        const selectedProduct =  product.find(pro=>serviceKey == pro.key)
          setPro(selectedProduct)
    }, 100);
    
            
    
    return (
        <div className="container">{
                pro&&<div className='text-center'>
                    <h1>Service Name: <span className="text-primary">{pro.name}</span></h1>
                    <img className="detail-img" src={pro.img} alt=""/>
                    <br/>
                    <br/>
                    <p>{pro.desf}</p>
                    <Link to="/appointment" > 
                        <button className='btn btn-danger'>Make An Appointment</button>
                    </Link>


                </div>
            }
        </div>
    );
};

export default ServiceDetail;