import React from 'react';
import { Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-rose-100 bg-white/80 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-center text-sm text-gray-600 sm:text-left">
          Dengan cinta, Aisyah & Fajar — 12 Januari 2025
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50"
          >
            <Music className="h-4 w-4" /> Putar Musik
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 p-2 text-white shadow hover:opacity-90"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
