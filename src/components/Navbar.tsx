import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Classes', 'Gallery', 'Learning'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b1f1c]/80 backdrop-blur-md shadow-sm py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
            RHYTHAALAYA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest uppercase font-medium transition-colors hover:text-brand-gold text-white/90"
            >
              {item}
            </a>
          ))}
          <button className={`px-8 py-2.5 rounded-full border text-sm tracking-widest uppercase font-medium transition-all duration-300 ${isScrolled
              ? 'border-white/30 text-white hover:bg-white hover:text-[#0b1f1c]'
              : 'border-white/50 text-white hover:bg-white hover:text-[#0b1f1c]'
            }`}>
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0b1f1c] shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-b border-white/10"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-white border-b border-white/10 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 px-6 py-3 rounded-full border border-white/30 text-white text-sm tracking-widest uppercase w-full font-medium hover:bg-white hover:text-[#0b1f1c] transition-colors">
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
