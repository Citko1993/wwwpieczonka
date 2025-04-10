'use client';

import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF />, href: 'https://facebook.com' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
  { name: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },
  { name: 'YouTube', icon: <FaYoutube />, href: 'https://youtube.com' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-bg border-t border-light-gray py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Jarosław "Miami" Pieczonka. Wszelkie prawa zastrzeżone.
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="text-gray-400 hover:text-red-accent transition-colors duration-300"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">{link.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 