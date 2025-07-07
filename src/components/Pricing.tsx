'use client';

import { motion } from 'framer-motion';

const priceTiers = [
  {
    type: 'Classic Services',
    price: '$25',
    period: 'per visit',
    highlight: true,
    list: [
      "Men's Haircut",
      'Kids Haircut (12 & under)',
      'Senior Haircut (65+)',
      'Military/First Responder Cut',
      'Basic Beard Trim',
      'Neck & Line Cleanup',
    ],
  },
  {
    type: 'Premium Services',
    price: '$35',
    period: 'per visit',
    highlight: false,
    list: [
      'Haircut & Beard Combo',
      'Hot Towel Shave',
      'Full Beard Shaping',
      'Gray Blending (Color Camo)',
      'Hair & Scalp Treatment',
      'Head Shave w/ Hot Towel',
    ],
  },
  {
    type: 'Packages',
    price: '$50',
    period: 'per visit',
    highlight: false,
    list: [
      'The Works (Cut, Shave, Treatment)',
      'Father & Son Combo',
      "Groom's Package",
      'Monthly Membership',
      'First Time Client Special',
      'Loyalty Program',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-14 bg-[#191919]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-center text-[#e8c266] mb-2"
        >
          Our Service Prices
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.17 }}
          className="text-center text-[#bdb7a2] max-w-2xl mx-auto mb-10"
        >
          Choose from our range of professional barbering services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {priceTiers.map((tier, i) => (
            <motion.div
              key={tier.type}
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.18 + 0.15,
                type: 'spring',
                stiffness: 70,
              }}
              className={`rounded-xl px-7 py-10 bg-[#222] border-2 shadow-lg flex flex-col items-center ${
                tier.highlight
                  ? 'border-[#e8c266] scale-105 z-10'
                  : 'border-[#2c2a26]'
              }`}
            >
              <h3 className="font-bold text-lg text-[#ffd552] mb-3">
                {tier.type}
              </h3>
              <p className="text-5xl font-black mb-2 text-[#e8c266]">
                {tier.price}
              </p>
              <div className="text-[12px] text-[#bdb7a2] mb-3">
                {tier.period}
              </div>
              <ul className="text-[#faf4da] text-[15px] mb-7 space-y-2 text-center">
                {tier.list.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 justify-center"
                  >
                    <span className="text-[#e8c266]">•</span> {service}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-auto px-7 py-2 rounded-md font-bold text-base transition shadow ${
                  tier.highlight
                    ? 'bg-[#e8c266] text-[#1f1f1f] hover:bg-[#ffe689]'
                    : 'bg-[#282828] text-[#ffd552] hover:bg-[#414141]'
                }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
