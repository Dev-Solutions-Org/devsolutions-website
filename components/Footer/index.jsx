import React from 'react'
import { Row, Col } from 'react-bootstrap'
import classes from '../../styles/components/footer.scss'

export default () => (
  <footer className={classes.footer}>
    <Row>
      <Col xs={12} lg={6} className={`${classes.footerDesktop} p-4 mt-4`}>
        <img src='/static/white-header.png' alt='Dev Solutions' className={`${classes.footerLogo} d-block mx-auto`} />
      </Col>

      <Col xs={12} lg={6} className='p-4 mt-4'>
        <img src='/static/white-header.png' alt='Dev Solutions' className={`${classes.footerLogo} d-block mx-auto`} />
      </Col>

      <Col xs={12} lg={6} className={`${classes.footerMobile} p-4`}>
        <img src='/static/white-header.png' alt='Dev Solutions' className={`${classes.footerLogo} d-block mx-auto`} />
      </Col>
    </Row>
  </footer>
)
