import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function About() {
  return (
    <Box sx={{ py: 5, backgroundColor: '#fafafa' }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom>
          About Sereno
        </Typography>
        <Typography variant="body1">
          Sereno is dedicated to bringing you the finest classical music in a simple and accessible way. We prioritize your privacy with no tracking, no analytics, and minimal data usage.
        </Typography>
        <Typography variant="body1">
          Our mission is to provide timeless classical music through modern technology, focusing on accessibility, simplicity, and privacy. The app is entirely free and user-friendly, especially for older audiences who appreciate minimalist designs.
        </Typography>
      </Container>
    </Box>
  );
}

export default About;
