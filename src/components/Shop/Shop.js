import React, {useEffect, useState} from 'react';
import './Shop.css';
import Product from "../Product/Product";
import {Row, Col} from "react-bootstrap";
import Cart from "../Cart/Cart";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddProduct = product => {
        if(cart.length === 4){
            alert('You can only add 4 products in the cart');
            return;
        }
        if(cart.find(p => p.id === product.id)) {
            alert('Product already added to cart');
        } else {
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }

    const handleDeleteProduct = product => {
        const newCart = cart.filter(p => p.id !== product.id);
        setCart(newCart);
    }

    const handleEmptyCart = () => {
        setCart([]);
    }

    return (
        <>
            <div className="shop-container">
                <h4 className='mb-4'>Choose 4 Product</h4>
                <Row>
                    <Col md={8}>
                        <div id={'shop'}>
                            <div className="ic-products">
                                <div className="ic-grid-products">
                                    <Row>
                                        {
                                            products.map(product => <Product key={product.id} product={product} handleAddProduct={() => handleAddProduct(product)}/>)
                                        }
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="cart-container h-100">
                            <Cart cart={cart} handleEmptyCart={handleEmptyCart}/>
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    );
};

export default Shop;