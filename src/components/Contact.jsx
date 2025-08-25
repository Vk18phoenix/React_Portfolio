import './Contact.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Contact = ({ onMouseEnter, onMouseLeave, onLinkEnter }) => {
  const [ref, isVisible] = useScrollFadeIn();
  
  return (
    <section className="contact" id="contact" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="container contact-container" ref={ref}>
        <div className={`contact-content ${isVisible ? 'is-visible' : ''}`}>
          <h2>The Invitation.</h2>
          <p>Have a project that requires a seasoned hand and a forward-thinking mind? Let's create something exceptional together.</p>
          <a 
            href="mailto:vkalyan982@gmail.com" 
            className="contact-button"
            onMouseEnter={onLinkEnter}
            onMouseLeave={onMouseLeave}
          >
            initiate.contact()
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;