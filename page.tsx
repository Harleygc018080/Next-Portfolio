import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import ProjectsSection from './components/ProjectSection';
import ToolsSection from './components/toolsSection';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import ContactSection from './components/contactSection';
import Footer from './components/footerSection';

export default function Home() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <ProjectsSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
