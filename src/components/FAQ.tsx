'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'Walk-ins are welcome but appointments are preferred for guaranteed slots, especially during peak hours.',
  },
  {
    q: 'What forms of payment do you accept?',
    a: 'We accept cash, all major credit cards, Apple Pay, and Google Pay.',
  },
  {
    q: 'How far in advance should I book my appointment?',
    a: 'Booking 1-2 days in advance is recommended, but same-day slots are often available!',
  },
  {
    q: 'Do you offer any loyalty rewards or referral discounts?',
    a: 'Yes! Ask about our monthly membership, loyalty program, and referral bonuses during your visit.',
  },
  {
    q: 'Are your barbers experienced with all hair types?',
    a: 'Absolutely—we pride ourselves on providing expert service for every hair type, style, and preference.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-14 bg-[#191919]">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.09 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 9 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.13 }}
          className="text-center text-[#bdb7a2] max-w-xl mx-auto mb-8"
        >
          Answers to common questions about our barbershop services, appointments, and experience.
        </motion.p>
        <ul className="space-y-3">
          {faqs.map((faq, i) => (
            <li key={faq.q}>
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className={`w-full flex justify-between items-center py-4 px-6 rounded-lg text-base font-semibold bg-[#201e19] border border-[#33301a] text-[#e8c266] hover:bg-[#282602] transition focus:outline-none`}
              >
                {faq.q}
                <motion.span
                  animate={{ rotate: openIdx === i ? 180 : 0 }}
                  className="ml-2 inline-block"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.33 }}
                    className="overflow-hidden px-8 py-3 text-[#faf4da] bg-[#222016] border-l-4 border-[#e8c266] rounded-b-lg text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
