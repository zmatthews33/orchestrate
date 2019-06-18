import React from 'react'
import {NavLink} from 'react-router-dom'
import './TopNav.scss'

const TopNavigation = ({ loggedIn, userType }) => (
  <nav className="topNav">
    <h1>Orchestra</h1>
    <div className="navLinks">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/bands">Bands</NavLink>
    </div>
  </nav>
)

export default TopNavigation