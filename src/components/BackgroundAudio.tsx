import React, { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import audioFile from '../images/Audio.m4a';

const BackgroundAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Attempt autoplay if browser allows (usually only if muted)
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
        setIsPlaying(true);
        audioRef.current.play();
      } else {
        audioRef.current.muted = true;
        setIsMuted(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-24 right-6 sm:bottom-28 sm:right-6 z-[100]">
      <audio
        ref={audioRef}
        src={audioFile}
        loop
        autoPlay
        muted={isMuted}
        className="hidden"
      />
      
      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all group"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative"
            >
              <Music className="w-5 h-5 text-white/40 group-hover:text-white/70" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-white/40 rotate-45 group-hover:bg-white/60 transition-colors" />
            </motion.div>
          ) : (
            <motion.div
              key="playing"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative"
            >
              <Music className="w-5 h-5" style={{ color: "rgb(35, 144, 154)" }} />
              <span className="absolute -inset-1 rounded-full border border-[rgb(35,144,154)] animate-ping opacity-20" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default BackgroundAudio;
