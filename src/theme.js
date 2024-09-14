import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', 
    },
    secondary: {
      main: '#283655', 
    },
  },
  typography: {
    fontFamily: '"Roboto", "Playfair Display", serif',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '100% !important', 
          padding: '0 16px', 
          margin: '0 auto',
        },
      },
    },
  },
});

export default theme;
