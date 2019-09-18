import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import { getSingleService } from '../../../graphql'
import ReactMarkdown from 'react-markdown'

export default () => {
  const router = useRouter()
  const { slug } = router.query
  const { loading, data, ...errors } = getSingleService(slug)

  const service = data && data.services[0]
  console.log(service)

  return data ? (
    <Container className='my-4'>
      <img
        src={service.icon.url}
        alt={service.title}
        className='img-fluid d-block mx-auto'
        width='200'
      />

      <h1 className='text-center my-3'>{service.title}</h1>

      <ReactMarkdown
        source={service.content}
        className='text-justify text-md-left'
      />
    </Container>
  ) : loading ? (
    'Loading...'
  ) : (
    `Error! ${errors}`
  )
}
