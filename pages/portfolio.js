import { Container, Row, Col } from 'react-bootstrap'
import classes from '../styles/pages/contact.scss'

export default () => (
  <Container>
    <h1 className='text-center'><b>PORTFOLIO</b></h1>
    	<h3 className="text-center">BISTRONOMY</h3>
    <Row className={`${classes.row} my-3`}>
  		<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/bistronomy-1.png' className='p-3 img-contact img-fluid' />
      	</Col>
      	<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/bistronomy-3.png' className='p-3 img-contact img-fluid' />
      	</Col>
    </Row>
    	<h3 className="text-center">AJIACO COLOMBIA</h3>
    <Row className={`${classes.row} my-3`}>
  		<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/ajiaco-1.jpg' className='p-3 img-contact img-fluid' />
      	</Col>
      	<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/ajiaco-2.png' className='p-3 img-contact img-fluid' />
      	</Col>
    </Row>
    	<h3 className="text-center">CHINCHILLA REACTOR</h3>
    <Row className={`${classes.row} my-3`}>
  		<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/chinchilla-1.png' className='p-3 img-contact img-fluid' />
      	</Col>
      	<Col xs='6' md='6' className='mb-3'>
        	<img src='./static/chinchilla-2.png' className='p-3 img-contact img-fluid' />
      	</Col>
    </Row>
    	<a className={classes.link} href="http://www.huebrisarts.com" target="_blank">
			<h3 className="text-center">HUEBRIS ARTS</h3>
    	</a>
    <Row className={`${classes.row} my-3`}>
  		<Col xs='12' md='12' className='mb-3'>
        	<img src='./static/huebris-1.png' className='p-3 img-contact img-fluid' />
      	</Col>
      	<Col xs='12' md='12' className='mb-3'>
        	<img src='./static/huebris-2.png' className='p-3 img-contact img-fluid' />
      	</Col>
    </Row>
  </Container>
)