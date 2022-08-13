import React, { useState, useEffect } from 'react';

const useAudio = (url = null) => {
  const [audio] = useState(new Audio(null));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    navigator.vibrate([200, 100, 800]);
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url, played }) => {
  const [playing, toggle] = useAudio(url);

  return toggle;
};

export default Player;
