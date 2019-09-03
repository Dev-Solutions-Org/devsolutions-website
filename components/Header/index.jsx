import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from '..'
import classes from '../../styles/components/header.scss'

export default () => (
  <Navbar className={`${classes.navbar} bg-white mb-2`} expand='md'>
    <Navbar.Brand href='/' as={Link}>
      <img src='/static/logo.png' alt='Header logo' className='header-logo pointer' width={150} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' className={classes.navbarToggle} />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Link className={classes.navLink} href='/' as={Link}>Home</Nav.Link>
        <Nav.Link className={classes.navLink} href='/services' as={Link}>Services</Nav.Link>
        <Nav.Link className={classes.navLink} href='/portfolio' as={Link}>Portfolio</Nav.Link>
        <Nav.Link className={classes.navLink} href='/team' as={Link}>Team</Nav.Link>
        <Nav.Link className={classes.navLink} href='/contact' as={Link}>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
