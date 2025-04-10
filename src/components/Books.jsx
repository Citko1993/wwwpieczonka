'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from './BookCard';

export default function Books() {
  const books = [
    {
      title: "Służby specjalne. Podwójna przykrywka",
      coverSrc: "https://s.lubimyczytac.pl/upload/books/301000/301777/472705-352x500.jpg",
      publisher: "Otwarte",
      releaseDate: "2016",
      description: "Jarosław Pieczonka. Wywiadowca. Przykrywkowiec. Najemnik. Były funkcjonariusz kontrwywiadu wojskowego, odpowiedzialny za osłonę kontrwywiadowczą najbogatszych ludzi w Polsce. Brał udział w inwigilacji świata szpiegowskiego i gangsterskiego na Wybrzeżu. W Polsce wypowiedział wojnę szefom CBŚ, CBA oraz ABW i doprowadził do rozpracowania służb specjalnych ściany północnej.",
      quote: "Jeden człowiek. Wiele tajemnic służb. Patryk Vega ujawnia je jako pierwszy.",
      link: "https://lubimyczytac.pl/ksiazka/301777/sluzby-specjalne-podwojna-przykrywka",
      author: "Patryk Vega"
    },
    {
      title: "\"Miami\" bez cenzury",
      coverSrc: "https://s.lubimyczytac.pl/upload/books/4947000/4947359/866298-352x500.jpg",
      publisher: "Bellona",
      releaseDate: "2020",
      description: "Historia człowieka, który w latach osiemdziesiątych wbrew wszystkim podjął decyzję o rozpoczęciu kariery wojskowej. Pomimo przestróg brata żołnierza podjął wyzwanie z pełną determinacją. Przeżył falę. Nie poddał się. Został zwerbowany do kontrwywiadu wojskowego. Droga, którą wybrał, skomplikowała jego życie – także prywatne.",
      quote: "Walka z mafią z Gdańska i związek z kobietą gangstera to tylko niektóre z życiowych zakrętów w życiorysie Jarosława Pieczonki ps. Miami.",
      link: "https://lubimyczytac.pl/ksiazka/4947359/quot-miami-quot-bez-cenzury",
      author: "Anna Wojtacha"
    },
    {
      title: "Rozprawa o zabijaniu i zmartwychwstaniu",
      coverSrc: "https://s.lubimyczytac.pl/upload/books/4902000/4902337/764218-352x500.jpg",
      publisher: "Wojciech Sumliński Reporter",
      releaseDate: "2019",
      description: "Trzy perspektywy, trzy rzeczywistości, jedna historia. Major Agencji Bezpieczeństwa Wewnętrznego, komisarz Centralnego Biura Śledczego i dziennikarz śledczy rozprawiają się z systemem władzy, ujawniając kulisy brudnej gry, jej przyczyny, skutki i mechanizmy kłamstw forowanych od lat przez 'elity' na wysokich stołkach.",
      quote: "Trzymający w napięciu zapis walki o prawdę z wszechwładzą rządzących, a zarazem walki o przetrwanie ludzi pochodzących z różnych światów, których połączyły nieprawdopodobnie prawdziwe wydarzenia.",
      link: "https://lubimyczytac.pl/ksiazka/4902337/rozprawa-o-zabijaniu-i-zmartwychwstaniu",
      author: "Tomasz Budzyński, Wojciech Sumliński, Jacek Wrona"
    },
  ];

  return (
    <section id="books" className="section bg-deep-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="section-title">Moje Akta</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Książki, które odsłaniają prawdę o polskim świecie przestępczym. 
            Autentyczne historie spisane na podstawie moich doświadczeń w służbach.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8">
          {books.map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              coverSrc={book.coverSrc}
              publisher={book.publisher}
              releaseDate={book.releaseDate}
              description={book.description}
              quote={book.quote}
              link={book.link}
              author={book.author}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300">
            Wszystkie książki dostępne są w dobrych księgarniach stacjonarnych i internetowych.
            <br />
            Możesz także zamówić egzemplarz z dedykacją, kontaktując się bezpośrednio ze mną.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 