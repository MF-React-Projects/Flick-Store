import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css';
import {Button, Col} from "react-bootstrap";
import {faCartPlus, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

const Product = ({product}) => {
    console.log(product);
    const {name, price, img} = product;
    return (
        <Col xs={12} sm={6} md={4}>
            <div className="flick-product">
                <div className="img-box">
                    <img src={img} alt="" className='img-fluid'/>
                </div>
                <div className="flick-product-content">
                    <h5>{name}</h5>
                    <p>${price}</p>
                    <Button variant="primary">
                        Add to cart
                        <FontAwesomeIcon className={'ms-2'} icon={faCartPlus} />
                    </Button>
                </div>
            </div>
        </Col>
    );
};

export default Product;