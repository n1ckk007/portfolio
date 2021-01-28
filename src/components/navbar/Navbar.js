import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <NavLink to="/" id="logo">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">About us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
