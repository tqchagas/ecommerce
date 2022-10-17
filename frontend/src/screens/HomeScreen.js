import React from 'react'
import {Row, Col} from 'react-bootstrap'

import Product from '../components/Product'
import products from '../products'

function HomeScreen() {
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id}>
                        <Product product={product} />
                        <h3>{product.name}</h3>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen