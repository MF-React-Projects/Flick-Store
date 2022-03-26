import React, {useEffect, useState} from 'react';
import './Shop.css';
import Product from "../Product/Product";
import {Container, Row, Col, Offcanvas} from "react-bootstrap";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <div className="shop-container">
                <Row>
                    <Col md={8}>
                        <div id={'shop'}>
                            <div className="ic-products">
                                <div className="ic-grid-products">
                                    <Row>
                                        {
                                            products.map(product => <Product key={product.id} product={product}/>)
                                        }
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cart-container">
                            <Cart cart={cart}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Shop;