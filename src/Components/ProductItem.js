import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes.json';

function ProductItem() {
    const { slug } = useParams();
    const shoe = Shoes[slug];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1>Welcome to Product Item</h1>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={500} alt="shoe" />
            </div>
        </div>
    );
}

export default ProductItem;