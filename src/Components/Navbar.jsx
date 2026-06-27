import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="logo">Rhythm</div>

        <input
          type="text"
          placeholder="Search for restaurant and foods"
          className="search"
        />

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "") }>
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brands"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Brands
            </NavLink>
          </li>



          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button className="book-btn">Book Now</button>
      </nav>
   
  );
};

export default Navbar;
