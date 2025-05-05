import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleSidebar, scrollToSection }) => {
  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  const handleNavigation = (sectionId) => {
    console.log('Navbar: Scrolling to section', sectionId);
    scrollToSection(sectionId);
  };

  return (
    <AppBar 
      id="main-navbar"
      position="fixed" 
      sx={{ 
        bgcolor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999,
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleSidebar}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              color: '#ff6f61',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
            onClick={() => handleNavigation('home')}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavigation(item.sectionId)}
                sx={{
                  color: 'white',
                  mx: 1,
                  '&:hover': { 
                    color: '#ff6f61',
                    backgroundColor: 'rgba(255, 111, 97, 0.1)'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
