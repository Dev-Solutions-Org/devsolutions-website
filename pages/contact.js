import { Container, Row, Col } from 'react-bootstrap'
import { ContactForm } from '../components'
import classes from '../styles/pages/contact.scss'

export default () => (
  <Container>
    <h1 className='text-center'><b>CONTACT</b></h1>
    <Row className={`${classes.row} my-3`}>
      <ContactForm />

      <Col xs='12' md='6' className='mb-3'>
        <img src='/static/contact-data.png' className='p-3 img-contact img-fluid' />
      </Col>
    </Row>
  </Container>
)
