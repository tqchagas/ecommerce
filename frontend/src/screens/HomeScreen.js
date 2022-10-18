import React, { useEffect, useState } from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'

import Product from '../components/Product'

function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts(){
            const {data} = await axios.get('/api/products/')
            setProducts(data);
        }
        fetchProducts()
    })
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen