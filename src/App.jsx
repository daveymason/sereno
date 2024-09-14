import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import MusicPlayer from './components/MusicPlayer';


import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Hero />
      <About />
      <MusicPlayer />
    </ThemeProvider>
    </>
  );
}

export default App;
