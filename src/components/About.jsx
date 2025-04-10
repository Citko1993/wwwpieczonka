'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !imageRef.current || !textRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Animacja dla zdjęcia
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animacja dla paragrafów - zmodyfikowana, aby zachować pełną widoczność
    const paragraphs = textRef.current.querySelectorAll('p, h3, h4');
    
    gsap.fromTo(
      paragraphs,
      { 
        opacity: 0, 
        y: 20 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <section id="about" className="section bg-black-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Człowiek z Wewnątrz</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div ref={imageRef} className="relative mb-8 md:mb-0">
            <div className="relative w-full aspect-[3/4] overflow-hidden border-2 border-light-gray">
              <div className="absolute inset-0 bg-black-bg/30 z-10" />
              <Image
                src="/images/jaroslaw-pieczonka-ps-majami.png"
                alt="Jarosław Miami Pieczonka"
                fill
                className="object-cover grayscale contrast-125"
                style={{ filter: 'grayscale(0.7) contrast(1.2)' }}
                unoptimized={process.env.NODE_ENV === 'development'}
                priority
              />
            </div>
            
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              right: '-20px', 
              transform: 'rotate(-12deg)',
              zIndex: 30
            }} className="stamp">
              TAJNE
            </div>
            
            <div className="absolute top-4 -left-4 bg-red-accent py-2 px-4">
              <span className="font-oswald uppercase tracking-wider text-sm">Kryptonim: Miami</span>
            </div>
          </div>
          
          <div ref={textRef} className="text-white font-medium text-base md:text-lg">
            <h3 className="text-3xl font-oswald text-white mb-6 drop-shadow-md">
              <span className="text-red-accent">20 lat</span> w służbie państwa
            </h3>
            
            <p className="mb-4 text-white font-medium drop-shadow-sm opacity-100 leading-relaxed">
              Byłem funkcjonariuszem CBŚP, który przez lata infiltrował polskie środowisko przestępcze. 
              Działając pod przykrywką, docierałem do najbardziej hermetycznych grup przestępczych, 
              narażając własne życie, by zdobyć informacje o ich działalności.
            </p>
            
            <h4 className="text-xl font-oswald text-red-accent mb-3 mt-8 drop-shadow-md">Teren: Zorganizowana</h4>
            <p className="mb-4 text-white font-medium drop-shadow-sm opacity-100 leading-relaxed">
              Przez ponad dekadę działałem w terenie, zdobywając zaufanie członków grup przestępczych. 
              Byłem świadkiem operacji narkotykowych, handlu bronią i wymuszeń. Wszystko to, by zebrać 
              dowody, które pozwoliły rozbić najniebezpieczniejsze organizacje w Polsce.
            </p>
            
            <h4 className="text-xl font-oswald text-red-accent mb-3 mt-8 drop-shadow-md">Kryptonim: Miami</h4>
            <p className="mb-4 text-white font-medium drop-shadow-sm opacity-100 leading-relaxed">
              Pseudonim "Miami" przylgnął do mnie podczas operacji wymierzonych w grupy przestępcze 
              zajmujące się przemytem narkotyków. Z czasem stał się moją drugą tożsamością, znaną 
              zarówno w półświatku, jak i w kręgach służb specjalnych.
            </p>
            
            <h4 className="text-xl font-oswald text-red-accent mb-3 mt-8 drop-shadow-md">Z Ulicy na Papier</h4>
            <p className="mb-4 text-white font-medium drop-shadow-sm opacity-100 leading-relaxed">
              Po zakończeniu służby postanowiłem opisać swoje doświadczenia. Moje książki to 
              autentyczny obraz polskiego świata przestępczego, bez upiększeń i cenzury. 
              To historie, które musiały zostać opowiedziane, by odsłonić prawdę o mechanizmach 
              działania zarówno grup przestępczych, jak i służb powołanych do ich zwalczania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 