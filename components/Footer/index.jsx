import React from 'react'

import { Row, Col } from 'react-bootstrap'
import classes from '../../styles/components/footer.scss'

import { connect } from 'react-redux';
import { changeLanguage } from './../../redux/translation/translation.actions';
import { selectMessages } from '../../redux/translation/translation.selectors';

const Footer = ({ language, changeLanguage, messages }) => {

  return ( <footer className={classes.footer} style={{color: 'white'}}>
              <Row>
                <Col xs={12} lg={6} className={`${classes.footerDesktop} p-4 mt-4`}>
                  <img src='/static/white-header.png' alt='Dev Solutions' className={`${classes.footerLogo} d-block mx-auto`} />
                </Col>

                <Col xs={12} lg={6} className='p-4 mt-4'>
                  <h3 className="text-center">{`${messages.CHOOSE}:`}</h3>
                  <h6 className="text-center">
                    {
                      language === 'EN' ? 
                      <span>English</span> :
                      <span className={classes.clickable} onClick={() => changeLanguage('EN')}>
                        <b>English</b>
                      </span>
                    } 
                    &nbsp;|&nbsp;
                    {
                      language === 'ES' ? 
                      <span>Español</span> :
                      <span className={classes.clickable} onClick={() => changeLanguage('ES')}>
                        <b>Español</b>
                      </span>
                    } 
                  </h6>
                </Col>

                <Col xs={12} lg={6} className={`${classes.footerMobile} p-4`}>
                  <img src='/static/white-header.png' alt='Dev Solutions' className={`${classes.footerLogo} d-block mx-auto`} />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h5 className="text-center">{`© Dev Solutions 2019. ${messages.COPYRIGHT}.`}</h5>
                </Col>
              </Row>
            </footer>
  )
};

const mapStateToProps = (state) => ({
  language: state.translation.language,
  messages: selectMessages('FOOTER')(state)
});


const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => dispatch(changeLanguage(language))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);