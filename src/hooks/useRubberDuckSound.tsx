// import { useRef } from 'react';

// const useRubberDuckSound = () => {
//   const audioRef = useRef<HTMLAudioElement>(new Audio('./rubberDuck.mp3'));
//   const playSound = () => {
//     audioRef.current.currentTime = 0;
//     audioRef.current.play();
//     audioRef.current.volume = 0.4;
//   };

//   return playSound;
// };

// export default useRubberDuckSound;

import React, { createContext, useContext, useRef, useState } from 'react';

interface AudioContextProps {
  playRubberDuckSound: () => void;
  isMuted: boolean;
  toggleMute: () => void;
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement>(new Audio('/rubberDuck.mp3'));
  const [isMuted, setIsMuted] = useState(false);

  const playRubberDuckSound = () => {
    if (!isMuted) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      audioRef.current.volume = 0.4;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider value={{ playRubberDuckSound, isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextProps => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
