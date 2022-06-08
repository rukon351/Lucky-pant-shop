import React from 'react';
import "./Product.css";

const Product = (props) => {
    const { name, picture, price } = props.product;
    console.log(props.product)
    return (
        <div className='product'>
            <img src={picture} alt="" />
        </div>
    );
};

export default Product;