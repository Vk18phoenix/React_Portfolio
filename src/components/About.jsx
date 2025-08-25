import './About.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const About = ({ onMouseEnter, onMouseLeave }) => {
  const [ref1, isVisible1] = useScrollFadeIn();
  const [ref2, isVisible2] = useScrollFadeIn();

  return (
    <section className="about" id="about" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="container about-container">
        <div 
          ref={ref1} 
          className={`about-manifesto ${isVisible1 ? 'is-visible' : ''}`}
        >
          <h2>The Manifesto.</h2>
          <p>
            Digital craftsmanship is about applying diverse skills to solve real-world problems. With hands-on experience in full-stack development, I've built projects that combine powerful front-end interfaces with robust back-end logic. My foundational knowledge from completing data analysis and cybersecurity simulations, along with certifications in Power BI and React, allows me to approach every project with a comprehensive understanding of both technical and security considerations. Every line of code I write is a deliberate step toward creating applications that are not just functional but secure and scalable.
          </p>
        </div>
        <div 
          ref={ref2}
          className={`about-timeline ${isVisible2 ? 'is-visible' : ''}`}
        >
          <h3>Career Milestones</h3>
          <ul>
            <li><span>2024-Present</span>  React Developer & Data Analysis</li>
            <li><span>2024-2025</span> Full-Stack Developer Certification from 10000 Coders</li>
            <li><span>2025-Present</span> Data Analyst Simulation from Deloitte & Cyber Security from Tata</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;