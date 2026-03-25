import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import guruImage from '../images/image1.jpeg';

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-16 sm:py-20 md:py-32 relative bg-black/20 border-t border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center"
          >
            {/* Image Container with Decorations */}
            <div className="relative mb-12 flex items-center justify-center">
              <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[400px] md:h-[400px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 relative overflow-hidden shadow-2xl z-10">
                <div className="absolute inset-4 border border-dashed border-brand-gold/40 rounded-full z-20 pointer-events-none" />
                <img
                  src={guruImage}
                  alt="Rinee Infant - Founder & Artist Director"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Outer Decorative Rings - Centered on the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[112%] aspect-square rounded-full border border-brand-gold/20 -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[118%] aspect-square rounded-full border border-brand-gold/10 -z-10 blur-[1px]" />
            </div>

            {/* Founder Details */}
            <div className="text-center">
              <h4 className="font-serif text-[28px] sm:text-[32px] text-white tracking-wide mb-2 leading-tight">
                Rinee Infanta
              </h4>
              <p className="text-brand-gold text-[10px] sm:text-[11px] tracking-[4px] uppercase font-bold opacity-90">
                Founder & Artistic Director
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-brand-gold tracking-[3px] sm:tracking-[4px] uppercase text-[10px] sm:text-[11px] font-bold mb-3 block">
              Our Philosophy
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-[42px] text-white leading-[1.2] mb-5 sm:mb-6">
              Rooted in  <br /><span className="italic text-brand-gold">Classsical Tradition</span>
            </h3>
            <div className="space-y-4 text-white/80 font-light text-[14px] sm:text-[15px] leading-relaxed mb-7 sm:mb-8">
              <p>
                Bharatanatyam is more than a dance; it is a moving meditation, a rigorous discipline, and a profound storytelling medium. Our academy approaches this ancient art form with uncompromising standards of excellence.
              </p>
              <p>
                We balance the strict adherence to the traditional Margam (repertoire) with modern pedagogical techniques, ensuring our students develop not just technical perfection in Nritta (pure dance), but deep emotional resonance in Abhinaya (expression).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-7 sm:mt-8">
              {[
                "Structured Learning",
                "Standard Certification",
                "Disciplined Mastery",
                "Detailed Syllabus",
                "Regular training",
                "Dedicated practice"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] font-medium text-white">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-gold" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
