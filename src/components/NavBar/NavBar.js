import React from 'react';
import Logobw from './Resources/Logobw.png'
import './Styles.css'
const Navbar = () => {
    const handleViewResume = () => {
        window.open('https://drive.google.com/file/d/1DiBNODaGWxi9gdUAzNofeLqp1CojLQOJ/view?usp=sharing', '_blank');     
         
      };
      const handleViewFreelancer = () => {
        window.open('https://drive.google.com/file/d/1DiBNODaGWxi9gdUAzNofeLqp1CojLQOJ/view?usp=sharing', '_blank');
        }; 
  return (
    <nav className="navbar" id='Home'>
      <div className="navbar-container">
        <div href="#Home" className="logo"><img src={Logobw} alt="Your Logo" className="logo" /></div>
        <div className="nav-buttons">
            <button className="nav-button" id='b1' onClick={handleViewFreelancer}>Freelancer Brochure</button>
            <button className="nav-button" id='b1' onClick={handleViewResume}>View Resume</button>
          <a href="#Connect" className="nav-button"id='b2'>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
