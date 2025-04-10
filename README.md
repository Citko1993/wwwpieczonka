# Gangster Portfolio - Strona Jarosława "Miami" Pieczonki

Mroczna, immersyjna strona portfolio/landing page dla Jarosława "Miami" Pieczonki, byłego funkcjonariusza CBŚP i autora książek. Projekt wykorzystuje koncepcję designu "Teczka Dowodowa / Biurko Śledczego", tworząc wrażenie przeglądania tajnych materiałów.

## 🚀 Technologie

- **Next.js** (v14) z App Router - framework React
- **Tailwind CSS** - stylowanie
- **GSAP** + ScrollTrigger - zaawansowane animacje
- **Framer Motion** - animacje komponentów
- **Lenis** - płynne przewijanie
- **React Icons** - ikony

## 🛠️ Instalacja

1. Sklonuj repozytorium
```bash
git clone <adres-repozytorium>
cd gangster-portfolio
```

2. Zainstaluj zależności
```bash
npm install
# lub
yarn install
```

3. Uruchom serwer deweloperski
```bash
npm run dev
# lub
yarn dev
```

4. Otwórz przeglądarkę i przejdź do `http://localhost:3000`

## 🏗️ Struktura Projektu

```
src/
├── app/
│   ├── layout.jsx    # Główny layout
│   └── page.jsx      # Strona główna
├── components/       # Komponenty UI
│   ├── Header.jsx    # Nawigacja
│   ├── Footer.jsx    # Stopka
│   ├── Hero.jsx      # Sekcja główna
│   ├── Overview.jsx  # Przegląd
│   ├── About.jsx     # O autorze
│   ├── Books.jsx     # Książki
│   ├── Media.jsx     # Media
│   └── Contact.jsx   # Kontakt
└── styles/
    └── globals.css   # Style globalne
```

## 📱 Responsywność

Strona jest w pełni responsywna i dostosowana do urządzeń mobilnych, tabletów i desktopów.

## ✨ Efekty i Animacje

- Płynne przewijanie z Lenis
- Animacje wejścia elementów
- Parallax i efekty scrollowania z GSAP
- Mikrointerakcje z Framer Motion
- Efekt "Pieczątki POUFNE"

## 🚀 Deployment

Projekt jest przygotowany do wdrożenia na platformach takich jak Vercel lub Netlify. 