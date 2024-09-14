import React from 'react';
import Hero from './components/Hero';
import About from './components/About';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Hero />
      <About />
    </ThemeProvider>
    </>
  );
}

export default App;
