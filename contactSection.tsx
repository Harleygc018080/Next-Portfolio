import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-4">Let's collaborate...</h1>
      <p className="text-center text-lg mb-8 text-gray-600">How do you take your coffee?</p>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <a
          href="https://www.facebook.com/NeverMindHarley/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-5xl hover:scale-110 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/harleycarbonell/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-5xl hover:scale-110 transition" />
        </a>
        <a
          href="https://github.com/Harleygc018080"
          target="_blank"
          rel="noopener noreferrer"
          className="social-media"
        >
          <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-5xl hover:scale-110 transition" />
        </a>
        <a href="mailto:harleycarbonell@example.com" className="social-media">
          <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-5xl hover:scale-110 transition" />
        </a>
        <a href="tel:+639177094346" className="social-media">
          <FontAwesomeIcon icon={faPhone} className="text-green-600 text-5xl hover:scale-110 transition" />
        </a>
      </div>
      <div className="text-center mt-8">
        <a
          href="./CV_Carbonell.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Download My CV
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
