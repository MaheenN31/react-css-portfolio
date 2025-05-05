import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ scrollToSection, isMobile, toggleSidebar }) => {
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
        left: isMobile ? 0 : '250px', // Full width on mobile, offset on desktop
        right: 0,
        width: isMobile ? '100%' : 'calc(100% - 250px)', // Full width on mobile, offset on desktop
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ width: '100%', px: 3 }}> {/* Full width toolbar with padding */}
        {/* Mobile menu button - only visible on mobile */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            color: '#ff6f61',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: isMobile ? 'left' : 'center' // Left align on mobile, center on desktop
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
