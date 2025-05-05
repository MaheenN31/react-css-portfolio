import { createTheme } from '@mui/material/styles';

// Refined Dark Theme
const theme = createTheme({
  palette: {
    mode: 'dark', // Keep dark mode
    primary: {
      main: '#ff6f61', // Keep coral as primary accent
    },
    secondary: {
      main: '#f7a399', // A lighter coral/peach for secondary accents if needed
    },
    background: {
      default: '#121212', // Deeper charcoal/near-black background
      paper: '#1e1e1e',   // Slightly lighter background for cards/surfaces
    },
    text: {
      primary: '#e0e0e0', // Light grey for primary text (good contrast)
      secondary: '#b0b0b0', // Dimmer grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    // Ensure other typography settings are consistent
  },
  components: {
    // Optional: Add default component styles for consistency
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(18, 18, 18, 0.8)', // Match background.default with transparency
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.5)' // Slightly stronger shadow
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e', // Explicitly set card background
          border: '1px solid rgba(255, 255, 255, 0.1)', // Subtle border
          borderRadius: '8px', // Slightly more rounded corners
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Consistent rounded corners
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#d1423d', // Slightly darker coral on hover
          },
        },
      },
    },
     MuiChip: {
       styleOverrides: {
         root: {
            // Example: Make chips use theme colors more effectively
            // Adjust based on where chips are used
         }
       }
     }
    // Add other component overrides as needed
  },
});

export default theme;
