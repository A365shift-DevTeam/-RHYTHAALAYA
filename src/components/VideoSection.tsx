import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import vid1 from '../images/Vid1.mp4';
import vid2 from '../images/Vid2.mp4';

const HoverVideo = ({ src, delay }: { src: string; delay: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.error("Video play failed:", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] group cursor-pointer border border-white/10 bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 bg-[#0b1f1c]/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />

      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="w-[64px] h-[64px] bg-brand-gold rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
          <Play className="w-7 h-7 text-[#0b1f1c] ml-1.5" fill="currentColor" />
        </div>
        <span className="text-brand-gold tracking-[3px] uppercase text-[11px] font-bold drop-shadow-md">
          Hover to Play
        </span>
      </div>
    </motion.div>
  );
};

const VideoSection = () => {
  return (
    <section className="py-32 md:py-40 relative bg-[#040c0a] border-t border-b border-white/5 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
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

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto">
          <HoverVideo src={vid1} delay={0} />
          <HoverVideo src={vid2} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
