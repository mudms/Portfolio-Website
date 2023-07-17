import React from 'react';
import './Styles.css'
const FloatingNavbar = () => {
  return (
    <span className="floating-navbar">
      <ul className="navbar-list">
        <li className="nav-item"><a href="#Home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#Projects">Projects</a></li>
        <li className="nav-item"><a href="#FreeLance">FreeLance</a></li>
        <li className="nav-item"><a href="#Connect">Connect</a></li>
        {/* Add more list items as needed */}
      </ul>
    </span>
  );
};

export default FloatingNavbar;
