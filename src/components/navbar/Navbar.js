import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Line, Nav } from "./NavbarStyles";

const Navbar = () => {
  const { pathname } = useLocation();

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
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/" ? "50%" : "0" }}
          />
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/projects" ? "50%" : "0" }}
          />
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0" }}
          />
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
