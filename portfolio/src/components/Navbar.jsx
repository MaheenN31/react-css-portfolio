import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = ({ scrollToSection }) => {
  const handleNavigation = (sectionId) => {
    console.log('Navbar: Scrolling to section', sectionId);
    scrollToSection(sectionId);
  };

  return (
    <AppBar 
      id="main-navbar"
      position="fixed" 
      sx={{ 
        bgcolor: 'rgba(18, 18, 18, 0.7)', // More translucent background
        backdropFilter: 'blur(15px)', // Enhanced blur effect
        WebkitBackdropFilter: 'blur(15px)',
        zIndex: 1100,
        top: 0,
        left: '250px', // Start from sidebar edge
        right: 0,
        width: 'calc(100% - 250px)', // Full width minus sidebar
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ width: '100%', px: 3 }}> {/* Full width toolbar with padding */}
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: '#ff6f61',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'center' // Center the title since we removed the buttons
          }}
          onClick={() => handleNavigation('home')}
        >
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
