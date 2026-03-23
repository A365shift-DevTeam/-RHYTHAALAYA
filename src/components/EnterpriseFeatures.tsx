import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe, Music } from 'lucide-react';

const EnterpriseFeatures = () => {
  const features = [
    {
      title: 'Global Certification',
      desc: 'Internationally recognized grading system and diplomas, ensuring our students meet global standards of classical arts education.',
      icon: Award
    },
    {
      title: 'Hybrid Conservatory',
      desc: 'State-of-the-art virtual studios complementing physical classes, allowing students worldwide to access our elite curriculum.',
      icon: Globe
    },
    {
      title: 'Live Accompaniment',
      desc: 'Training with professional Carnatic musicians to develop a profound understanding of rhythm, melody, and musicality.',
      icon: Music
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold tracking-[4px] uppercase text-[11px] font-bold mb-3 block">
            The Natya Advantage
          </span>
          <h2 className="font-serif text-4xl md:text-[50px] text-white leading-[1.2] mb-4">
            Enterprise Excellence
          </h2>
          <p className="text-white/80 font-light text-[15px] max-w-2xl mx-auto">
            We provide a world-class infrastructure and academic framework to support the development of professional artists.
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-400 border border-white/10 hover:border-brand-gold/30 text-center group"
              >
                <div className="w-14 h-14 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon className="text-brand-gold w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-2xl font-medium text-white mb-3">{feature.title}</h4>
                <p className="text-white/70 font-light text-[14px] leading-[1.6]">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
