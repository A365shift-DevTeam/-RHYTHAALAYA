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
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-[400px] aspect-square rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center gap-3 relative overflow-hidden shadow-lg">
              <div className="absolute inset-4 border border-dashed border-brand-gold/40 rounded-full z-20 pointer-events-none" />
              <img src={guruImage} alt="Artistic Director" className="absolute inset-0 w-full h-full object-cover object-top" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute w-full max-w-[440px] aspect-square rounded-full border border-brand-gold/20 -z-10" />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-12 w-32 h-32 rounded-full bg-brand-gold opacity-10 -z-10 blur-2xl" />
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
              Rooted in the <br /><span className="italic text-brand-gold">Natya Shastra</span>
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
                "Global Certification",
                "World-Class Faculty",
                "Rigorous Syllabus",
                "Career Placement"
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
