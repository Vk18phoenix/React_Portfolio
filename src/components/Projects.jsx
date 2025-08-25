import './Projects.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { FaGithub } from 'react-icons/fa'; // Icon for GitHub link
import { FiExternalLink } from 'react-icons/fi'; // Icon for Live link

// Import your images
import projectOneImage from '../assets/Home page .png';
import projectTwoImage from '../assets/Sales_Data.png';
import projectThreeImage from '../assets/Singularity.png';

// Updated data structure with the missing comma now fixed
const projectData = [
  { 
    id: 1, 
    title: "Haven.AI", 
    image: projectOneImage,
    description: "Haven.AI is a full-stack, AI-powered emotional companion designed to create a secure and private space for meaningful conversations. It leverages custom prompt engineering to ensure empathetic, non-judgmental interactions while prioritizing user privacy and safety. The platform offers a genuinely caring and supportive experience through active listening and positive reinforcement.",
    technologies: ['React', 'Firebase', 'Google Gemini API'],
    liveLink: 'https://haven-ai-lopp.vercel.app/', // Replace with your live URL
    githubLink: 'https://github.com/Vk18phoenix/Haven.AI' // Replace with your GitHub URL
  }, // The missing comma is now here
  { 
    id: 2, 
    title: "Sales Data Dashboard", 
    image: projectTwoImage,
    description: "A beginner-friendly Power BI dashboard for a retail company, designed to analyze and visualize sales performance from a sample dataset. The interactive report provides key business insights by tracking sales trends over time, identifying top-performing regions and product categories, and highlighting profitability. I used various visuals like KPI cards, line charts, and slicers to make the data easy to explore and understand.",
    technologies: ['Power BI', 'Power Query', 'Excel (CSV)'],
    liveLink: '#',
    githubLink: 'https://github.com/Vk18phoenix/PowerBI-Sales-Dashboard'
  }, // And here
  { 
    id: 3, 
    title: "Singularity AI", 
    image: projectThreeImage,
    description: "Singularity is a real-time, full-stack task management platform with a stunning, futuristic glassmorphism UI. It is designed for seamless productivity and features live multi-user collaboration, allowing teams to work together efficiently. The app also includes a keyboard-driven command palette and fluid drag-and-drop functionality for an unparalleled user experience.",
    technologies: ['React', 'MongoDB', 'Socket.io'],
    liveLink: 'https://task-management-two-nu-78.vercel.app/',
    githubLink: 'https://github.com/Vk18phoenix/Task-Management'
  },
];

const Projects = ({ onLinkEnter, onLinkLeave }) => {
  const [titleRef, isTitleVisible] = useScrollFadeIn();

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 ref={titleRef} className={isTitleVisible ? 'is-visible' : ''}>The Evidence.</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
              onLinkEnter={onLinkEnter}
              onLinkLeave={onLinkLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Rebuilt Project Card Component
const ProjectCard = ({ project, index, onLinkEnter, onLinkLeave }) => {
  const [ref, isVisible] = useScrollFadeIn();
  const transitionDelay = `${index * 100}ms`;

  return (
    <div 
      className={`project-card ${isVisible ? 'is-visible' : ''}`} 
      ref={ref} 
      style={{ transitionDelay }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        
        <div className="project-tech-stack">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-links">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link" onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
            <FiExternalLink /> Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;