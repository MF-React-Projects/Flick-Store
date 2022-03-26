import React from 'react';
import './Cart.css';
import CartProduct from "../CartProduct/CartProduct";
import {Button} from "react-bootstrap";

const Cart = ({cart, handleEmptyCart}) => {

    const chooseRandomProduct = () => {
        const randomProductNum = Math.floor(cart.length * Math.random());
        const randomProduct = cart[randomProductNum];
        const {name, price, img} = randomProduct;

        let randomProductContainer = document.getElementById('random-product');
        randomProductContainer.innerHTML = '';
        randomProductContainer.innerHTML = `
            <h4 class="mb-3">Best Deal for You</h4>
            <div className='selected-item'>
                <img src=${img} alt=${name}/>
                <div className='selected-item-info'>
                    <h5>${name}</h5>
                    <p>$${price}</p>
                </div>
            </div>
        `;
    };

    if (cart.length === 0) {
        return (
            <div className='cart'>
                <h4 className='mb-3'>Your Cart</h4>
                <p>Your cart is empty</p>
            </div>
        );
    } else {
        return (
            <div className='cart'>
                <h4 className='mb-3'>Your Cart</h4>
                {
                    cart.map(item => <CartProduct key={item.id} item={item}/>)
                }
                <Button variant="primary" className='w-100 mb-3' onClick={chooseRandomProduct}>Choose 1 for me!</Button>
                <Button variant='primary' className='w-100' onClick={handleEmptyCart}>Choose Again</Button>
                <div id="random-product"></div>
            </div>
        );
    }

};

export default Cart;