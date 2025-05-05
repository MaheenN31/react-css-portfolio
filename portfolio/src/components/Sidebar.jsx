import { Box, List, ListItem, ListItemText, Paper, useTheme } from '@mui/material';

const Sidebar = ({ scrollToSection }) => {
  const theme = useTheme();
  const accentColor = theme.palette.primary.main;
  
  const handleNavigation = (sectionId) => {
    console.log('Sidebar: Scrolling to section', sectionId);
    scrollToSection(sectionId);
  };

  const menuItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bgcolor: 'rgba(30, 30, 35, 0.5)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        color: 'white',
        borderRight: `1px solid rgba(255, 255, 255, 0.12)`,
        zIndex: 1200,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(45deg, rgba(40, 40, 45, 0.15) 0%, rgba(80, 80, 85, 0.1) 100%)',
          opacity: 0.7,
          zIndex: -1,
        }}
      />
      
      <List sx={{ p: 3, pt: 4, flexGrow: 1, position: 'relative' }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.label}
            onClick={() => handleNavigation(item.sectionId)}
            sx={{
              mb: 2,
              borderRadius: '8px',
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                bgcolor: 'rgba(255, 111, 97, 0.15)',
                color: accentColor,
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ 
                textAlign: 'center',
                '.MuiTypography-root': {
                  fontWeight: 500,
                  fontSize: '1.05rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box 
        sx={{ 
          p: 2, 
          borderTop: '1px solid rgba(255, 255, 255, 0.12)',
          fontSize: '0.75rem', 
          color: 'text.secondary',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        © {new Date().getFullYear()}
      </Box>
    </Paper>
  );
};

export default Sidebar;
