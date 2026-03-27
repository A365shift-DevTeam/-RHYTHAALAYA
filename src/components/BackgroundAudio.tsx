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
      
      {/* Ringing / shaking + orbit wave keyframes */}
      <style>{`
        @keyframes shake-ring {
          0%   { transform: rotate(0deg); }
          10%  { transform: rotate(14deg); }
          20%  { transform: rotate(-14deg); }
          30%  { transform: rotate(10deg); }
          40%  { transform: rotate(-10deg); }
          50%  { transform: rotate(6deg); }
          60%  { transform: rotate(-6deg); }
          70%  { transform: rotate(2deg); }
          80%  { transform: rotate(-2deg); }
          90%  { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .music-shake {
          animation: shake-ring 1.2s ease-in-out infinite;
          transform-origin: top center;
        }
        @keyframes orbit-wave {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.2);
            opacity: 0;
          }
        }
        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          transform: translate(-50%, -50%) scale(1);
          animation: orbit-wave 2.4s ease-out infinite;
          pointer-events: none;
        }
        .orbit-ring:nth-child(2) {
          animation-delay: 0.8s;
        }
        .orbit-ring:nth-child(3) {
          animation-delay: 1.6s;
        }
      `}</style>

      {/* Wrapper for orbit rings + button */}
      <div className="relative w-12 h-12">
        {/* Orbit wave rings */}
        <div className="orbit-ring" />
        <div className="orbit-ring" />
        <div className="orbit-ring" />

        <motion.button
          onClick={toggleAudio}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/25 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/35 transition-all group"
          aria-label={isMuted ? "Unmute background music" : "Mute background music"}
        >
          <AnimatePresence mode="wait">
            {isMuted ? (
              <motion.div
                key="muted"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative music-shake"
              >
                <Music className="w-6 h-6 text-white/80 group-hover:text-white" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-[1.5px] bg-white/70 rotate-45 group-hover:bg-white/90 transition-colors" />
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
    </div>
  );
};

export default BackgroundAudio;
