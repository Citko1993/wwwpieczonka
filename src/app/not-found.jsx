import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-6xl font-oswald text-red-accent mb-6">404</h1>
        <div className="border border-light-gray p-6 bg-black-bg mb-8 relative">
          <div className="absolute -top-4 -right-4 stamp z-20">
            UTAJNIONE
          </div>
          <h2 className="text-2xl font-oswald text-white mb-4">Akta zaginione</h2>
          <p className="text-gray-300 mb-6">
            Strona, której szukasz, nie istnieje lub została przeniesiona do innej lokalizacji.
          </p>
          <Link 
            href="/"
            className="btn btn-primary"
          >
            Powrót na stronę główną
          </Link>
        </div>
        <p className="text-gray-500 text-sm font-oswald uppercase tracking-wider">
          KRYPTONIM: STRONA-404
        </p>
      </div>
    </div>
  );
} 