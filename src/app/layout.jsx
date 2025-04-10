import { Oswald, Roboto, Special_Elite } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

export const metadata = {
  title: 'Jarosław "Miami" Pieczonka | Bez Cenzury',
  description: 'Oficjalna strona Jarosława "Miami" Pieczonki - byłego funkcjonariusza CBŚP, autora książek o polskim świecie przestępczym',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${oswald.variable} ${roboto.variable} ${specialElite.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 