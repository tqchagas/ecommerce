import React from 'react'
import {Row, Col, Image, ListGroup, ListGroupItem, Button, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import products from '../products'

import { useParams } from "react-router-dom";

function ProductScreen() {
    let { id } = useParams(); 
    const product = products.find((p) => p._id == id)

    return (
         <div>
             <Link to='/' className='btn btn-light'>Go Back</Link>
             <Row>
                 <Col>
                     <Image src={product.image} alt={product.name} />
                 </Col>
                 <Col md={3}>
                    <ListGroup variant="flush"> 
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>Price: ${product.price}</h3>
                            {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button 
                                className="btn-block" type="button"
                                disabled={product.countInStock == 0}
                            >
                                Add to cart
                            </Button>
                        </ListGroupItem>
                        <ListGroupItem>
                            {product.description}
                        </ListGroupItem>
                    </ListGroup>
                 </Col>

             </Row>
             
         </div>
    )
}

export default ProductScreen