'use client';

import dynamic from 'next/dynamic';

// Dynamiczny import komponentów bez SSR
const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const Overview = dynamic(() => import('../components/Overview'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Books = dynamic(() => import('../components/Books'), { ssr: false });
const Media = dynamic(() => import('../components/Media'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
      <Books />
      <Media />
      <Contact />
    </>
  );
} 