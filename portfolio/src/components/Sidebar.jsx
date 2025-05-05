import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ isOpen, toggleSidebar, scrollToSection }) => {
  const handleNavigation = (sectionId) => {
    console.log('Sidebar: Scrolling to section', sectionId);
    scrollToSection(sectionId);
    toggleSidebar(); // Close sidebar after navigation
  };

  const menuItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Education', sectionId: 'education' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Skills', sectionId: 'skills' },
    { label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleSidebar}
      sx={{
        '& .MuiDrawer-paper': {
          width: '250px',
          bgcolor: '#ff6f61',
          color: 'white',
        },
        zIndex: 9998, // Just below navbar
      }}
    >
      <List sx={{ marginTop: '64px' }}>
        <ListItem sx={{ justifyContent: 'flex-end' }}>
          <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </ListItem>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.label}
            onClick={() => handleNavigation(item.sectionId)}
            sx={{
              '&:hover': {
                bgcolor: '#d1423d',
                borderRadius: '5px',
              },
            }}
          >
            <ListItemText 
              primary={item.label} 
              sx={{ textAlign: 'center' }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
