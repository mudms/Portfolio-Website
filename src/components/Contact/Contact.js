import React from 'react';
import './Styles.css';

const ContactPage = () => {
  return (
    <div className="contact-page" id='Connect'>
        
      <div className="contact-content">
        <h2 className="contact-title">Contact us</h2>
        <p className="contact-description">
          Have a question or want to discuss a project? I'm here to help! Feel
          free to reach out to me using the contact information provided below
          or by filling out the form on the right.
        </p>
        <div className="contact-details">
          <h3 className="details-title">Contact Information</h3>
          <ul className="details-list">
            <li className="details-item">
              <i className="fas fa-envelope"></i> Email:
              <b>   mudit.mohla.sharma@gmail.com</b>
            </li>
            <li className="details-item">
              <i className="fas fa-phone"></i> Phone: <b> +91 - 87000 45007</b>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="contact-form">
        <h3 className="form-title">Get In Touch</h3>
        <form className="form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
          />
          <textarea
            placeholder="Your Message"
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
