import React from 'react'
import { LinkedIn } from '../'
import classes from '../../styles/components/team.scss'

export default ({ members }) => {
  return members.map(member => (
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
