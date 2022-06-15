import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { name, picture } = props.product;
    return (
        <div className='cart'>
            <h6>Name: {name}</h6>
            <img className='w-25' src={picture} alt="" />
        </div>
    );
};

export default Cart;