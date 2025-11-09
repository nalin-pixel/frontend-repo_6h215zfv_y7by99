import React, { useEffect, useState, useMemo } from 'react';
import { Heart } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const calculate = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(interval);
  }, []);

  const items = useMemo(() => [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ], [timeLeft]);

  return (
    <div className="mt-8 grid grid-flow-col gap-4 rounded-2xl bg-white/80 p-4 backdrop-blur">
      {items.map((it) => (
        <div key={it.label} className="flex flex-col items-center">
          <div className="font-serif text-3xl text-rose-600">{String(it.value).padStart(2, '0')}</div>
          <div className="text-xs uppercase tracking-wide text-gray-500">{it.label}</div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const eventDate = useMemo(() => new Date('2025-01-12T09:00:00+07:00'), []);

  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6lxi1Uj-M2W6JdHx/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text legibility without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-600 shadow"
        >
          <Heart className="h-4 w-4" />
          <span className="text-sm font-medium tracking-wide">We are getting married</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl text-gray-800"
        >
          Aisyah & Fajar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl"
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <Countdown targetDate={eventDate} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#rsvp" className="rounded-full bg-rose-600 px-6 py-3 text-white shadow hover:bg-rose-700 transition-colors">Konfirmasi Kehadiran</a>
          <a href="#details" className="rounded-full border border-rose-200 bg-white px-6 py-3 text-rose-600 shadow hover:bg-rose-50 transition-colors">Lihat Detail Acara</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
