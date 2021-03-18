import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
// import data from '../data';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let _apireq= null;
            try{
                const {data} = await axios.get('/api/products');                
                setProducts(data);
            }catch(err){
                console.error("Error response:");
                console.error(err.response.data);    
                console.error(err.response.status);  
                console.error(err.response.headers);
            }finally{
                console.log(_apireq);
            }
        };
        fetchData();
    }, []);
    console.log(products);
    debugger;
    return (
        <div>
            <div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>
        </div>
    );
}
