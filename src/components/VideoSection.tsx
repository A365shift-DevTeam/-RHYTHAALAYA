import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#040c0a] border-t border-b border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-gold tracking-[4px] uppercase text-[11px] font-bold mb-3 block">
            Performance Reel
          </span>
          <h2 className="font-serif text-4xl md:text-[50px] text-white leading-[1.2] mb-4 mt-2">
            Experience the Art
          </h2>
          <div className="w-10 h-[2px] bg-brand-gold mx-auto mt-6" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] group cursor-pointer border border-white/5"
        >
          {/* Subtle gradient overlay for better text contrast and mood */}
          <div className="absolute inset-0 bg-[#0b1f1c]/30 group-hover:bg-[#0b1f1c]/10 transition-all duration-500 z-10" />



          {/* Center Play Button and Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <div className="w-[72px] h-[72px] bg-brand-gold rounded-full flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:bg-[#e0bb40] transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
              {/* Play icon offset slightly to look perfectly centered optically */}
              <Play className="w-8 h-8 text-[#0b1f1c] ml-1.5" fill="currentColor" />
            </div>
            <span className="text-brand-gold tracking-[3px] uppercase text-[12px] font-bold drop-shadow-md">
              Watch Performance
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
