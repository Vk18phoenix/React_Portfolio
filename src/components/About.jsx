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
           I see digital craftsmanship as the art of solving complex problems with precision, creativity, and unwavering focus — whether developing full-stack applications or turning raw data into actionable insights with Power BI and Tableau. Equipped with the skills, training, and certifications to execute independently, I approach every challenge with clarity and rigor, delivering solutions that are robust, secure, and scalable. I strategically leverage AI tools to accelerate learning, optimize solutions, and ensure accuracy — always as a complement to my expertise, never a substitute. Every project reflects my analytical reasoning, attention to detail, and relentless commitment to excellence. I immerse myself fully, overcome obstacles with persistence, and continuously refine my craft, creating work that is impactful, reliable, and built to last.
          </p>
        </div>
        <div 
          ref={ref2}
          className={`about-timeline ${isVisible2 ? 'is-visible' : ''}`}
        >
          <h3>Career Milestones</h3>
          <ul>
            <li><span>2024 – 2025:</span> Full-Stack Developer Training</li>
            <li><span>2025:</span> React Development Course</li>
            <li><span>2025:</span> Power BI Certification</li>
            <li><span>2025 – Present:</span> Data Analyst & Cybersecurity Simulations</li>

          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;