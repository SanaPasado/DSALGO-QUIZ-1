import React from 'react'
import Layout from '../components/Layout'
import { Form, Button } from 'react-bootstrap'

function CustomOrders() {
  return (
    <Layout>
      <div className="whitebox" style={{ marginTop: 20 }}>
        <h1>Custom Orders</h1>
        <p>Tell us what you want and we'll try to make it.</p>

        <Form>
          <Form.Group className="mb-3" controlId="type">
            <Form.Label>Item Type</Form.Label>
            <Form.Select>
              <option>Plushie</option>
              <option>Flower</option>
              <option>Keychain</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="details">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Colors, size, any reference images links..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="budget">
            <Form.Label>Budget (optional)</Form.Label>
            <Form.Control type="text" placeholder="e.g. 500 Php" />
          </Form.Group>

          <Button variant="primary" type="submit">Send Custom Request</Button>
        </Form>

      </div>
    </Layout>
  )
}

export default CustomOrders