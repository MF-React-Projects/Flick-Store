import React from 'react';
import './Cart.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import CartProduct from "../CartProduct/CartProduct";

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart'>
            <h4 className='mb-3'>Your Cart</h4>
            {
                cart.map(item => <CartProduct key={item.id} item={item}/>)
            }
        </div>
    );
};

export default Cart;