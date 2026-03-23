import React from 'react';
import { motion } from 'motion/react';
import { TypeAnimation } from 'react-type-animation';

const mudras = [
  "Pataka", "Tripataka", "Ardhapataka", "Kartarimukha", "Mayura", 
  "Ardhachandra", "Arala", "Shukatundaka", "Mushti", "Shikharam", 
  "Kapittha", "Katakamukham", "Suchi", "Chandrakala", "Padmakosha", 
  "Sarpashirsha", "Mrigashirsha", "Simhamukha", "Kangula", "Alapadma", 
  "Chatura", "Bhramara", "Hamsasya", "Hamsapakshaka", "Samdamsha", 
  "Mukula", "Tamrachuda", "Trishula"
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
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center w-full"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2 border border-brand-gold/30 rounded-full text-[10px] md:text-[11px] tracking-[3px] uppercase text-brand-gold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Bharatanatyam Dance Studio
          </div>

          <div className="inline-flex flex-col items-stretch w-max max-w-full">
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[110px] text-white leading-none tracking-[0.05em] pl-[0.05em] mb-6 text-center">
              RHYTHAALAYA
            </h1>

            {/* Subtitle */}
            <div className="text-brand-gold text-sm md:text-base tracking-[0.3em] uppercase mb-10 h-6 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Dance Beyond Movement',
                  2000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Constrained Mudras Marquee */}
            <div className="w-[88%] md:w-[94%] lg:w-[96%] mx-auto relative overflow-hidden flex whitespace-nowrap border-y border-brand-gold/20 py-2.5 mb-10 bg-transparent">
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0b2c2f] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0b2c2f] to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                 className="inline-flex items-center min-w-max"
                 animate={{ x: [0, "-50%"] }}
                 transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {mudras.map((mudra, idx) => (
                      <React.Fragment key={`${i}-${idx}`}>
                        <span className="mx-5 md:mx-6 text-[10px] tracking-[4px] uppercase text-brand-gold/70 font-medium whitespace-nowrap">
                          {mudra}
                        </span>
                        <span className="text-brand-gold/40 text-[10px] flex-shrink-0">
                          •
                        </span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Lower Section */}
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mt-4">
            {/* Silhouette Image - Positioned to the left */}
            <div className="absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 w-72 h-auto opacity-40 pointer-events-none mix-blend-screen">
              <img src="/images/dancer.png" alt="Dancer Silhouette" className="w-full h-full object-contain" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center z-10">
              <h2 className="font-serif italic text-3xl md:text-[40px] text-brand-gold mb-10">
                Begin Your Dance Journey
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-white/90 text-sm md:text-base max-w-3xl">
                <span>Certified Course</span>
                <span className="text-white/30">|</span>
                <span>Flexible Learning Options</span>
                <span className="text-white/30">|</span>
                <span>Eligibility 5 Years and Above</span>
                <span className="text-white/30">|</span>
                <span>Schedule Twice a Week</span>
              </div>

              <a href="https://wa.me/919597302769" target="_blank" rel="noopener noreferrer" className="mt-12 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold tracking-wider text-sm hover:bg-[#1fad53] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
               Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
