import React, { useState, useEffect, useRef } from 'react';
import { Button, Box } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import './MusicPlayer.css'; // Link to the CSS file for animations

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'));

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <Box className={`music-player ${isPlaying ? 'playing' : ''}`}>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        className="play-button"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <PauseCircleOutlineIcon style={{ fontSize: 60 }} /> // Adjust the fontSize here
        ) : (
          <PlayCircleOutlineIcon style={{ fontSize: 60 }} />  // Adjust the fontSize here
        )}
      </Button>
    </Box>
  );
};

export default MusicPlayer;
