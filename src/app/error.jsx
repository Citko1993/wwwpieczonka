'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-5xl font-oswald text-red-accent mb-6">BŁĄD</h1>
        <div className="border border-light-gray p-6 bg-black-bg mb-8 relative">
          <h2 className="text-2xl font-oswald text-white mb-4">Coś poszło nie tak...</h2>
          <p className="text-gray-300 mb-6">
            Wystąpił nieoczekiwany błąd. Spróbuj ponownie lub wróć na stronę główną.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="btn btn-primary"
            >
              Spróbuj ponownie
            </button>
            <Link 
              href="/" 
              className="btn btn-outline"
            >
              Strona główna
            </Link>
          </div>
        </div>
        <p className="text-gray-500 text-sm font-oswald uppercase tracking-wider">
          KRYPTONIM: ERROR-404
        </p>
      </div>
    </div>
  );
} 