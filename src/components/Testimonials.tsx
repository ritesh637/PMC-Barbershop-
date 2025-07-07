'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    text: 'Costly compared to other barbershops with better haircuts.',
    author: 'Google Review',
  },
  {
    text: "I've been getting my hair cut at Fama Barber Shop for over 2 years now. Attention to detail is unmatched, and the atmosphere is welcoming.",
    author: 'Mike Johnson',
  },
  {
    text: "The team took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!",
    author: 'David Martinez',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#191919] py-14" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          What Our Clients Say
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.text}
              initial={{ x: 50 * (i - 1), opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 80, delay: i * 0.17 + 0.17 }}
              className="flex-1 bg-[#222] border border-[#2c2a26] rounded-xl p-7 shadow-lg text-[#f7e8bf] min-h-[140px] flex flex-col items-center text-center mx-auto"
            >
              <p className="mb-4 italic text-[#ffe689]">“{t.text}”</p>
              <span className="text-xs text-[#bdb7a2] font-semibold tracking-wide">— {t.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
