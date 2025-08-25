import './Footer.css';

const Footer = ({ onLinkEnter, onLinkLeave }) => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Vummadisingh Kalyan. All Rights Reserved.
          <br />
          Built with intention and purpose.
        </div>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/vk18phoenix/" onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>LinkedIn</a>
          <a href="https://github.com/Vk18phoenix" onMouseEnter={onLinkEnter} onMouseLeave={onLinkLeave}>GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;