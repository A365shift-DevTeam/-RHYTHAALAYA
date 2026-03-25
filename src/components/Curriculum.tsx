import React from 'react';
import { motion } from 'motion/react';
import curriculumImage from '../images/image 2.png';

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-16 sm:py-20 md:py-32 relative bg-black/20 border-t border-b border-white/5">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-brand-gold tracking-[3px] sm:tracking-[4px] uppercase text-[10px] sm:text-[11px] font-bold mb-3 block">
              Kathak Program
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-[42px] text-white leading-[1.2] mb-5 sm:mb-6">
              Classical Kathak <br /><span className="italic text-brand-gold">Program Overview</span>
            </h3>
            <div className="space-y-4 text-white/80 font-light text-[14px] sm:text-[15px] leading-relaxed mb-7 sm:mb-8">
              <p>
                Trained in Kathak for over 15 years under Smitha Srinivasan, and currently a student at Nadam under Nandini Mehta and Murali Mohan. She has performed Kathak on various platforms and focuses on building strong foundations in technique, rhythm, and expression.
              </p>
              <p>
                Classes emphasize pure Classical Kathak, with semi-classical and Bollywood Kathak introduced occasionally.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-7 sm:mt-8">
              {[
                
                'Training lineage under renowned gurus',
                'Strong focus on technique, rhythm, and expression',
                'Pure Classical Kathak with occasional semi-classical and Bollywood exposure'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] font-medium text-white">
                  <div className="w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 sm:mt-8 w-full text-[13px] sm:text-[14px] text-white/80 text-left">
              <p><span className="text-white font-medium">Who Can Join:</span> Beginners, Adults and Kids</p>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex flex-col justify-center items-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[310px] md:max-w-[340px] aspect-square">
              <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-lg">
                <div className="absolute inset-4 border border-dashed border-brand-gold/40 rounded-full z-20 pointer-events-none" />
                <img src={curriculumImage} alt="Eshanya Bhat Kathak Program" className="absolute inset-0 w-full h-full object-cover object-center" />
              </div>
              <div className="absolute -inset-[6%] rounded-full border border-brand-gold/20 pointer-events-none" />
              <div className="absolute -inset-[9%] rounded-full border border-brand-gold/10 blur-[1px] pointer-events-none" />
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-28 h-28 rounded-full bg-brand-gold opacity-10 blur-2xl pointer-events-none" />
            </div>

            <div className="text-center mt-12 sm:mt-14">
              <p className="font-serif text-2xl sm:text-3xl text-white">Eshanya Bhat</p>
              <p className="text-brand-gold text-[11px] sm:text-[12px] tracking-[3px] uppercase mt-2">Kathak Artist and Instructor</p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
