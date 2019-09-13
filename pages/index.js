import Slider from 'react-animated-slider'
import { getServicesSlider } from '../graphql'
import { Spinner } from '../components'

export default () => {
  const { loading, data, ...errors } = getServicesSlider()

  return data
    ? (
      <Slider
        autoplay={6000}
        className='slider'
        touchDisabled
      >
        {data.services.map(service => (
          <div
            className='sliderItem'
            key={service.id}
          >
            <div className='imgContainer'>
              <img src={service.icon.url} alt={`${service.title} | Dev Slutions`} className='img' />
            </div>
            <h2 className='title'>{service.title}</h2>
            <h3 className='description'>{service.short_content}</h3>
          </div>
        ))}
      </Slider>
    ) : loading ? (
      <Spinner />
    ) : (
      `Error! ${errors}`
    )
}
