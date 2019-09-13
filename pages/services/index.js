import { Button } from 'react-bootstrap'
import { getServices } from '../../graphql'
import { Spinner, Link } from '../../components'
import classes from '../../styles/pages/services.scss'

export default () => {
  const { loading, data, ...errors } = getServices()

  console.log(data && data.services)

  return data
    ? (
      <div className={classes.serviceRow}>
        {
          data.services.map(service => (
            <Link href={`/services/${service.slug}`} className={classes.serviceBox} key={service.id}>
              <img
                src={service.icon.url}
                alt={`${service.title} | Dev Solutions`}
                className={classes.img}
              />
              <h2 className={classes.title}>{service.title}</h2>
              <h3 className={classes.description}>{service.short_content.substr(0, 39)}...</h3>

              <Button className={classes.button}>
                See more
              </Button>
            </Link>
          ))
        }
      </div>
    ) : loading ? (
      <Spinner />
    ) : (
      `Error! ${errors}`
    )
}
