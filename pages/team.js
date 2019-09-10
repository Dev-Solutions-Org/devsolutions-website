import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { getMembersTeam } from '../graphql'
import classes from '../styles/pages/team.scss'
import { MembersRoll } from '../components'

export default function Team () {
  const { loading, data, ...errors } = getMembersTeam()

  return data
    ? (
      <Container className='mb-4'>
        <h1 className='text-center mt-3 mb-4'>Our team members</h1>

        <Row className={classes.teamRow}>
          <MembersRoll members={data.teams} />
        </Row>
      </Container>
    ) : loading ? (
      <h1>Cargando</h1>
    ) : (
      `Error! ${errors}`
    )
}
