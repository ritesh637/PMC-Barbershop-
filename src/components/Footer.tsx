'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(34, 34, 34)"}} className=" pt-12 pb-5 px-4 border-t border-yellow-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.16 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-6 justify-between items-start"
      >
        {/* Left: Business Info */}
        <div className="mb-6 flex-1" >
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75"
              alt="Fama Barber Shop logo"
              className="w-9 h-9 rounded-full border border-[#b28f19]"
            />
            <span className="font-bold text-lg text-white tracking-wide">
              AKS
            </span>
          </div>
          <div className="text-[#5f5022] text-sm">
            Classic cuts with modern style
            <br />
            500 N Bell Ave #109, Denton, TX 76209
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className="flex-1 mb-6">
          <b className="uppercase text-xs tracking-wider text-[#bc8906]">
            Quick Links
          </b>
          <ul className="mt-2 space-y-1 text-[#5e5e5b]">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Contact & Newsletter */}
        <div className="flex-1">
          <b className="uppercase text-xs tracking-wider text-[#bc8906]">
            Contact Us
          </b>
          <address className="not-italic mt-2 mb-3 text-[#715f1a] text-[15px]">
            +1 940-612-9127
            <br />
            500 N Bell Ave #109, Denton, TX
            <br />
            Mon-Sat: 9am–7pm
          </address>
          <form className="flex items-center gap-2">
            <input
              placeholder="Subscribe newsletter"
              className="rounded px-3 py-2 text-[#715f1a] bg-white border border-[#bfa32c] focus:outline-[#20201a]"
            />
            <button
              type="submit"
              className="rounded px-3 py-2 bg-[#20201a] text-[#ffd552] font-semibold hover:bg-[#423418]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
      <div className="text-center text-[#57471a] font-bold text-xs mt-8 mb-2">
        © {new Date().getFullYear()} AKS Barber Shop and Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
}
