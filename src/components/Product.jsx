import React from 'react'
import {Card} from 'react-bootstrap'

function Product({ product }) {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        {product.image && (
          <Card.Img variant="top" src= {product.image} alt={product.name} />
        )}
        <Card.Body>
          <Card.Title as="h3">{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product