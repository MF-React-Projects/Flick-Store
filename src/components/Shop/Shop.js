import React, {useEffect, useState} from 'react';
import './Shop.css';
import Product from "../Product/Product";
import {Container, Row} from "react-bootstrap";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div id={'shop'}>
            <div className="ic-products">
                <div className="ic-grid-products">
                    <Container>
                        <Row>
                            {
                                products.map(product => <Product key={product.id} product={product}/>)
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Shop;