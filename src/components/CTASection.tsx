import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden text-center bg-[#071412] border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto px-6 relative z-10"
      >
        <h2 className="font-serif text-4xl md:text-[52px] text-white mb-5 tracking-[3px] font-light">
          Join Our Legacy
        </h2>
        <p className="text-white/60 mb-10 text-[15px] font-light leading-relaxed">
          Admissions are now open for the upcoming academic year. Discover your potential through the timeless art of Bharatanatyam.
        </p>
        <button className="inline-flex items-center gap-2.5 px-11 py-4 bg-brand-gold text-[#0b1f1c] rounded-full font-medium tracking-[2px] uppercase text-[13px] hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.3)] transition-all">
          Apply Now <ArrowRight size={16} />
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
