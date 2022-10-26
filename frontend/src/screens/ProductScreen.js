import React, {useEffect} from 'react'
import {Row, Col, Image, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { useParams } from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import {listProductDetails} from '../actions/productionActions'

function ProductScreen() {
    const dispatch = useDispatch()
    let { id } = useParams()
    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
    },[])

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
                            {product.count_in_stock > 0 ? 'In stock' : 'Out of stock'}
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button 
                                className="btn-block" type="button"
                                disabled={product.count_in_stock === 0}
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