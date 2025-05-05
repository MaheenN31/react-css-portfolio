import { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function for smooth scrolling
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const navbarHeight = 64; 
      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
      console.log(`Scrolling to ${sectionId} at position ${sectionTop}`);
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }
  };

  return (
    <Box>
      <Navbar
        toggleSidebar={toggleSidebar}
        scrollToSection={scrollToSection}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        scrollToSection={scrollToSection}
      />
      
      <div id="home">
        <Home scrollToSection={scrollToSection} />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Box>
  );
}

export default App;
