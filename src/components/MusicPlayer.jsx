import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MusicPlayer = () => {
  const [currentTrack] = useState({
    title: "Beethoven - Symphony No. 5",
    composer: "Ludwig van Beethoven",
    audioUrl: "https://ks.imslp.net/files/imglnks/usimg/4/4d/IMSLP515234-PMLP01495-Beethoven_Symphony_5_mvt1_pno_reduction.mp3" // Public domain file hosted by IMSLP
  });

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{currentTrack.title}</h2>
      <p>by {currentTrack.composer}</p>
      <audio controls src={currentTrack.audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;
