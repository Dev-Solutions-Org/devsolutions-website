import React from 'react'
import { Col } from 'react-bootstrap'
import classes from '../../styles/components/contact.scss'

export default () => (
  <Col
    xs='12' lg='6'
  >
    <form>
      <label class={`${classes.dLabelOutline} w-100`}>
        <input type='text' placeholder=' ' name='name' />
        <span>Name</span>
      </label>

      <label class={`${classes.dLabelOutline} w-100`}>
        <input type='email' placeholder=' ' name='email' />
        <span>Email</span>
      </label>

      <label class={`${classes.dLabelOutline} w-100`}>
        <textarea rows='4' placeholder=' ' name='message' />
        <span>Message</span>
      </label>
    </form>
    <button
      className={`${classes.button} w-100`}
    >
      send
    </button>
  </Col>
)
