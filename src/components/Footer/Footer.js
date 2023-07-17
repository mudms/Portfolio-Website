import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Styles.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">Connect with me on social media:</p>
        <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faFacebook} />
</a>
<a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faTwitter} />
</a>
<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faLinkedin} />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faInstagram} />
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
