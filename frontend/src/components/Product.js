import React from 'react'
import { Card } from 'react-bootstrap'


function Product({product}) {
    return (
        <Card className="my-3">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}></Card.Img>
            </a>
            <Card.Body>
            <a href={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
            </a>
            <Card.Text>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
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