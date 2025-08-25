import './Experience.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

// Mock data for work experience - REPLACE WITH YOUR OWN
const experienceData = [
  {
    title: 'Advisor',
    company: '247.ai',
    dates: '2023 - 2024',
    description: 'Provided international non-voice customer support for a U.S. e-commerce client. Consistently maintained a Quality Assurance (QA) and Customer Satisfaction (CSA) score above 90%, and received a client appreciation for exceptional performance.',
    skills: ['Customer Support', 'Quality Assurance', 'E-commerce', 'Communication', 'Problem-Solving', 'Stress Management']
  },
  {
    title: 'Process Executive',
    company: 'Randstad India Pvt Ltd',
    dates: '2022- 2022',
    description: 'Provided specialized data annotation services for a Lidar-based project, accurately marking vehicles based on point cloud data. Ensured high-quality and precise labeling to support the development of autonomous vehicle technology.',
    skills: ['Data Annotation', 'Lidar Technology', 'Data Processing', 'Quality Assurance', 'Time Managament']
  },
  {
    title: 'Frontend Support Intern',
    company: '10000 Coders',
    dates: '2024 - 2025',
    description: 'Provided dedicated technical support and mentorship to students, facilitating their learning journey in frontend development. Conducted daily Google Meet sessions and offline classes using a projector to clarify complex doubts related to tasks and projects. Verified student work, provided constructive feedback, and conducted mock interviews to prepare them for professional roles.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Git & GitHub', 'React.js']
  }
];

const Experience = () => {
  const [titleRef, isTitleVisible] = useScrollFadeIn();

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 ref={titleRef} className={isTitleVisible ? 'is-visible' : ''}>Career Trajectory.</h2>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ job, index }) => {
    const [ref, isVisible] = useScrollFadeIn();
    const transitionDelay = `${index * 150}ms`;

    return (
        <div 
            className={`timeline-item ${isVisible ? 'is-visible' : ''}`}
            ref={ref}
            style={{ transitionDelay }}
        >
            <div className="timeline-content">
                <h3>{job.title}</h3>
                <span className="company-info">{job.company} | {job.dates}</span>
                <p>{job.description}</p>
                <div className="skills-tags">
                    {job.skills.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Experience;