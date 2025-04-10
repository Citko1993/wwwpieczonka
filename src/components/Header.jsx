'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAudio } from './AudioContext';

const navLinks = [
  { name: 'Start', href: '#hero' },
  { name: 'Przykrywka', href: '#about' },
  { name: 'Akta', href: '#books' },
  { name: 'Na Językach', href: '#media' },
  { name: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { playSound } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // Odtwórz dźwięk
    playSound();
    
    // Opóźnij przewijanie
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Standardowe przewijanie
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      
      setIsMenuOpen(false);
    }, 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black-bg/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="no-underline">
          <h1 className="text-2xl md:text-3xl font-oswald font-bold text-white">
            Jarosław <span className="text-red-accent">"Miami"</span> Pieczonka
          </h1>
        </Link>

        {/* Menu mobilne */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
            aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu desktopowe */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white hover:text-red-accent transition-colors no-underline font-oswald uppercase tracking-wider text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu mobilne rozwijane */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          className="absolute top-full left-0 w-full bg-black-bg/95 md:hidden overflow-hidden"
        >
          <nav className="container-custom py-6">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white hover:text-red-accent transition-colors no-underline block font-oswald uppercase tracking-wider text-lg"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
} 