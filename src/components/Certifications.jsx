import './Certifications.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import { HiBadgeCheck } from 'react-icons/hi';

const certsData = [
  { name: 'Certified React.js Developer', issuer: '10000 Coders', year: '2025' },
  { name: 'Data Analyst Simulation', issuer: 'Deloitte', year: '2025' },
  { name: 'Power BI', issuer: 'Power BI Plus', year: '2025' },
];

const Certifications = () => {
  const [titleRef, isTitleVisible] = useScrollFadeIn();

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <h2 ref={titleRef} className={isTitleVisible ? 'is-visible' : ''}>Credentials & Certifications.</h2>
        <div className="certs-list">
          {certsData.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertCard = ({ cert, index }) => {
    const [ref, isVisible] = useScrollFadeIn();
    const transitionDelay = `${index * 150}ms`;

    return (
        <div 
            className={`cert-card ${isVisible ? 'is-visible' : ''}`}
            ref={ref}
            style={{ transitionDelay }}
        >
            <div className="cert-icon"><HiBadgeCheck/></div>
            <div className="cert-details">
                <h3>{cert.name}</h3>
                <p>{cert.issuer} - {cert.year}</p>
            </div>
        </div>
    )
}

export default Certifications;