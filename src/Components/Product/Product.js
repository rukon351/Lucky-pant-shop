import React from 'react';
import "./Product.css";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ handleAddToCart, product }) => {
    // const { handleAddToCart, product } = props;
    const { name, picture, price } = product;

    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <BsFillCartFill className='icon'></BsFillCartFill>
            </button>
        </div>
    );
};

export default Product;