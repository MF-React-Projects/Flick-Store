import React, {useState} from 'react';
import './Cart.css';
import CartProduct from "../CartProduct/CartProduct";
import {Button} from "react-bootstrap";
import SuggestedProduct from "../SuggestedProduct/SuggestedProduct";

const Cart = ({cart, handleEmptyCart}) => {
    const [suggestedProduct, setSuggestedProduct] = useState([])

    // suggest random products to the user
    const chooseRandomProduct = () => {
        const randomProductNum = Math.floor(cart.length * Math.random());
        const randomProduct = cart[randomProductNum];
        setSuggestedProduct(randomProduct);
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
                <Button variant='primary' className='w-100 mb-4' onClick={handleEmptyCart}>Choose Again</Button>
                <SuggestedProduct product={suggestedProduct}/>
            </div>
        );
    }

};

export default Cart;