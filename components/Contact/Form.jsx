import React, { createRef, useState } from 'react'
import { Col } from 'react-bootstrap'
import classes from '../../styles/components/contact.scss'
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import Modal from './../modal/Modal'

const RECAPTCHA_SITEKEY = '6LfbVLgUAAAAAP1tJ06YnNdnZo6moGKe-kuCOV-v'
const ReCAPTCHARef = createRef()
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export default () => {
  const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    e.persist()
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    await ReCAPTCHARef.current.execute()
    await axios.post('https://email.devsolution.us/', {
      ...inputs
    }, config)
      .then(res => {
        setOpen(true)
        setTimeout(() => {
          window.location.reload()
        }, 4000)
      })
      .catch(error => console.log(error))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { name, email, message } = inputs
  const isValidated =
    name.length > 0 &&
    email.length > 0 &&
    message.length > 0

  return (
    <>
      {
        open &&
          <Modal onClose={handleClose}>
          Mensaje enviado con éxito.
          </Modal>
      }
      <Col
        xs='12'
        md='6'
        className={classes.formCol}
      >
        <form className={classes.form} onSubmit={handleSubmit}>
          <label class={`${classes.dLabelOutline} w-100`}>
            <input type='text' placeholder=' ' name='name' onChange={handleChange} />
            <span>Name</span>
          </label>

          <label class={`${classes.dLabelOutline} w-100`}>
            <input type='email' placeholder=' ' name='email' onChange={handleChange} />
            <span>Email</span>
          </label>

          <label class={`${classes.dLabelOutline} w-100`}>
            <textarea rows='4' placeholder=' ' name='message' onChange={handleChange} />
            <span>Message</span>
          </label>
          <button
            className={`${classes.button} w-50`}
            type='submit'
            disabled={!isValidated}
          >
            send
          </button>
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITEKEY}
            size='invisible'
            ref={ReCAPTCHARef}
          />
        </form>
      </Col>
    </>
  )
}
