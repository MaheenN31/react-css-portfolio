import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff6f61',
    },
    secondary: {
      main: '#d1423d',
    },
    background: {
      default: '#1e1e1e',
      paper: '#2a2a2a',
    },
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#ff6f61',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '12px 24px',
          transition: 'transform 0.3s, background-color 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
});

export default theme;
