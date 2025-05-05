import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3, // Padding top and bottom
        px: 2,
        mt: 'auto', // Push footer to bottom if content is short
        backgroundColor: 'background.paper', // Use theme's paper color
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        // Apply the animation
        animation: 'fadeInFooter 1s ease-in-out forwards',
        opacity: 0, // Start hidden for animation
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary">
          {'© '}
          {currentYear}
          {' Maheen Nadeem. All rights reserved. '}
        </Typography>
        {/* Optional: Add social links later here */}
      </Container>
    </Box>
  );
};

export default Footer; 