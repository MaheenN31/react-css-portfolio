import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ toggleSidebar, navigateTo }) => {
  const navItems = [
    { label: 'Home', index: 1 },
    { label: 'Education', index: 2 },
    { label: 'Projects', index: 3 },
    { label: 'Skills', index: 4 },
    { label: 'Contact', index: 5 }
  ];

  const handleNavigation = (index) => {
    console.log('Navbar: Clicked to navigate to section', index);
    navigateTo(index);
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
            onClick={() => handleNavigation(1)}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavigation(item.index)}
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
