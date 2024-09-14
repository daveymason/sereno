import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import SearchIcon from '@mui/icons-material/Search';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{p:5}}>
      <Grid container spacing={4} justifyContent="center">
        {/* Accessibility */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'primary.dark',
              color: 'white',
              minHeight: 150,
            }}
          >
            <AccessibilityNewIcon fontSize="large" />
            <Typography variant="h6" mt={2}>
              Accessibility
            </Typography>
            <Typography variant="body2" mt={1}>
              Easy to navigate, user-friendly for older demographics, and inclusive design.
            </Typography>
          </Box>
        </Grid>

        {/* Privacy-First */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'secondary.dark',
              color: 'white',
              minHeight: 150,
            }}
          >
            <PrivacyTipIcon fontSize="large" />
            <Typography variant="h6" mt={2}>
              Privacy-First
            </Typography>
            <Typography variant="body2" mt={1}>
              No tracking, no data collection, and minimal permissions required.
            </Typography>
          </Box>
        </Grid>

        {/* Minimalist Design */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'info.dark',
              color: 'white',
              minHeight: 150,
            }}
          >
            <ViewQuiltIcon fontSize="large" />
            <Typography variant="h6" mt={2}>
              Minimalist Design
            </Typography>
            <Typography variant="body2" mt={1}>
              Focus on music, no unnecessary features, or visual clutter.
            </Typography>
          </Box>
        </Grid>

        {/* Simplicity */}
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: 'success.dark',
              color: 'white',
              minHeight: 150,
            }}
          >
            <SearchIcon fontSize="large" />
            <Typography variant="h6" mt={2}>
              Simplicity
            </Typography>
            <Typography variant="body2" mt={1}>
              Easy search, browse, and play functions for all users.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
