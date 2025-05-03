import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import Header from './layouts/Header/Header';
import SideNav from './layouts/SideNav/SideNav';
import Home from './pages/Home/Home';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import { PageTitleProvider } from './context/PageTitleContext';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageTitleProvider>
        <Router>
          <div className="app">
            <Header />
            <SideNav />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      </PageTitleProvider>
    </ThemeProvider>
  );
}

export default App;
