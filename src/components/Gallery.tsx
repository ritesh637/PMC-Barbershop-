'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-14 bg-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          Our Barbershop Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[#bdb7a2] max-w-2xl mx-auto mb-10"
        >
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.11, type: 'spring', stiffness: 80 }}
              className="rounded-xl overflow-hidden border-2 border-[#292929] shadow-lg bg-[#181717] hover:scale-[1.03] hover:border-[#e8c266] duration-150"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-56 object-cover object-center"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
