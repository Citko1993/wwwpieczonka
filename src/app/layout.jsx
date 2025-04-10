'use client';

import { Oswald, Roboto, Special_Elite } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AudioProvider } from '../components/AudioContext';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamiczne importowanie SmoothScroll z opcją SSR wyłączoną
const SmoothScroll = dynamic(() => import('../components/SmoothScroll'), { 
  ssr: false 
});

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '500', '700'],
});

const roboto = Roboto({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

const specialElite = Special_Elite({
  weight: ['400'],
  display: 'swap',
  variable: '--font-special-elite',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);

  // Upewnij się, że kod jest uruchamiany tylko po stronie klienta
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="pl" className={`${oswald.variable} ${roboto.variable} ${specialElite.variable}`}>
      <body className="min-h-screen flex flex-col">
        {mounted ? (
          <SmoothScroll>
            <AudioProvider>
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </AudioProvider>
          </SmoothScroll>
        ) : (
          <>
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
} 