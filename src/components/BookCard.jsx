'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function BookCard({ title, coverSrc, publisher, releaseDate, description, quote, link, author }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.3)',
      }}
      className="bg-dark-bg border border-light-gray p-6 flex flex-col h-full relative"
    >
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="relative w-full md:w-1/3 aspect-[2/3] rotate-[-3deg] shadow-xl mb-4 md:mb-0 flex-shrink-0">
          <Image
            src={coverSrc}
            alt={title}
            fill
            className="object-cover"
            unoptimized={process.env.NODE_ENV === 'development'}
          />
        </div>
        
        <div className="md:w-2/3">
          <h3 className="text-2xl font-oswald uppercase mb-2">{title}</h3>
          
          <div className="text-sm text-gray-400 mb-4">
            {author && <p className="mb-1">Autor: {author}</p>}
            <p>Wydawnictwo: {publisher}</p>
            <p>Data wydania: {releaseDate}</p>
          </div>
          
          <p className="text-gray-300 mb-4">{description}</p>
          
          {quote && (
            <blockquote className="font-special text-gray-300 italic text-sm border-l-2 border-red-accent pl-4 mb-4">
              "{quote}"
            </blockquote>
          )}

          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-accent hover:text-red-hover transition-colors mb-6 text-sm"
          >
            Zobacz szczegóły książki <FaExternalLinkAlt className="ml-2" />
          </Link>
          
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary w-full text-center"
          >
            Sprawdź Książkę
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 