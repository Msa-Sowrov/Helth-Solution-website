import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const AllProduct = () => {
    const [ products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('./product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])    
    return (
        <div className="container">
            <h1 className="text-primary text-center my-5">Our Quality Product</h1>
            <div className="row gap-5 d-flex align-items-center justify-content-center">
            {
                products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>
                )
            }


            </div>
                   </div>
    );
};

export default AllProduct;