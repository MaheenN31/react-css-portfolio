import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Fixed sidebar width to use in calculations
const SIDEBAR_WIDTH = 250;

function App() {
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
    <Box sx={{ display: 'flex' }}>
      {/* Fixed Sidebar */}
      <Sidebar 
        scrollToSection={scrollToSection} 
      />
      
      {/* Main content area */}
      <Box 
        sx={{ 
          flexGrow: 1, 
          ml: `${SIDEBAR_WIDTH}px`,  // Push content right to make room for sidebar
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Navbar still at the top */}
        <Navbar
          scrollToSection={scrollToSection}
        />
        
        {/* Main content sections */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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

        {/* Footer at the bottom */}
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
