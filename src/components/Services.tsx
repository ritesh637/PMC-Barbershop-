'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Haircuts',
    icon: 'https://ext.same-assets.com/336778205/3783633550.svg',
    desc: 'Precision haircuts tailored to your style and face shape. Classic and modern options to keep you looking sharp.',
    list: ['Classic Cuts', 'Modern Styles'],
  },
  {
    title: 'Beard Services',
    icon: 'https://ext.same-assets.com/336778205/2563901416.svg',
    desc: 'Beard shaping, trims, and hot towel shaves. Maintain your facial hair for a polished look.',
    list: ['Beard Trims', 'Beard Shaping'],
  },
  {
    title: 'Premium Services',
    icon: 'https://ext.same-assets.com/336778205/548389142.svg',
    desc: 'Hair coloring, scalp treatments, special styling for occasions. Enhance your look with premium care.',
    list: ['Hair Coloring', 'Scalp Treatments'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 bg-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          Our Barber Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-[#bdb7a2] max-w-2xl mx-auto mb-10"
        >
          Professional barbering services for everyday confidence or special occasions.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.16 + 0.2, type: 'spring', stiffness: 80 }}
              className="bg-[#191919] border border-[#2c2a26] rounded-xl p-7 shadow-lg hover:shadow-xl hover:border-[#e8c266] duration-150 flex flex-col items-center text-center"
            >
              <img src={s.icon} className="w-14 h-14 mb-4" alt={s.title} />
              <h3 className="text-lg font-semibold mb-1 text-[#ffd552]">{s.title}</h3>
              <p className="text-[#cbc6b2] text-sm mb-2 min-h-[56px]">{s.desc}</p>
              <ul className="text-xs text-[#e8c266] space-y-0.5">
                {s.list.map(item => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
