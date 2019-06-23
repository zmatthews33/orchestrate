import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

import './SideNav.scss'

function SideNavigation({loggedIn, userType}) {

  const [Expanded, setExpanded] = useState(true)

  return (
    <div className={Expanded ? 'sideNav expanded' : 'sideNav'}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      {loggedIn ? (
        <ul className="navLinks">
          <li><NavLink to="/events">Events</NavLink></li>
          <li><NavLink to="/bands">Bands</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
          <li><NavLink to="/venues">Venues</NavLink></li>
          <li><NavLink to="/contacts">Contacts</NavLink></li>
          <li><NavLink to="/login">Log Out</NavLink></li>
        </ul>
      ) : (
        <ul className="navLinks">
          <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
      )}
    </div>
  )
}

export default SideNavigation