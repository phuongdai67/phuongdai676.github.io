import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'
export default function Navigation() {
  return (
    <Navbar className='menu'
      alignLinks="right"
      brand={<Link to="/"><span style={{ fontFamily: 'Century Gothic', fontWeight: 'bold' }}>Big Movie</span></Link>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <Link to='/'><Icon left>gite</Icon>Home</Link>
      <Link to='/news'><Icon left>newspaper</Icon>News</Link>
      <Link to='/about'><Icon left>info</Icon>About</Link>
      <Link to='/contact'><Icon left>call</Icon>Contact</Link>
    </Navbar>
  )
}
