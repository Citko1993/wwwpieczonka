'use client';

import dynamic from 'next/dynamic';

// Dynamiczny import komponentów bez SSR
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const Overview = dynamic(() => import('../components/Overview'));
const About = dynamic(() => import('../components/About'));
const Books = dynamic(() => import('../components/Books'));
const Media = dynamic(() => import('../components/Media'));
const Contact = dynamic(() => import('../components/Contact'));

// Przypisujemy AudioContext tylko po stronie klienta
const AudioProvider = dynamic(() => import('../components/AudioContext').then(mod => mod.AudioProvider), { ssr: false });

export default function Home() {
  return (
    <AudioProvider>
      <Hero />
      <Overview />
      <About />
      <Books />
      <Media />
      <Contact />
    </AudioProvider>
  );
} 