'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function OverviewCard({ icon, title, description, link = '#', linkText, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      whileHover={{
        y: -10,
        boxShadow: '0 10px 30px -10px rgba(220, 38, 38, 0.3)',
        borderColor: '#B91C1C',
      }}
      transition={{ duration: 0.3 }}
      className={`overview-card p-6 md:p-8 h-full flex flex-col ${className}`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-oswald uppercase mb-3 text-white drop-shadow-sm">{title}</h3>
      <p className="text-white font-medium mb-6 flex-grow leading-relaxed opacity-100">{description}</p>
      {linkText && (
        <Link href={link} className="group inline-flex items-center font-oswald uppercase text-red-accent hover:text-red-hover no-underline font-medium">
          {linkText}
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            className="ml-2"
          >
            <FaArrowRight />
          </motion.span>
        </Link>
      )}
    </motion.div>
  );
} 