import React from 'react';
import logo from '../../assets/wiki-logo.svg';

const Navigation = () => (
  <div className="nav-container">
    <div className="logo-container">
      <img src={logo} alt="hey wiki" />
    </div>
    <ul className="nav-list">
      <li className="item">
        <a href="#">Home</a>
      </li>
      <li className="item">
        <a href="#">About</a>
      </li>
      <li className="item">
        <a href="#">Tutorials</a>
      </li>
    </ul>
  </div>
);

export default Navigation;
