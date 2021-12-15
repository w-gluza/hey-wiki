import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/wiki-logo.svg';

const Navigation = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img src={logo} alt="hey wiki" />
    </div>
    <ul className="nav-list">
      <li className="item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-inactive"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-inactive"
          }
        >
          About
        </NavLink>
      </li>
      <li className="item">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-active" : "nav-inactive"
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Navigation;
