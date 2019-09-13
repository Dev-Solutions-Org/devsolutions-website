import React from 'react'

import classes from './modal.styles.scss'

const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.myModal}>
      <div className={classes.modalContent}>
        {children}
        <span className={classes.return} onClick={onClose}>ACCEPT</span>
      </div>
    </div>
  )
}

export default Modal
