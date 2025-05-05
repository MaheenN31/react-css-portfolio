import { Container, Box, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { FullpageContext } from '../App';

const Home = () => {
  const fullpageApi = useContext(FullpageContext);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'url("/images/bg.jpg")',
        backgroundSize: 'cover',
      }}
    >
      {/* Hero Section */}
      <Container>
        <Box
          component="img"
          src="/images/profile.jpg"
          alt="Profile Picture"
          sx={{
            width: '200px',
            border: '5px solid #ff6f61',
            borderRadius: '50%',
            padding: '5px',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'rotate(-10deg) scale(1.1)',
            },
          }}
        />
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: '3rem',
            fontWeight: 500,
            animation: 'fadeIn 1.5s ease-in-out'
          }}
        >
          <Box component="span" sx={{ color: '#d1423d' }}>Hello</Box>, I'm Maheen Nadeem
        </Typography>
        <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 1 }}>
          Creative Developer | Designer | Writer
        </Typography>
        <Button
          onClick={() => fullpageApi?.moveTo(3)}
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: '#ff6f61',
            color: 'white',
            '&:hover': {
              bgcolor: '#d9534f',
              transform: 'scale(1.1)',
            },
          }}
        >
          See Projects
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
