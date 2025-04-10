'use client';

// Nowa, uproszczona wersja AudioContext, która nigdy nie zostanie zaimportowana przez serwer
export function useAudio() {
  // Zwracamy pusty obiekt z pustą funkcją playSound, aby uniknąć błędów
  return {
    playSound: () => {},
    playing: false,
    showImage: false
  };
}

export function AudioProvider({ children }) {
  // Zwracamy tylko dzieci bez żadnej funkcjonalności audio
  return <>{children}</>;
} 