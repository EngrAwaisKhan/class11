import React from "react";
import './../App.css';
import Shoes from './../shoes.json';
import {Link} from 'react-router-dom';

function Product() {
    // console.log(Shoes);
    // console.log(Object.keys(Shoes));
  return (
    <div>
        <h2>Welcome to Product Page</h2>
        <div className="productContainer">
            {Object.keys(Shoes).map(keyName => {
                const shoe = Shoes[keyName];
                return(<Link key={keyName} className="link" to={`/product/${keyName}`}>
                    <h3>{shoe.name}</h3>
                    <img src={shoe.img} height={'150px'}/>
                </Link>)
            })}
        </div>
    </div>
  );
}

export default Product;