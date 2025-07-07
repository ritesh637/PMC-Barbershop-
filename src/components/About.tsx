'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className="bg-[#1f1f1f] py-24 px-6 md:px-12 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-[#e8c266] uppercase font-bold text-sm">Our Story</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-4">
          About PMC Barbershop
        </h1>
        <p className="max-w-2xl mx-auto text-[#aaa] text-base md:text-lg">
          Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image with Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 70, delay: 0.3 }}
          className="relative"
        >
          <Image
            src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Fabout.webp&w=1200&q=75"
            alt="PMC Barbershop"
            width={600}
            height={400}
            className="rounded-xl border-4 border-[#e8c266] shadow-xl shadow-[#e8c266]/10 w-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-[#e8c266] text-[#181717] font-bold px-4 py-1.5 rounded-md text-sm shadow-md">
            5+ years
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.6 }}
          className="space-y-6"
        >
          {/* Left Bordered Paragraph */}
          <div className="border-l-4 border-[#e8c266] pl-4 text-[#ccc] text-base leading-relaxed">
            <p>
              Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
            </p>
          </div>

          {/* Quote Style Box */}
          <div className="bg-[#2a2a2a] text-[#aaa] p-6 rounded-lg shadow-md text-base leading-relaxed">
            <p>
              “We take pride in our attention to detail and personalized service, ensuring
              each client leaves looking and feeling their best. Our skilled barbers
              combine traditional techniques with modern trends to create custom
              styles that suit each individual's personality and lifestyle.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
