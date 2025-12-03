import React from 'react'
import Layout from '../components/Layout'
import { Row, Col, Button, Card } from 'react-bootstrap'
import products from '../products'

function Cart() {
  // simple static cart preview using first two products
  const cartItems = products.slice(0, 2)

  return (
    <Layout>
      <div className="whitebox" style={{ marginTop: 20 }}>
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <Card key={item._id} className="mb-3">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={3}>
                      <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                    </Col>
                    <Col md={6}>
                      <h5>{item.name}</h5>
                      <p style={{ margin: 0 }}>{item.price} Php</p>
                    </Col>
                    <Col md={3} className="text-end">
                      <Button variant="light" style={{ marginRight: 8 }}>-</Button>
                      <span style={{ fontWeight: 600 }}>1</span>
                      <Button variant="light" style={{ marginLeft: 8 }}>+</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}

            <div style={{ textAlign: 'right', marginTop: 18 }}>
              <h4>Subtotal: 999 Php</h4>
              <Button variant="primary">Proceed to Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Cart