import React from 'react'
import products from '../products'
import { Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

function Homescreen() {
  return (
    <Layout>

      

      <div className='banner-container'>
        {/* <button className="banner-button"> SHOP NOW </button>  */}
        <Banner />
      </div>

      <div className='whitebox'>
        <h2>Our Collection!</h2>
        <p>
          Step into the cozy world of LoopedByKlayd, where every stitch is made with love. We specialize in creating unique, high-quality crochet items that bring warmth and charm to your life. Our collection is perfect for finding that special gift or treating yourself. Every piece is handcrafted to be a one-of-a-kind treasure, ensuring you receive something truly unique and full of character. Shop our collection today and bring home a piece of cozy artistry!
        </p>
      </div>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={6} xl={6}>
            <Product product={product} />
          </Col>
        ))}
      </Row>

    </Layout>
  )
}

export default Homescreen