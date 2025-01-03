import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="py-4 bg-gray-800 text-center text-white">
      <p>Created by Harley Carbonell &bull; {new Date().getFullYear()}</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="https://github.com/Harleygc018080"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-400 text-2xl hover:text-white transition"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/harleycarbonell/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-gray-400 text-2xl hover:text-white transition"
          />
        </a>
        <a href="mailto:harley.gutierrezcarbonell@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-gray-400 text-2xl hover:text-white transition"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
