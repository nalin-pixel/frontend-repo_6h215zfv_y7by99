import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const DetailCard = ({ title, date, time, location, mapUrl }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white p-6 shadow-lg"
  >
    <div className="flex items-center gap-3 text-rose-600">
      <Calendar className="h-5 w-5" />
      <h3 className="font-serif text-2xl text-gray-800">{title}</h3>
    </div>
    <div className="mt-4 grid gap-1 text-gray-600">
      <p className="font-medium">{date}</p>
      <p>{time}</p>
      <div className="mt-2 flex items-start gap-2">
        <MapPin className="mt-0.5 h-5 w-5 text-rose-500" />
        <div>
          <p>{location}</p>
          {mapUrl && (
            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-rose-600 underline hover:text-rose-700"
            >
              Lihat di Google Maps
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

const Details = () => {
  return (
    <section id="details" className="relative bg-rose-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-gray-800">Detail Acara</h2>
          <p className="mt-2 text-gray-600">Mohon doa dan kehadirannya dalam momen bahagia kami.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <DetailCard
            title="Akad Nikah"
            date="Ahad, 12 Januari 2025"
            time="Pukul 09.00 WIB"
            location="Masjid Al-Ikhlas, Jl. Kenanga No. 12, Yogyakarta"
            mapUrl="https://maps.google.com"
          />
          <DetailCard
            title="Resepsi"
            date="Ahad, 12 Januari 2025"
            time="Pukul 11.00 - 14.00 WIB"
            location="Gedung Serbaguna Harmoni, Jl. Melati No. 8, Yogyakarta"
            mapUrl="https://maps.google.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
