import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import classes from '../../styles/components/footer.scss'
import { changeLanguage } from './../../redux/translation/translation.actions'
import { selectMessages } from '../../redux/translation/translation.selectors'

const Footer = ({ language, changeLanguage, messages }) => {
  return (
    <footer className={classes.footer} style={{ color: 'white' }}>
      <Row className='m-0'>
        <Col xs={12} lg={6} className={`${classes.footerDesktop} p-4 mt-4`}>
          <h3 className='text-center'>{messages.SUBSCRIBE}</h3>
          <h6 className='text-center p-3'>{`${messages.SUBSCRIBE_INFO}.`}</h6>
          <form
            action='https://gmail.us4.list-manage.com/subscribe/post?u=846d5770c96378effa4b04ce7&amp;id=f6f09974d8'
            method='post'
            id='mc-embedded-subscribe-form'
            name='mc-embedded-subscribe-form'
            className={`${classes.form} validate text-center`}
            target='_blank'
          >
            <input type='email' name='email' id='mce-EMAIL' placeholder={messages.EMAIL} className={`${classes.emailInput} text-center d-block m-auto`} required />
            <input type='submit' value={messages.BUTTON} name='subscribe' id='mc-embedded-subscribe' className={`${classes.button} d-block mt-3 mx-auto`} />
          </form>
        </Col>

        <Col xs={12} lg={6} className='p-4 mt-4'>
          <h3 className='text-center'>{`${messages.CHOOSE}:`}</h3>
          <h6 className='text-center'>
            {
              language === 'EN'
                ? <span>English</span>
                : (
                  <span className={classes.clickable} onClick={() => changeLanguage('EN')}>
                    <b>English</b>
                  </span>
                )
            }
                    &nbsp;|&nbsp;
            {
              language === 'ES'
                ? <span>Español</span>
                : (
                  <span className={classes.clickable} onClick={() => changeLanguage('ES')}>
                    <b>Español</b>
                  </span>
                )
            }
          </h6>
        </Col>
        <Col xs={12}>
          <h5 className='text-center'>{`© Dev Solutions 2019. ${messages.COPYRIGHT}.`}</h5>
        </Col>
      </Row>
    </footer>
  )
}

const mapStateToProps = (state) => ({
  language: state.translation.language,
  messages: selectMessages('FOOTER')(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (language) => dispatch(changeLanguage(language))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
