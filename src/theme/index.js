import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { typography } from './typography';

// Create a theme instance with consistent styling

// Create a theme instance with consistent styling
const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
          padding: '10px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          overflow: 'hidden',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: palette.text.primary,
        },
      },
    },
  },
});

export default theme;