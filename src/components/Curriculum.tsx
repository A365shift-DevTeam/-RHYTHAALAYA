import React from 'react';
import { motion } from 'motion/react';

const Curriculum = () => {
  const programs = [
    {
      title: "Foundation",
      desc: "Mastery of Adavus (basic steps), Talam (rhythm), and fundamental body conditioning. Building the structural core of the dancer.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Bharatanatyam_dance_at_shilpakala_academy_01.jpg"
    },
    {
      title: "Repertoire",
      desc: "Learning the traditional Margam: Alarippu, Jatiswaram, Shabdam, Varnam. Introduction to Abhinaya and complex rhythmic patterns.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bharatanatyam_dance_at_shilpakala_academy_03.jpg"
    }
  ];

  return (
    <section id="curriculum" className="py-24 md:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1c4b45]/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold tracking-[4px] uppercase text-[11px] font-bold mb-3 block">
            Academic Structure
          </span>
          <h2 className="font-serif text-4xl md:text-[50px] text-white leading-[1.2] mb-4">
            A Structured Path to Mastery
          </h2>
          <p className="text-white/80 font-light text-[15px] max-w-2xl mx-auto">
            Our curriculum is designed to transform passionate beginners into professional artists through a systematic, rigorous, and holistic educational approach.
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:border-brand-gold/30 transition-all duration-400 group"
            >
              <div className="w-full aspect-[16/10] bg-white/5 flex flex-col items-center justify-center gap-2 relative overflow-hidden">
                <div className="absolute inset-3 border border-dashed border-brand-gold/30 rounded-lg z-20 pointer-events-none" />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="font-serif text-[22px] font-medium text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {program.title}
                </h4>
                <p className="text-white/70 font-light text-[14px] leading-[1.6]">
                  {program.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
