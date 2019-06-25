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
          <li><NavLink exact to="/"><span>Dashboard</span></NavLink></li>
          <li><NavLink to="/events"><span>Events</span></NavLink></li>
          <li><NavLink to="/bands"><span>Bands</span></NavLink></li>
          <li><NavLink to="/todos"><span>Todos</span></NavLink></li>
          <li><NavLink to="/venues"><span>Venues</span></NavLink></li>
          <li><NavLink to="/contacts"><span>Contacts</span></NavLink></li>
          <li><NavLink to="/login"><span>Log Out</span></NavLink></li>
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