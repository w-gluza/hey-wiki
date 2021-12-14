import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/wiki-logo.svg';

const Navigation = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img src={logo} alt="hey wiki" />
    </div>
    <ul className="nav-list">
      <li className="item">
        <Link to="/">Home</Link>
      </li>
      <li className="item">
        <Link to="/about">About</Link>
      </li>
      <li className="item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
