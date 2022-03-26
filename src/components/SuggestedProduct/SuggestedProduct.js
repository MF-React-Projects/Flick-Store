import React from 'react';

const SuggestedProduct = ({product}) => {
    if(product.length === 0){
        return '';
    }
    const {name, price, img} = product;
    return (
        <div className='cart-item'>
            <img src={img} alt={name}/>
            <div className='cart-item-info'>
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default SuggestedProduct;