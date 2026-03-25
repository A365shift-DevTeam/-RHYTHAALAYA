import React from 'react';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const mudras = [
  'Pataka', 'Tripataka', 'Ardhapataka', 'Kartarimukha', 'Mayura',
  'Ardhachandra', 'Arala', 'Shukatundaka', 'Mushti', 'Shikharam',
  'Kapittha', 'Katakamukham', 'Suchi', 'Chandrakala', 'Padmakosha',
  'Sarpashirsha', 'Mrigashirsha', 'Simhamukha', 'Kangula', 'Alapadma',
  'Chatura', 'Bhramara', 'Hamsasya', 'Hamsapakshaka', 'Samdamsha',
  'Mukula', 'Tamrachuda', 'Trishula'
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: '#0b2c2f',
        backgroundImage: "url('/images/pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full flex flex-col items-center text-center mt-8 sm:mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 border border-brand-gold/30 rounded-full text-[9px] sm:text-[10px] md:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase text-brand-gold mb-7 sm:mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Bharatanatyam and Kathak
          </div>

          <div className="inline-flex flex-col items-stretch w-full">
            <h1 className="font-serif text-[34px] sm:text-[44px] md:text-7xl lg:text-[110px] text-white leading-[0.95] tracking-[0.03em] sm:tracking-[0.05em] pl-[0.03em] sm:pl-[0.05em] mb-5 sm:mb-6 text-center break-words">
              RHYTHAALAYA
            </h1>

            <div className="text-brand-gold text-[11px] sm:text-sm md:text-base tracking-[0.18em] sm:tracking-[0.3em] uppercase mb-8 sm:mb-10 min-h-6 flex items-center justify-center">
              <span>Dance Beyond Movement</span>
            </div>

            <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[75%] mx-auto relative overflow-hidden flex whitespace-nowrap border-y border-brand-gold/20 py-2.5 mb-8 sm:mb-10 bg-transparent">
              <div className="absolute inset-y-0 left-0 w-6 sm:w-8 md:w-16 bg-gradient-to-r from-[#0b2c2f] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-6 sm:w-8 md:w-16 bg-gradient-to-l from-[#0b2c2f] to-transparent z-10 pointer-events-none" />

              <motion.div
                className="inline-flex items-center min-w-max"
                animate={{ x: [0, '-50%'] }}
                transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {mudras.map((mudra, idx) => (
                      <React.Fragment key={`${i}-${idx}`}>
                        <span className="mx-3 sm:mx-5 md:mx-6 text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[4px] uppercase text-brand-gold/70 font-medium whitespace-nowrap">
                          {mudra}
                        </span>
                        <span className="text-brand-gold/40 text-[10px] flex-shrink-0">|</span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mt-2 sm:mt-4">
            <div className="absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 w-72 h-auto opacity-40 pointer-events-none mix-blend-screen">
              <img src="/images/dancer.png" alt="Dancer Silhouette" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col items-center z-10">
              <h2 className="font-sans font-semibold text-[28px] sm:text-3xl md:text-[40px] tracking-[0.03em] text-brand-gold mb-7 sm:mb-10">
                Begin Your Dance Journey
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-2.5 sm:gap-y-3 text-white/90 text-xs sm:text-sm md:text-base max-w-3xl px-2">
                <span>Certified Course</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span>Flexible Learning Options</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span>Eligibility 5 Years and Above</span>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span>Schedule Twice a Week</span>
              </div>

              <a
                href="tel:+919019860818"
                className="mt-10 sm:mt-12 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-brand-gold text-[#0b1f1c] font-bold tracking-[0.08em] sm:tracking-wider text-xs sm:text-sm hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center gap-2.5 sm:gap-3"
              >
                <Phone size={20} fill="currentColor" />
                +91 9019860818 
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
