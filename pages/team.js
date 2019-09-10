import { Container, Row } from 'react-bootstrap'
import { getMembersTeam } from '../graphql'
import classes from '../styles/pages/team.scss'
import { LinkedIn } from '../components'

export default () => {
  const { loading, data, errors } = getMembersTeam()

  return data
    ? (
      <Container className='mb-4'>
        <h1 className='text-center mt-3 mb-4'>Our team members</h1>

        <Row className={classes.teamRow}>
          {
            data.teams.map(member => (
              <div key={member.id} className={classes.teamBox}>
                <img
                  src={member.photo.url}
                  alt={`${member.name} | Dev Solutions`}
                  className={classes.teamPhoto}
                />
                <h2 className={classes.teamName}>{member.name}</h2>
                <h3 className={classes.teamDescription}>{member.description}</h3>
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.teamSocial}
                >
                  <LinkedIn />
                </a>
              </div>
            ))
          }
        </Row>
      </Container>
    ) : loading ? (
      <h1>Cargando</h1>
    ) : (
        `Error! ${errors}`
    )
}
