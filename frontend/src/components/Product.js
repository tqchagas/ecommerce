import React from 'react'
import { Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

function Product({product}) {
    return (
        <Card className="my-3">
            <Link to={`/product/${product.id}/`}>
                <Card.Img src={product.image}></Card.Img>
            </Link>
            <Card.Body>
            <Link to={`/product/${product.id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text>
                <div className='my-3'>
                    {product.rating} stars from {product.numReviews} reviews
                </div>
            </Card.Text>
            <Card.Text>
                <div as="h3">
                    ${product.price}
                </div>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product