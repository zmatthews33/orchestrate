import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

const TopNavigation = ({ loggedIn, userType }) => (
  <nav className="topNav">
    <h1>
      <NavLink to="/">Orchestra</NavLink>
    </h1>
    {loggedIn ? (
      <div className="navLinks">
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/bands">Bands</NavLink>
        <NavLink to="/login">Log Out</NavLink>
      </div>
    ) : (
      <div className="navLinks">
        <NavLink to="/login">Log In</NavLink>
      </div>
    )}
  </nav>
);

export default TopNavigation;
