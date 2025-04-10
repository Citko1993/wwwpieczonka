'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPlayCircle, FaHeadphones, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function Media() {
  const [activeTab, setActiveTab] = useState('tv');
  
  const tabs = {
    tv: {
      icon: <FaPlayCircle />,
      title: 'TV / Wideo',
      items: [
        { 
          title: 'Wywiad w programie "Na Tropie"', 
          source: 'TVN24', 
          date: '12.05.2023', 
          link: '#', 
          videoId: 'dQw4w9WgXcQ',
          thumbnail: '/images/tv-thumb-1.jpg'
        },
        { 
          title: 'Kulisy pracy agenta CBŚP', 
          source: 'Polsat News', 
          date: '03.11.2022', 
          link: '#',
          videoId: 'dQw4w9WgXcQ',
          thumbnail: '/images/tv-thumb-2.jpg'
        },
        { 
          title: 'Jak infiltrowałem mafię', 
          source: 'TVP Info', 
          date: '22.09.2022', 
          link: '#',
          videoId: 'dQw4w9WgXcQ',
          thumbnail: '/images/tv-thumb-3.jpg'
        },
      ],
    },
    podcasts: {
      icon: <FaHeadphones />,
      title: 'Podcasty / Radio',
      items: [
        { 
          title: 'Agent Miami opowiada o swoich misjach', 
          source: 'Podcast Kryminalny', 
          date: '15.04.2023', 
          link: '#',
          thumbnail: '/images/podcast-thumb-1.jpg'
        },
        { 
          title: 'Wywiad w Trójce - "Zbrodnia i Kara"', 
          source: 'Polskie Radio', 
          date: '02.02.2023', 
          link: '#',
          thumbnail: '/images/podcast-thumb-2.jpg'
        },
        { 
          title: 'Rozmowa o życiu pod przykrywką', 
          source: 'Radio ZET', 
          date: '11.12.2022', 
          link: '#',
          thumbnail: '/images/podcast-thumb-3.jpg'
        },
      ],
    },
    press: {
      icon: <FaFileAlt />,
      title: 'Prasa / Online',
      items: [
        { 
          title: 'Kim naprawdę jest "Miami"? - wywiad rzeka', 
          source: 'Gazeta Wyborcza', 
          date: '18.06.2023', 
          link: '#',
          thumbnail: '/images/press-thumb-1.jpg'
        },
        { 
          title: 'Agent CBŚP ujawnia kulisy swojej pracy', 
          source: 'Newsweek', 
          date: '05.05.2023', 
          link: '#',
          thumbnail: '/images/press-thumb-2.jpg'
        },
        { 
          title: 'Jarosław Pieczonka - od ulicy do bestselleru', 
          source: 'Onet', 
          date: '28.03.2023', 
          link: '#',
          thumbnail: '/images/press-thumb-3.jpg'
        },
      ],
    },
  };

  return (
    <section id="media" className="section bg-black-bg">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Na Językach Miasta</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Wywiady, podcasty i artykuły, w których opowiadam o moich doświadczeniach w walce z przestępczością.
            Sprawdź, gdzie możesz usłyszeć moją historię z pierwszej ręki.
          </p>
        </motion.div>

        {/* Zakładki */}
        <div className="mb-8 border-b border-light-gray">
          <div className="flex flex-wrap gap-2">
            {Object.keys(tabs).map((tabKey) => (
              <button
                key={tabKey}
                className={`flex items-center p-4 font-oswald uppercase tracking-wider text-sm transition-all ${
                  activeTab === tabKey
                    ? 'text-white border-b-2 border-red-accent'
                    : 'text-gray-400 hover:text-red-accent'
                }`}
                onClick={() => setActiveTab(tabKey)}
              >
                <span className="mr-2">{tabs[tabKey].icon}</span>
                {tabs[tabKey].title}
              </button>
            ))}
          </div>
        </div>

        {/* Lista mediów z miniaturami */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {tabs[activeTab].items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-bg p-4 border border-light-gray group hover:border-red-accent transition-colors"
            >
              <div className="flex items-start">
                {/* Dodana miniatura */}
                <div className="w-24 h-24 flex-shrink-0 mr-4 bg-gray-800 overflow-hidden">
                  <img 
                    src={item.thumbnail || `https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `/images/default-${activeTab}.jpg`;
                    }}
                  />
                </div>
                
                <div className="flex-grow flex items-start">
                  <div className="text-red-accent mr-4 mt-1">
                    {tabs[activeTab].icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-oswald mb-1">{item.title}</h3>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-sm text-gray-400">{item.source}</p>
                        {item.date && <p className="text-xs text-gray-500">{item.date}</p>}
                      </div>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-red-accent px-3 py-1 text-xs font-oswald uppercase tracking-wider group-hover:bg-red-hover transition-colors"
                      >
                        {activeTab === 'tv' ? 'Zobacz' : activeTab === 'podcasts' ? 'Posłuchaj' : 'Przeczytaj'}
                        <FaExternalLinkAlt className="ml-2 text-xs" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 