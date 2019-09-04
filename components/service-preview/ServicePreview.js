import React from 'react'
import { connect } from 'react-redux';

import { selectServiceMessages } from '../../redux/translation/translation.selectors';

import './service-preview.styles.scss'

const ServicePreview = ({ service, messages }) => {

  const { image } = service

  const { title, description } = messages;

  return (
    <div className='p-3 text-center service-preview box-shadow'>
      <img src={image} alt={title} className='service-img' />
      <h3><b>{title}</b></h3>
      <p>{description}</p>
    </div>
  )
}

const mapStateToProps = (state, props) => {
	return {
  language: state.translation.language,
  messages: selectServiceMessages(props.service.key)(state)
}};

export default connect(mapStateToProps)(ServicePreview);