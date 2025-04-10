'use client';

import { createContext, useState, useContext, useEffect } from 'react';

const AudioContext = createContext();

export function useAudio() {
  return useContext(AudioContext);
}

export function AudioProvider({ children }) {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Tworzenie elementu audio tylko po stronie klienta
    if (typeof window !== 'undefined') {
      // Użyjmy istniejących plików multimedialnych
      const audioElement = new Audio('https://cdn.pixabay.com/download/audio/2022/11/18/audio_cfbec8eed5.mp3?filename=click-button-140881.mp3');
      audioElement.preload = 'auto';
      setAudio(audioElement);

      // Nasłuchiwanie zdarzenia zakończenia odtwarzania
      const handleEnded = () => {
        setPlaying(false);
        setTimeout(() => {
          setShowImage(false);
        }, 500);
      };

      audioElement.addEventListener('ended', handleEnded);

      return () => {
        audioElement.removeEventListener('ended', handleEnded);
        audioElement.pause();
      };
    }
  }, []);

  // Funkcja do odtwarzania dźwięku i pokazywania zdjęcia
  const playSound = () => {
    if (!initialized) {
      setInitialized(true);
    }
    
    if (audio && !playing) {
      // Reset audio przed odtworzeniem
      audio.currentTime = 0;
      
      // Rozpocznij odtwarzanie i pokaż zdjęcie natychmiast
      const playPromise = audio.play();
      setPlaying(true);
      setShowImage(true);
      
      // Obsługa błędów odtwarzania (np. brak interakcji użytkownika)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Audio playback failed:', error);
          setPlaying(false);
          setShowImage(false);
        });
      }
    }
  };

  return (
    <AudioContext.Provider value={{ playSound, playing, showImage }}>
      {children}
      
      {/* Komponent zdjęcia pojawiający się po kliknięciu */}
      {initialized && typeof window !== 'undefined' && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
            showImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
        >
          <div className="relative max-w-3xl max-h-[80vh] overflow-hidden">
            <img 
              src="/images/jaroslaw-pieczonka-ps-majami.png" 
              alt="Broń" 
              className="w-full h-auto"
            />
            <div className="absolute stamp top-4 right-4 rotate-[-12deg] z-10">
              POUFNE
            </div>
          </div>
        </div>
      )}
    </AudioContext.Provider>
  );
} 