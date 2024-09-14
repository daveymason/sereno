import React from 'react';
import { Box, Typography, Button, createTheme } from '@mui/material';
import bgVideo from '../assets/heroBg.mp4';
import backgroundImage from '../assets/heroBg.png';
import logo from '../assets/logo.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MusicPlayer from './MusicPlayer';
// Importing Google Fonts
const serenofont = {
  fontFamily: '"Playfair Display", serif',
};
const bodyFont = {
  fontFamily: '"Roboto", sans-serif',
};
const customTheme = createTheme({
    palette: {
      primary: {
        main: '#D4AF37',
      },
    },
  });

function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Video or Image Background */}
      {isMobile ? (
        <Box
          component="img"
          src={backgroundImage}
          alt="Background"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', 
          textAlign: 'left', 
          height: '100vh',
          maxWidth: '100vw',
          width: '99vw',
          px: 5, 
          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        }}
      >
        {/* Left Column*/}
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '540px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)', 
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textShadow: '1px 1px 1px rgba(0,0,0,0.2)',
              color: 'black',
              fontFamily: 'Tangerine, cursive',
            }}
          >
           Sereno              
          </Typography>

          <Typography
            variant="h5"
            component="p"
            gutterBottom
            sx={{
              textShadow: '1px 1px 1px rgba(0,0,0,0.9)',
              ...bodyFont,
              color: 'black',
            }}
          >
            Music for the soul.
          </Typography>

          <Typography
            variant="body1"
            component="p"
            mb={4}
            sx={{
              ...bodyFont,
              color: 'black',
            }}
          >
            Providing timeless classical music through modern technology with a focus on accessibility, simplicity, and privacy.
            <MusicPlayer />
          </Typography>

            {/* Right Column */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 4,
            }}
          >

          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
