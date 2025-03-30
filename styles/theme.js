// Light mode and dark mode themes with custom color palette

// Light mode palette:
// Primary: #4B0082 (Indigo)
// Secondary: #FFD700 (Gold)
// Background: #F8F9FA (Soft White)
// Text: #2C2C2C (Dark Charcoal)
// Accent: #0056B3 (Royal Blue)

// Dark mode palette:
// Primary: #9370DB (Medium Purple)
// Secondary: #FFD700 (Gold)
// Background: #121212 (Deep Black)
// Text: #EAEAEA (Soft White)
// Accent: #1E90FF (Bright Blue)

export const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#4B0082', // Indigo
      light: '#6F2DA8',
      dark: '#35005E',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700', // Gold
      light: '#FFEB3B',
      dark: '#FFC400',
      contrastText: '#000000',
    },
    background: {
      default: '#F8F9FA', // Soft White
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C', // Dark Charcoal
      secondary: '#4A4A4A',
    },
    accent: {
      main: '#0056B3', // Royal Blue
      light: '#0277BD',
      dark: '#003C7E',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.07)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #4B0082 0%, #6F2DA8 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FFD700 0%, #FFEB3B 100%)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#F8F9FA',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C7C7C7',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#A3A3A3',
          },
        },
      },
    },
  },
};

export const darkTheme = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#9370DB', // Medium Purple
      light: '#B39DDB',
      dark: '#7854B1',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFD700', // Gold
      light: '#FFEB3B',
      dark: '#FFC400',
      contrastText: '#000000',
    },
    background: {
      default: '#121212', // Deep Black
      paper: '#1E1E1E',
    },
    text: {
      primary: '#EAEAEA', // Soft White
      secondary: '#B3B3B3',
    },
    accent: {
      main: '#1E90FF', // Bright Blue
      light: '#4DABFF',
      dark: '#0069C0',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 16px',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #9370DB 0%, #B39DDB 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #FFD700 0%, #FFEB3B 100%)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1E1E1E',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#444444',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555555',
          },
        },
      },
    },
  },
};
