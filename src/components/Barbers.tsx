'use client';

import { motion } from 'framer-motion';

const barbers = [
  {
    name: 'Alex Carter',
    role: 'Master Barber',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'With over 15 years of experience, Alex excels at classic cuts, fades, and straight razor shaves. Friendly, focused, and detail-driven.',
  },
  {
    name: 'Samantha Lee',
    role: 'Barber & Stylist',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    desc: 'Specializing in modern styles, textured cuts, and beard sculpting. Samantha brings creativity and technical skill to every client.',
  },
  {
    name: 'Miguel Ortiz',
    role: 'Senior Barber',
    img: 'https://randomuser.me/api/portraits/men/75.jpg',
    desc: 'Beard grooming, hair designs, and sharp fades are Miguel’s expertise. He’s passionate about style and customer satisfaction!',
  },
];

export default function Barbers() {
  return (
    <section id="barbers" className="py-14 bg-[#191919]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          Meet Our Barbers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.13 }}
          className="text-center text-[#bdb7a2] max-w-2xl mx-auto mb-10"
        >
          Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {barbers.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.19 + 0.16, type: 'spring', stiffness: 70 }}
              className="rounded-xl px-7 py-10 bg-[#222] border-2 border-[#2c2a26] flex flex-col items-center text-center shadow-lg group"
            >
              <img
                src={b.img}
                alt={b.name}
                className="w-24 h-24 object-cover rounded-full border-2 border-[#e8c266] mb-4 shadow group-hover:scale-105 duration-200"
              />
              <h3 className="font-bold text-lg text-[#ffd552] mb-1">{b.name}</h3>
              <span className="text-xs uppercase tracking-wider text-[#e8c266] mb-2">{b.role}</span>
              <p className="text-[#faf4da] text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
