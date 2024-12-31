import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className="nav-links">
          {links.map(({ name, path }, index) => {
            return (
              <li>
                <NavLink to={path}>{name}</NavLink>
              </li>
            );
          })}
        </ul>
        <button className="nav-toggle btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
