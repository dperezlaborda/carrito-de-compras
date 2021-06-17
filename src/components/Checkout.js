import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style/checkout.css';


const Checkout = ({items, addItem, deleteItem, total, clearAll }) => {

    return (
        <div className="card-checkout p-4">
            <h4 className="text-center">Checkout</h4>
            {items.length === 0 ?
                <h4 className="text-center">Todavia no agregaste productos</h4>
                :
                <Fragment>
                    <Container>
                        <Row className="pl-3 pt-4 pb-3">
                            <Col sm={5}>Productos</Col>
                            <Col sm={4}>Subtotal</Col>
                            <Col sm={2}>Cantidad</Col>
                        </Row>
                    </Container>
                    {items.map(item =>(
                        <Container key={item.id}>
                            <Row className="p-3 line align-items-center">
                                <Col sm={5}>{item.name}</Col>
                                <Col sm={4}>$ {item.quantity * item.price}</Col>
                                <Col sm={1}>{item.quantity}</Col>
                                <Col sm={1}>
                                    <Button onClick={()=> addItem(item)} variant="secondary">+</Button>
                                </Col>
                                <Col sm={1} onClick={()=> deleteItem(item)}>
                                    <FontAwesomeIcon className="deleteBttn mt-2" icon={faTrash}/>
                                </Col>
                            </Row>
                        </Container>
                    ))}
                    <div className="d-flex totalContainer">
                        <h4 className="pl-4">Total a pagar: </h4>
                        <h4>$ {total}</h4>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default Checkout;
