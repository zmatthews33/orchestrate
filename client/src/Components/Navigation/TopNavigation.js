import React from "react";
import { NavLink } from "react-router-dom";
import "./TopNav.scss";

const TopNavigation = ({loggedIn}) => {
  return (
    <nav className="topNav">
      {loggedIn ? (
        <div className="navLinks">
          <NavLink to="/login">Log Out</NavLink>
        </div>
      ) : (
        <div className="navLinks">
          <NavLink to="/login">Log In</NavLink>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
