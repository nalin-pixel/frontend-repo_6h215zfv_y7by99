import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TimeBox = ({ label, value }) => (
  <div className="rounded-xl bg-white/90 p-4 text-center shadow">
    <div className="font-serif text-3xl text-rose-600">{value.toString().padStart(2, '0')}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">{label}</div>
  </div>
);

const getTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  const days = Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  const seconds = Math.max(0, Math.floor((distance % (1000 * 60)) / 1000));
  return { days, hours, minutes, seconds };
};

const Countdown = ({ date = '2025-01-12T09:00:00+07:00' }) => {
  const target = new Date(date);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return (
    <section className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full bg-rose-50 px-4 py-2 text-rose-600"
          >
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Hitung Mundur Menuju Hari Bahagia</span>
          </motion.div>
          <h2 className="mt-4 font-serif text-4xl text-gray-800">12 Januari 2025</h2>
          <p className="mt-2 text-gray-600">Mohon doa restunya, sampai jumpa di acara kami.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <TimeBox label="Hari" value={timeLeft.days} />
          <TimeBox label="Jam" value={timeLeft.hours} />
          <TimeBox label="Menit" value={timeLeft.minutes} />
          <TimeBox label="Detik" value={timeLeft.seconds} />
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
