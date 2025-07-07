// 'use client';

// import { motion } from 'framer-motion';

// const navLinks = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Services', href: '#services' },
//   { label: 'Gallery', href: '#gallery' },
//   { label: 'Contact', href: '#contact' },
// ];

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-[#181717] bg-opacity-95 z-50 border-b border-[#333]">
//       <div className="flex items-center justify-between px-6 md:px-12 py-3 max-w-7xl mx-auto">
//         {/* Logo */}
//         <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}>
//           <a href="#home" className="flex items-center gap-2">
//             <img src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75" alt="Fama Barber Shop logo" className="w-9 h-9 rounded-full border-2 border-[#e8c266]" />
//             <span className="font-bold text-[1.15rem] tracking-wide text-[#e8c266] hidden md:inline">AKS</span>
//           </a>
//         </motion.div>
//         {/* Nav links */}
//         <nav className="hidden md:flex gap-6 items-center">
//           {navLinks.map((link, idx) => (
//             <motion.a
//               key={link.label}
//               href={link.href}
//               className="text-[#e8c266] font-medium hover:text-white transition"
//               initial={{ opacity: 0, x: -20 * (navLinks.length - idx) }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.11 + 0.3 }}
//             >
//               {link.label}
//             </motion.a>
//           ))}
//         </nav>
//         <div className="flex gap-2 items-center">
//           {/* Call button */}
//           <motion.a
//             href="tel:+91 7979022965"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.46 }}
//             className="hidden md:block bg-[#e8c266] text-[#181717] font-semibold px-4 py-1.5 ml-3 rounded-md shadow hover:bg-[#e7bb2d] transition"
//           >
//             Call Now
//           </motion.a>
//           {/* Book CTA */}
//           <motion.a
//             href="#contact"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.55 }}
//             className="bg-[#e8c266] text-[#181717] px-4 py-1.5 rounded-md font-semibold shadow-md hover:bg-[#ffdb59] transition"
//           >
//             Book an Appointment
//           </motion.a>
//         </div>
//       </div>
//     </header>
//   );
// }



'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-[#181717] bg-opacity-95 z-50 border-b border-[#333]">
        <div className="flex items-center justify-between px-6 md:px-12 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 90, damping: 14 }}>
            <a href="#home" className="flex items-center gap-2">
              <img src="https://pmcbarber.devfrend.com/_next/image?url=%2Fimages%2Fpmcbarber%2Flogo.webp&w=256&q=75" alt="Fama Barber Shop logo" className="w-9 h-9 rounded-full border-2 border-[#e8c266]" />
              <span className="font-bold text-[1.15rem] tracking-wide text-[#e8c266] hidden md:inline">AKS</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#e8c266] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-[#e8c266] font-medium hover:text-white transition"
                initial={{ opacity: 0, x: -20 * (navLinks.length - idx) }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.11 + 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex gap-2 items-center">
            {/* Call button */}
            <motion.a
              href="tel:+91 7979022965"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.46 }}
              className="bg-[#e8c266] text-[#181717] font-semibold px-4 py-1.5 ml-3 rounded-md shadow hover:bg-[#e7bb2d] transition"
            >
              Call Now
            </motion.a>
            {/* Book CTA */}
            <motion.a
              href="#contact"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="bg-[#e8c266] text-[#181717] px-4 py-1.5 rounded-md font-semibold shadow-md hover:bg-[#ffdb59] transition"
            >
              Book an Appointment
            </motion.a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 w-64 h-full bg-[#181717] bg-opacity-95 z-40 border-l border-[#333] pt-20 px-6 md:hidden"
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#e8c266] font-medium text-lg py-2 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="mt-8 flex flex-col gap-4">
            <a 
              href="tel:+19408081569" 
              className="text-[#e8c266] font-medium hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              +19408081569
            </a>
            
            <a
              href="#contact"
              className="bg-[#e8c266] text-[#181717] px-4 py-2 rounded-md font-semibold shadow-md hover:bg-[#ffdb59] transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Book an Appointment
            </a>
          </div>
        </nav>
      </motion.div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
