import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Links.css';

const Links = () => {
  return (
    <div className="social-links">
      <a id="github" href="https://github.com/BJenne87" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={30} />
      </a>
      <a id="email" href="mailto:stevenbjenne@gmail.com" aria-label="Email">
        <FaEnvelope size={30} />
      </a>
      <a id="linkedin" href="https://linkedin.com/in/stevenjenne" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default Links;
