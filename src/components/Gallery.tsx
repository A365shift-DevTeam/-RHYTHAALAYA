import React from 'react';
import { motion } from 'motion/react';
import img1 from '../images/gallery/1.jpeg';
import img2 from '../images/gallery/2.jpeg';
import img3 from '../images/gallery/3.jpeg';
import img4 from '../images/gallery/4.jpeg';
import img5 from '../images/gallery/5.jpeg';
import img6 from '../images/gallery/6.jpeg';

const Gallery = () => {
  const items = [
    { label: 'Nritta', span: 'col-span-1 md:col-span-2', aspect: 'aspect-[1/1.2] md:aspect-[2/1.2]', image: img3 },
    { label: 'Abhinaya', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: img6 },
    { label: 'Studio', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: img5 },
    { label: 'Arangetram', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: img1 },
    { label: 'Ensemble', span: 'col-span-1 md:col-span-2', aspect: 'aspect-[1/1.2] md:aspect-[2/1.2]', image: img4 },
    { label: 'Stage', span: 'col-span-1', aspect: 'aspect-[1/1.2]', image: img2 },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-32 relative bg-black/20">
      {/* Ambient glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#1c4b45]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-brand-gold tracking-[3px] sm:tracking-[4px] uppercase text-[10px] sm:text-[11px] font-bold mb-3 block">
            Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[50px] text-white leading-[1.2] mb-4">
            Gallery
          </h2>
          <p className="text-white/80 font-light text-[14px] sm:text-[15px] max-w-2xl mx-auto">
           Glimpses of practice sessions and performances
          </p>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${item.span} ${item.aspect} bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex flex-col items-center justify-center gap-2 hover:scale-[1.02] hover:border-brand-gold/30 transition-all duration-400 cursor-pointer relative overflow-hidden group`}
            >
              <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10" />
              <div className="absolute inset-2.5 border border-dashed border-brand-gold/30 rounded-lg z-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
