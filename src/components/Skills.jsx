import './Skills.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaFigma, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
// This standard import now works because we are using a stable version.
import { SiVite, SiTypescript, SiPowerbi, SiDjango, SiTableau, SiMongodb } from "react-icons/si";

const skillsData = [
  // Frontend
  { name: 'React.js', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3 & Grid', icon: <FaCss3Alt /> },
  { name: 'Vite', icon: <SiVite /> },
  // Backend
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Django', icon: <SiDjango /> },
  // Database
  { name: 'MongoDB', icon: <SiMongodb /> },
  // Tools & DevOps
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  // Data Viz
  { name: 'Power BI', icon: <SiPowerbi /> },
  { name: 'Tableau', icon: <SiTableau /> },
];

const Skills = () => {
  const [titleRef, isTitleVisible] = useScrollFadeIn();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 ref={titleRef} className={isTitleVisible ? 'is-visible' : ''}>Core Competencies.</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index }) => {
  const [ref, isVisible] = useScrollFadeIn();
  const transitionDelay = `${index * 100}ms`;

  return (
    <div 
      className={`skill-card ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
      style={{ transitionDelay }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-name">{skill.name}</h3>
    </div>
  );
};

export default Skills;