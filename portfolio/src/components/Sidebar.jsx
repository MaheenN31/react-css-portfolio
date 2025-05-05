import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ isOpen, toggleSidebar, navigateTo }) => {
  const handleNavigation = (index) => {
    console.log('Sidebar: Clicked to navigate to section', index);
    navigateTo(index);
    toggleSidebar(); // Close sidebar after navigation
  };

  const menuItems = [
    { label: 'Home', index: 1 },
    { label: 'Education', index: 2 },
    { label: 'Projects', index: 3 },
    { label: 'Skills', index: 4 },
    { label: 'Contact', index: 5 }
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
            onClick={() => handleNavigation(item.index)}
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
