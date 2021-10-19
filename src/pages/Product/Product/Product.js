import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
   const {name ,img} = product;
   console.log(name)
    return (
                <div className="card  col-md-3 col-12">
                    <img className="img-fluid h-100" src={img} alt="" />
                   <div className="card-body">
                   <h4>{name}</h4>
                    <Link to="/confirm"> 
                   <button className="btn btn-primary my-2 text-center">Buy Now</button>
                    </Link>
                   </div>
                </div>
    );
};

export default Product;