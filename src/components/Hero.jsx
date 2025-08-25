import { useState } from 'react';
import './Hero.css';
import profileImage from '../assets/profile.png' ; 

const Hero = ({ onMouseEnter, onMouseLeave }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = -((height / 2 - y) / (height / 2)) * 8; // Max rotation 8 degrees
    const rotateY = ((width / 2 - x) / (width / 2)) * 8; // Max rotation 8 degrees
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background-animation"></div>
      <div className="container hero-container">
        <div className="hero-content" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <h1>VUMMADISINGH KALYAN</h1>
          <p>Full-Stack Developer & Data Analyst</p>
        </div>
        <div 
          className="hero-photo-container"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
          }}
        >
          <img src={profileImage} alt="Vummadisingh Kalyan" className="hero-photo" />
        </div>
      </div>
      <div className="hero-logo">VK</div>
    </section>
  );
};

export default Hero;