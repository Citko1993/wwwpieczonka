'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import { useAudio } from './AudioContext';

export default function Hero() {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const { playSound } = useAudio();
  
  // Śledzenie pozycji myszy
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Śledzenie pozycji przewijania
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Efekt 3D na podstawie pozycji myszy - zastosowany do tła
  useEffect(() => {
    if (backgroundRef.current) {
      // Maksymalny kąt przechylenia i przesunięcia - zmniejszone o 70%
      const maxTilt = 1.5; // zredukowane z 5
      const maxShiftX = 4.5; // zmniejszone z 15 (15 * 0.3)
      const maxShiftY = 4.5; // zmniejszone z 15 (15 * 0.3)
      
      // Przesunięcie tła w zależności od pozycji myszy
      const shiftX = mousePosition.x * maxShiftX;
      const shiftY = mousePosition.y * maxShiftY;
      
      gsap.to(backgroundRef.current, {
        x: shiftX,
        y: shiftY,
        rotateX: mousePosition.y * -maxTilt,
        rotateY: mousePosition.x * maxTilt,
        transformPerspective: 1000,
        transformOrigin: 'center center',
        duration: 0.8,
        ease: "power2.out"
      });
    }
  }, [mousePosition]);
  
  // Efekt paralaksy przy przewijaniu
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.to(backgroundRef.current, {
        scale: 1.03, // zmniejszony efekt skali przy przewijaniu (było 1.1)
        duration: 0.5,
        scrollTrigger: {
          trigger: backgroundRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  // Animacja wejścia tytułu przy załadowaniu strony
  useEffect(() => {
    if (titleRef.current) {
      const titleElements = titleRef.current.querySelectorAll('h1, h2, p');
      
      gsap.fromTo(
        titleElements, 
        { 
          opacity: 0, 
          y: 50 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 1, 
          ease: "power3.out" 
        }
      );
    }
  }, []);

  // Zmniejszone o 70% maksymalne przesunięcie tła
  const maxShiftX = 4.5; // zmniejszone z 15 (15 * 0.3)
  const maxShiftY = 4.5; // zmniejszone z 15 (15 * 0.3)
  
  // Obliczenia przesunięcia na podstawie pozycji myszy
  const shiftX = mousePosition.x * maxShiftX;
  const shiftY = mousePosition.y * maxShiftY;
  
  // Scroll dla paralaksy
  const parallaxY = scrollPosition * 0.3 * 0.3; // zmniejszone o 70%

  const handleButtonClick = (e, target) => {
    e.preventDefault();
    
    // Odtwórz dźwięk po kliknięciu
    playSound();
    
    // Opóźnij przewijanie do sekcji, aby dać czas na wyświetlenie zdjęcia
    setTimeout(() => {
      const targetId = target.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);
  };

  const scrollDown = () => {
    playSound();
    
    setTimeout(() => {
      const overviewSection = document.getElementById('overview');
      if (overviewSection) {
        overviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1000);
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center" ref={containerRef}>
      {/* Tło z efektem 3D */}
      <div className="absolute inset-0 z-0 overflow-hidden perspective-1000">
        {/* Tło desktopowe */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 bg-black w-[calc(100%+15px)] h-[calc(100%+15px)] -left-[7px] -top-[7px] hidden md:block"
          style={{ 
            backgroundImage: "url('/images/upscaled-2x-le.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.8) contrast(1.2)',
            transformStyle: 'preserve-3d'
          }}
        />
        
        {/* Tło mobilne */}
        <div 
          className="absolute inset-0 bg-black block md:hidden"
          style={{ 
            backgroundImage: "url('https://jaroslaw-pieczonka.b-cdn.net/mobile-hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(0.8) contrast(1.2)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>
      
      {/* Treść */}
      <div className="container-custom relative z-10 pt-20">
        <div
          ref={titleRef}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-oswald uppercase mb-3">
            Bez Cenzury
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-oswald uppercase mb-3">
            Prosto z Ulicy
          </h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-oswald font-bold mb-6">
            Jarosław <span className="text-red-accent">"Miami"</span> Pieczonka
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Były "przykrywkowy" CBŚP. Teraz autor. Poznaj brudną prawdę o grze z gangsterami – bez owijania w bawełnę.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="#books" 
                onClick={(e) => handleButtonClick(e, '#books')}
                className="btn btn-primary"
              >
                Poznaj Akta
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link 
                href="#about"
                onClick={(e) => handleButtonClick(e, '#about')}
                className="btn btn-outline"
              >
                Wejdź do Środka
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wskaźnik przewijania */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer flex flex-col items-center"
        onClick={scrollDown}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex justify-center"
        >
          <FaChevronDown className="text-2xl text-red-accent" />
        </motion.div>
        <span className="text-sm uppercase tracking-widest mt-2 block font-oswald text-center">Przewiń w dół</span>
      </motion.div>
    </section>
  );
}
