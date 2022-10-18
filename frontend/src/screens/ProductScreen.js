import React, {useState, useEffect} from 'react'
import {Row, Col, Image, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import axios from 'axios'

import { useParams } from "react-router-dom";

function ProductScreen() {
    let { id } = useParams(); 
    
    const [product, setProduct] = useState([])

    useEffect(() => {
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${id}`)
            setProduct(data);
        }
        fetchProduct()
    })

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