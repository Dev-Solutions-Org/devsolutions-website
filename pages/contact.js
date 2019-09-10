import { Container, Row, Col } from 'react-bootstrap'
import { ContactForm } from '../components'

export default () => (
  <Container>
    <h1 className='text-center'><b>CONTACT</b></h1>
    <Row className='my-3'>
      <ContactForm />

      <Col xs='12' lg='6' className='mb-3'>
        <img src='/static/contact-data.png' className='p-3 img-contact img-fluid' />
      </Col>
    </Row>
  </Container>
)
