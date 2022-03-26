import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import './CartProduct.css';

const CartProduct = ({item, deleteProduct}) => {
    const {name, price, img} = item;
    return (
        <div className='cart-item'>
            <img src={img} alt={name}/>
            <div className='cart-item-info'>
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
            <div className="cart-item-delete" onClick={() => deleteProduct(item)}>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
    );
};

export default CartProduct;