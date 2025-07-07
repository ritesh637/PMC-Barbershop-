'use client';

import { motion } from 'framer-motion';

export default function LocationContact() {
  return (
    <section id="contact" className="py-14 bg-[#222]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Location Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', delay: 0.08 }}
          className="space-y-5"
        >
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://ext.same-assets.com/336778205/849522504.jpeg"
              alt="Fama Barber Shop logo"
              className="w-12 h-12 rounded-full border border-[#e8c266]"
            />
            <div>
              <b className="block text-[#ffd552] text-lg">
                Fama Barber Shop and Beauty Salon
              </b>
              <span className="block text-[#e8c266] text-xs font-semibold">
                Barber shop
              </span>
            </div>
          </div>
          <div>
            <span className="block text-[#ffc34d] font-semibold mb-1">
              Address:
            </span>
            <span className="block text-[#faf4da] ">
              500 N Bell Ave #109, Denton, TX 76209, United States
            </span>
          </div>
          <div>
            <span className="block text-[#ffc34d] font-semibold mb-1">
              Phone:
            </span>
            <a
              href="tel:+19406129127"
              className="block text-[#e8c266] hover:text-yellow-300"
            >
              +1 940-612-9127
            </a>
          </div>
          <a
            href="https://maps.google.com/?q=500+N+Bell+Ave+%23109%2C+Denton%2C+TX+76209"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-7 py-2 rounded-md bg-[#e8c266] font-bold text-[#1f1f1f] shadow-md hover:bg-[#ffe689] transition"
          >
            Get Directions
          </a>
          <div className="mt-6">
            <iframe
              title="map"
              className="w-full h-40 rounded-xl border"
              frameBorder="0"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-97.137832%2C33.224245%2C-97.135832%2C33.226245&amp;layer=mapnik"
            />
          </div>
        </motion.div>
        {/* Right Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="bg-[#181717] rounded-xl p-8 border border-[#39352d] shadow space-y-4"
        >
          <h3 className="text-[#ffd552] text-lg font-bold mb-2">
            Book an Appointment / Contact Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md px-4 py-2 bg-[#24211c] text-[#eed88b] border border-[#39352d] outline-none focus:border-[#e8c266]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-md px-4 py-2 bg-[#24211c] text-[#eed88b] border border-[#39352d] outline-none focus:border-[#e8c266]"
            />
          </div>
          <input
            type="text"
            placeholder="Service Interested In"
            className="rounded-md px-4 py-2 w-full bg-[#24211c] text-[#eed88b] border border-[#39352d] outline-none focus:border-[#e8c266]"
          />
          <input
            type="date"
            className="rounded-md px-4 py-2 w-full bg-[#24211c] text-[#eed88b] border border-[#39352d] outline-none focus:border-[#e8c266]"
          />
          <textarea
            placeholder="Your Message"
            rows={3}
            className="rounded-md px-4 py-2 w-full bg-[#24211c] text-[#eed88b] border border-[#39352d] outline-none focus:border-[#e8c266]"
          />
          <button
            type="submit"
            className="rounded-md px-7 py-2 bg-[#e8c266] font-bold text-[#1f1f1f] shadow hover:bg-[#ffd552] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
