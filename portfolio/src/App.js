import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './layouts/Header';
import SideNav from './layouts/SideNav';
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { PageTitleProvider } from './context/PageTitleContext';

function App() {
  return (
    <PageTitleProvider>
      <Box sx={{ display: 'flex' }}>
        <Header />
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </PageTitleProvider>
  );
}

export default App;
