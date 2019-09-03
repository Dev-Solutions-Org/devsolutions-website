import React from 'react'

import './service-preview.styles.scss'

const ServicePreview = ({ service }) => {
  const { title, image, description } = service

  return (
    <div className='p-3 text-center service-preview box-shadow'>
      <img src={image} alt={title} className='service-img' />
      <h3><b>{title}</b></h3>
      <p>{description}</p>
    </div>
  )
}

export default ServicePreview
