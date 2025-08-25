import { useState } from 'react';
import './Hero.css';
// The imports are the same, we just change where they are used
import profileImage from '../assets/profile.png'; 
import ghibliImage from '../assets/profile1.jpg';

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  // State for the hover text and the flip
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Click handler to toggle the flip
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background-animation"></div>
      <div className="container hero-container">
        <div className="hero-content" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <h1>VUMMADISINGH KALYAN</h1>
          <p>Aspiring Full-Stack Engineer & Data Analyst</p>
        </div>
        
        <div 
          className="hero-photo-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
            {/* --- THIS IS THE ONLY PART THAT CHANGED --- */}
            <div className="card-face card-front">
              {/* The FRONT of the card is now your main profile picture */}
              <img src={profileImage} alt="Vummadisingh Kalyan" className="hero-photo" />
            </div>
            <div className="card-face card-back">
              {/* The BACK of the card is now the Ghibli art */}
              <img src={ghibliImage} alt="Ghibli-style artwork" className="hero-photo" />
            </div>
            {/* --- END OF CHANGE --- */}
          </div>
          <div className={`tap-me-text ${isHovered && !isFlipped ? 'is-visible' : ''}`}>
            Tap Me
          </div>
        </div>
      </div>
      <div className="hero-logo">VK</div>
    </section>
  );
};

export default Hero;