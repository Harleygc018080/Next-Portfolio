import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-blue-50">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">Tools I currently use</h1>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        <div className="tool">
          <FontAwesomeIcon icon={faHtml5} className="text-red-500 text-6xl mx-auto" />
          <p className="mt-2 font-medium">HTML5</p>
        </div>
        <div className="tool">
          <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-6xl mx-auto" />
          <p className="mt-2 font-medium">CSS3</p>
        </div>
        <div className="tool">
          <FontAwesomeIcon icon={faJs} className="text-yellow-400 text-6xl mx-auto" />
          <p className="mt-2 font-medium">JavaScript</p>
        </div>
        <div className="tool">
          <FontAwesomeIcon icon={faDatabase} className="text-green-600 text-6xl mx-auto" />
          <p className="mt-2 font-medium">MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
