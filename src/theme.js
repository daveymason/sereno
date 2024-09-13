import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D4AF37', // Gold color as the primary
    },
    // Optionally, you can also define secondary and other colors here
    secondary: {
      main: '#283655', // Deep muted navy (optional)
    },
  },
  typography: {
    // Optionally customize typography here for a classic look
    fontFamily: '"Roboto", "Playfair Display", serif',
  },
});

export default theme;
