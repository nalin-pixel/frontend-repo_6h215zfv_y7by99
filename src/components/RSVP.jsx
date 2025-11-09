import React, { useState } from 'react';
import { Send, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const RSVP = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-gray-800">Konfirmasi Kehadiran</h2>
          <p className="mt-2 text-gray-600">Kami sangat menantikan kehadiran Anda.</p>
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg">
          {!submitted ? (
            <form onSubmit={submit} className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Nama Lengkap</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-rose-400"
                  placeholder="Tuliskan nama Anda"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Jumlah Tamu</label>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-rose-500" />
                  <input
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                    className="w-24 rounded-lg border border-gray-200 px-3 py-2 text-center outline-none focus:border-rose-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Ucapan / Doa</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none focus:border-rose-400"
                  placeholder="Sampaikan harapan terbaik Anda untuk kami"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 font-medium text-white shadow hover:bg-rose-700"
              >
                <Send className="h-4 w-4" />
                Kirim RSVP
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-gray-800">Terima kasih!</h3>
              <p className="mt-2 text-gray-600">
                Data kehadiran Anda telah tercatat. Sampai jumpa pada hari bahagia kami.
              </p>
              <div className="mt-6 grid gap-1 text-sm text-gray-700">
                <p><span className="font-medium">Nama:</span> {name}</p>
                <p><span className="font-medium">Jumlah Tamu:</span> {guests}</p>
                {message && <p><span className="font-medium">Ucapan:</span> {message}</p>}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
