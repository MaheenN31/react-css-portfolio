import { useState, useRef, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { createContext } from 'react';

// Create a context to share the fullpage API
export const FullpageContext = createContext(null);

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const fullpageApiRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Direct navigation method outside of fullpage context
  const navigateTo = (sectionIndex) => {
    if (fullpageApiRef.current) {
      console.log('Navigating to section:', sectionIndex);
      fullpageApiRef.current.moveTo(sectionIndex);
    } else {
      console.error('Fullpage API not available');
    }
  };

  // Fullpage.js options
  const fullpageOptions = {
    licenseKey: 'YOUR_KEY_HERE',
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    anchors: ['home', 'education', 'projects', 'skills', 'contact'],
    afterLoad: (origin, destination, direction) => {
      console.log('Section loaded:', destination.index + 1);
    },
    // Important: This makes buttons in fixed elements work
    normalScrollElements: '.MuiDrawer-root, #main-navbar',
  };

  return (
    <Box>
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          // Store API in ref when it becomes available
          if (fullpageApi && !fullpageApiRef.current) {
            console.log('Fullpage API initialized');
            fullpageApiRef.current = fullpageApi;
          }

          return (
            <FullpageContext.Provider value={fullpageApi}>
              <Navbar
                toggleSidebar={toggleSidebar}
                navigateTo={navigateTo}
              />
              <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                navigateTo={navigateTo}
              />
              <ReactFullpage.Wrapper>
                <div className="section">
                  <Home />
                </div>
                <div className="section">
                  <Education />
                </div>
                <div className="section">
                  <Projects />
                </div>
                <div className="section">
                  <Skills />
                </div>
                <div className="section">
                  <Contact />
                </div>
              </ReactFullpage.Wrapper>
            </FullpageContext.Provider>
          );
        }}
      />
    </Box>
  );
}

export default App;
