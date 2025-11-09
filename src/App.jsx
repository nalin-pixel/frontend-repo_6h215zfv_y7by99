import React from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b border-rose-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-2xl text-rose-600">A & F</a>
          <nav className="hidden gap-6 text-sm text-gray-700 sm:flex">
            <a href="#couple" className="hover:text-rose-600">Kisah</a>
            <a href="#details" className="hover:text-rose-600">Detail</a>
            <a href="#rsvp" className="hover:text-rose-600">RSVP</a>
          </nav>
          <a href="#rsvp" className="rounded-full bg-rose-600 px-4 py-2 text-sm text-white shadow hover:bg-rose-700">Konfirmasi</a>
        </div>
      </header>

      <main>
        <Hero />
        <Couple />
        <Details />
        <RSVP />
      </main>

      <Footer />
    </div>
  );
};

export default App;
