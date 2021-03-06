import React from 'react'
import products from '../products'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button,Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductScreen = ({match}) => {
    const product=products.find((product)=>product._id === match.params.id)
    return (
        <>
           <Link className='btn btn-light my-3' to='/'>
               Go Back
           </Link>
           <Row>
               <Col md={6}>
                   <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                          <h3>{product.name}</h3> 
                       </ListGroup.Item>
                       <ListGroup.Item>
                          <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                       </ListGroup.Item>
                       <ListGroup.Item>
                          Price : ${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                          Description : {product.description}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>

               <Col md={3}>
                   <Card>
                       <ListGroup varaiant='flush'>
                           <ListGroup.Item>
                               <Row>
                                     <Col>Price:</Col>
                                     <Col>${product.price}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                  <Col>status:</Col>
                                  <Col>{(product.countInStock > 0) ?'in stock' : 'out of stock'}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add to Cart</Button>
                           </ListGroup.Item>

                       </ListGroup>
                   </Card>
               </Col>

           </Row>
        </>
    )
}

export default ProductScreen
