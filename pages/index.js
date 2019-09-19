import Slider from 'react-animated-slider'
import { connect } from 'react-redux'

import { getServicesSlider } from '../graphql'
import { Spinner } from '../components'

const Index = ({ language }) => {
  const { loading, data, ...errors } = getServicesSlider()

  return <div>
  { 
    data
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
    {
      language === 'EN' ?
        <iframe
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/UOOUCZEo5kw" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
        :
        <iframe
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/SP0vgSPiNOQ" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
    }
    </div>
}

const mapStateToProps = (state) => ({
  language: state.translation.language
})

export default connect(mapStateToProps)(Index)
