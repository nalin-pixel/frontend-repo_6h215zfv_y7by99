import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileCard = ({ name, parents, city, img, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className={`flex flex-col ${align === 'right' ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center gap-6 rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur`}
  >
    <img src={img} alt={name} className="h-36 w-36 rounded-2xl object-cover shadow-md" />
    <div className="text-center sm:text-left">
      <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-rose-600">
        <HeartHandshake className="h-4 w-4" />
        <span className="text-xs font-medium">The Bride & Groom</span>
      </div>
      <h3 className="mt-3 font-serif text-3xl text-gray-800">{name}</h3>
      <p className="mt-2 text-gray-600">Putra/Putri dari {parents}</p>
      <p className="text-gray-500">{city}</p>
    </div>
  </motion.div>
);

const Couple = () => {
  return (
    <section id="couple" className="relative py-20 bg-gradient-to-b from-rose-50/60 to-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-gray-800">Kisah Kami</h2>
          <p className="mt-2 text-gray-600">Dua hati, satu perjalanan.</p>
        </div>

        <div className="mt-10 grid gap-8">
          <ProfileCard
            name="Aisyah Nur"
            parents="Bapak Ahmad & Ibu Siti"
            city="Yogyakarta"
            img="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
            align="left"
          />
          <ProfileCard
            name="Fajar Pratama"
            parents="Bapak Budi & Ibu Lina"
            city="Bandung"
            img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
            align="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Couple;
