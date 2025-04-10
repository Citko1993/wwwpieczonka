'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OverviewCard from './OverviewCard';
import { FaFolder, FaMicrophone, FaUserSecret } from 'react-icons/fa';

export default function Overview() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const quoteRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Animacja nagłówka
      gsap.from(headingRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      
      // Animacja kartek - płynniejsze pojawianie się z pełną widocznością
      const cards = cardsRef.current.querySelectorAll('.overview-card');
      gsap.from(cards, {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onComplete: () => {
          // Zapewnienie pełnej widoczności po animacji
          gsap.to(cards, {
            opacity: 1,
            duration: 0.3
          });
        }
      });
      
      // Animacja cytatu - zmieniona, aby była bardziej widoczna
      gsap.fromTo(
        quoteRef.current,
        { 
          scale: 0.95, 
          opacity: 0, 
          y: 15 
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current, // Zmiana triggera na karty
            start: 'bottom 80%', // Rozpocznij animację, gdy dolna część kart jest widoczna
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const cards = [
    {
      icon: <FaUserSecret className="text-4xl text-red-accent" />,
      title: "Moja Przykrywka",
      description: "Poznaj historię mojej pracy pod przykrywką oraz drogę od służby w CBŚP do pisania książek.",
      link: "#about",
      linkText: "Kim jestem",
    },
    {
      icon: <FaFolder className="text-4xl text-red-accent" />,
      title: "Akta Sprawy",
      description: "Moje książki oparte na prawdziwych wydarzeniach z pracy w polskim półświatku przestępczym.",
      link: "#books",
      linkText: "Sprawdź Książki",
    },
    {
      icon: <FaMicrophone className="text-4xl text-red-accent" />,
      title: "Na Językach",
      description: "Wywiady, podcasty i materiały medialne o kulisach pracy pod przykrywką i moich książkach.",
      link: "#media",
      linkText: "Zobacz Media",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <section id="overview" ref={sectionRef} className="section bg-dark-gray">
      <div className="container-custom">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="section-title">Widział. Przeżył. Ujawnił.</h2>
          <p className="text-lg text-white font-medium max-w-2xl mx-auto drop-shadow-sm">
            Jako funkcjonariusz CBŚP działałem w tajemnicy, infiltrując środowiska przestępcze.
            Teraz dzielę się prawdziwymi historiami z pierwszej linii frontu walki z zorganizowaną przestępczością.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <OverviewCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              link={card.link}
              linkText={card.linkText}
              className="bg-black-bg border-2 border-light-gray shadow-lg"
            />
          ))}
        </div>
        
        <div ref={quoteRef} className="mt-8 py-8 px-6 md:px-10 bg-black-bg relative border border-light-gray shadow-lg">
          <div className="absolute -top-5 -left-3 stamp">
            Tajne
          </div>
          <blockquote className="text-xl md:text-2xl font-special italic text-white drop-shadow-md">
            "Kiedy wchodzisz do świata przestępczego, musisz zostawić moralność za drzwiami. Ale gdy z niego wychodzisz, 
            trudno ją znowu przy sobie znaleźć."
            <span className="block mt-4 text-right text-lg">- Jarosław <span className="text-red-accent">"Miami"</span> Pieczonka</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
} 