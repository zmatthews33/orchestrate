import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../Assets/Logo";

import "./SideNav.scss";

function SideNavigation({ loggedIn, smallScreen, setNavToggled }) {

  useEffect(() => {
    console.log('small screen', smallScreen)
  }, [smallScreen])

  const NavClass = () => {
    if (smallScreen) {
      return "sideNav smallScreen";
    }

    return "sideNav";
  };

  return (
    <div className={NavClass()}>
      {!smallScreen && (
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
      )}

      {loggedIn ? (
        <ul className="navLinks">
          <li>
            <NavLink exact to="/" onClick={() => setNavToggled(false)}>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={() => setNavToggled(false)}>
              <span>Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/bands" onClick={() => setNavToggled(false)}>
              <span>Bands</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/todos" onClick={() => setNavToggled(false)}>
              <span>Todos</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/venues" onClick={() => setNavToggled(false)}>
              <span>Venues</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" onClick={() => setNavToggled(false)}>
              <span>Contacts</span>
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="navLinks">
          <li>
            <NavLink to="/login"><span>Log In</span></NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SideNavigation;
