import React, { useState } from 'react';
import Confetti from 'react-confetti';

import './Styles.css';

const AboutSection = () => {
  const [confettiActive, setConfettiActive] = useState(false);
  const [photoVisible, setPhotoVisible] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleConfetti = () => {
    setConfettiActive(true);
    setClickCount(prevCount => prevCount + 1);

    if (clickCount >= 10) {
      setPhotoVisible(true);
    }

    setTimeout(() => {
      setConfettiActive(false);
    }, 5000); // Change the duration as desired
  };

  const handlePhotoClose = () => {
    setPhotoVisible(false);
  };

  return (
    <section className="about-section" id='about'>
      <div className="confetti">
        {confettiActive && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
        )}

        <div className="about-content">
          <h2>About <i>Me.</i><span className="about-span ">Yup thats me</span></h2>
          <p>
            A <b>21 year old</b> highly caffeinated and code-driven professional with a wizardry for transforming coffee into code and pizzas into pixel-perfect websites. I craft digital masterpieces that make unicorns jealous, while embarking on epic meme adventures and solving the biggest mystery of all time.
          </p>

          <p>
            Let's collaborate in a dynamic and magical environment, where dreams turn into functioning websites. Together, we'll make the web a better place, one line of quirky code at a time!"
          </p>

          <div className="button">
            <a type="button" onClick={handleConfetti}>
              Click me
            </a>
          </div>
        </div>

        {photoVisible && (
          <div className="photo-overlay">
            <div className="photo-content">
              <img
                src="https://images.unsplash.com/photo-1575795325632-377ca781cf78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80"
                className="photo-image"
              />
              <button className="photo-close" onClick={handlePhotoClose}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
