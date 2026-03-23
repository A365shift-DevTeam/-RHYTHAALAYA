import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const items = [
    { label: 'Nritta', span: 'col-span-1 md:col-span-2', aspect: 'aspect-[1/1.2] md:aspect-[2/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Bharatanatyam_dance_at_shilpakala_academy_07.jpg' },
    { label: 'Abhinaya', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Bharatanatyam_-_Durga_Swaminathan_02.jpg' },
    { label: 'Studio', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Bharatanatyam_dance_at_shilpakala_academy_05.jpg' },
    { label: 'Arangetram', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Bharatanatyam_dance_at_shilpakala_academy_02.jpg' },
    { label: 'Ensemble', span: 'col-span-1 md:col-span-2', aspect: 'aspect-[1/1.2] md:aspect-[2/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Bharatanatyam_dance_at_shilpakala_academy_08.jpg' },
    { label: 'Stage', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Bharatanatyam_dance_at_shilpakala_academy_09.jpg' },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 relative bg-black/20">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1c4b45]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold tracking-[4px] uppercase text-[11px] font-bold mb-3 block">
            Moments
          </span>
          <h2 className="font-serif text-4xl md:text-[50px] text-white leading-[1.2] mb-4">
            Gallery
          </h2>
          <p className="text-white/80 font-light text-[15px] max-w-2xl mx-auto">
            Glimpses of performances, practice sessions, and the beauty of Bharatanatyam at Natya.
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${item.span} ${item.aspect} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[1.02] hover:border-brand-gold/30 transition-all duration-400 cursor-pointer relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10" />
              <div className="absolute inset-2.5 border border-dashed border-brand-gold/30 rounded-lg z-20 pointer-events-none" />
              <span className="absolute bottom-6 text-[11px] tracking-[3px] uppercase text-brand-gold z-30 font-medium drop-shadow-md">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
