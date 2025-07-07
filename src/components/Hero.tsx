'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
  <section
  id="home"
  className="h-screen flex items-center bg-[#1f1f1f] border-b border-[#292929] pt-32 md:pt-0"
>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 w-full">
        {/* Textual hero left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
          className="flex-1 text-left"
        >
          <span className="mb-3 inline-block uppercase tracking-wide text-[#e8c266] text-sm font-bold">Barber shop</span>
          <h1 className="text-[2.2rem] md:text-4xl font-black leading-tight mb-2 text-white">
            Classic Cuts, Modern Style <br />
            <span className="text-[#e8c266]">Premium Barber Shop & Beauty Salon</span>
          </h1>
          <div className="flex items-center gap-3 mb-3 text-sm">
            <span className="px-2 py-1 rounded-full bg-[#232323] border border-[#e8c266] text-[#e8c266] font-semibold">Open 7 Closes 7 pm</span>
            <span className="text-[#ffc34d] flex items-center">★ <b className="ml-1 text-white">4.6</b> (116+ reviews)</span>
          </div>
          <div className="text-[#ccc] mb-2">
            At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+19406129127" className="underline text-[#e8c266] font-semibold hover:text-yellow-400">+1 940-612-9127</a>
            <a href="https://maps.google.com/?q=500+N+Bell+Ave+%23109%2C+Denton%2C+TX+76209" target="_blank" rel="noopener noreferrer" className="text-[#e8c266] font-semibold hover:text-yellow-400">📍</a>
          </div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <a href="#services" className="inline-block mt-6 rounded-lg px-7 py-2.5 font-bold text-[#181717] bg-[#e8c266] hover:bg-[#ffdb59] transition text-base shadow-lg shadow-[#e8c266]/10 animate-bounce">Our Services</a>
            <a href="#contact" className="gap-4 m-5 inline-block mt-6 rounded-lg px-7 py-2.5 font-bold text-white border-2 border-cyan-500 bg-transparent hover:bg-[#ffdb59] transition text-base shadow-lg shadow-[#e8c266]/10 animate-bounce">Book Now</a>
          </motion.div>
        </motion.div>

        {/* Hero image right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 70, delay: 0.6 }}
          className="flex-1 min-w-[280px] w-full max-w-[430px]"
        >
          <img
            src="https://ext.same-assets.com/336778205/1645779418.webp"
            alt="Fama Barbershop team"
            className="rounded-xl border-4 border-[#e8c266] shadow-xl shadow-[#e8c266]/10 w-full object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
