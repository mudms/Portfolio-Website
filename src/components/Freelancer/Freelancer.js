import React from 'react';
import './Styles.css';

const FreelancingSection = () => {
  return (
    <section className="freelancing-section" id='FreeLance'>
      <div className="freelancing-container">
        <h2 className="freelancing-title">Freelancer<span className="freelancing-title-qwe">*</span> <div className="freelancing-title-service">Service</div></h2>
        <div className="freelancing-services">
          <div className="freelancing-service">
            <h3 className="service-title">Web Development</h3>
            <p className="service-description">
              We offer professional web development services to create
              stunning, responsive, and user-friendly websites tailored to your
              specific needs.
            </p>
          </div>
          <div className="freelancing-service">
            <h3 className="service-title">UI/UX Design</h3>
            <p className="service-description">
              Our UI/UX design expertise ensures visually appealing and
              intuitive user interfaces that enhance the overall user
              experience and drive engagement.
            </p>
          </div>
          <div className="freelancing-service">
            <h3 className="service-title">E-commerce Solutions</h3>
            <p className="service-description">
              We specialize in developing custom e-commerce solutions that
              empower your business to sell products online, providing seamless
              shopping experiences for your customers.
            </p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default FreelancingSection;
