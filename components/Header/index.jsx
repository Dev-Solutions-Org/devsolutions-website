import React from 'react'
import { connect } from 'react-redux'

import { selectMessages } from '../../redux/translation/translation.selectors'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from '..'
import classes from '../../styles/components/header.scss'

const Header = ({ messages }) => (
  <Navbar className={`${classes.navbar} bg-white`} expand='md'>
    <Navbar.Brand href='/' as={Link}>
      <img src='/static/logo.png' alt='Header logo' className='header-logo pointer' width={150} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' className={classes.navbarToggle} />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Link className={classes.navLink} href='/' as={Link}>{messages.HOME}</Nav.Link>
        <Nav.Link className={classes.navLink} href='/services' as={Link}>{messages.SERVICES}</Nav.Link>
        <Nav.Link className={classes.navLink} href='/portfolio' as={Link}>{messages.PORTFOLIO}</Nav.Link>
        <Nav.Link className={classes.navLink} href='/team' as={Link}>{messages.TEAM}</Nav.Link>
        <Nav.Link className={classes.navLink} href='/contact' as={Link}>{messages.CONTACT}</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const mapStateToProps = (state) => ({
  messages: selectMessages('HEADER')(state) 
})

export default connect(mapStateToProps)(Header);