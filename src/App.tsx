import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Play, ArrowRight, MapPin, Mail, Phone, Camera, Globe, Award, Music, Check, User } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Classes', 'Gallery', 'Learning'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b1f1c]/80 backdrop-blur-md shadow-sm py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-widest uppercase text-white">
            RHYTHAALAYA
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-widest uppercase font-medium transition-colors hover:text-brand-gold text-white/90"
            >
              {item}
            </a>
          ))}
          <button className={`px-8 py-2.5 rounded-full border text-sm tracking-widest uppercase font-medium transition-all duration-300 ${isScrolled
              ? 'border-white/30 text-white hover:bg-white hover:text-[#0b1f1c]'
              : 'border-white/50 text-white hover:bg-white hover:text-[#0b1f1c]'
            }`}>
            Enquire Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="text-white" />
          ) : (
            <Menu className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0b1f1c] shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-b border-white/10"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-serif text-white border-b border-white/10 pb-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 px-6 py-3 rounded-full border border-white/30 text-white text-sm tracking-widest uppercase w-full font-medium hover:bg-white hover:text-[#0b1f1c] transition-colors">
              Enquire Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const mudras = [
  "Pataka", "Tripataka", "Ardhapataka", "Kartarimukha", "Mayura", 
  "Ardhachandra", "Arala", "Shukatundaka", "Mushti", "Shikharam", 
  "Kapittha", "Katakamukham", "Suchi", "Chandrakala", "Padmakosha", 
  "Sarpashirsha", "Mrigashirsha", "Simhamukha", "Kangula", "Alapadma", 
  "Chatura", "Bhramara", "Hamsasya", "Hamsapakshaka", "Samdamsha", 
  "Mukula", "Tamrachuda", "Trishula"
];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: '#0b2c2f',
        backgroundImage: "url('/images/pattern.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center w-full"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-6 py-2 border border-brand-gold/30 rounded-full text-[10px] md:text-[11px] tracking-[3px] uppercase text-brand-gold mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Bharatanatyam Dance Studio
          </div>

          <div className="inline-flex flex-col items-stretch w-max max-w-full">
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[110px] text-white leading-none tracking-[0.05em] mb-6 text-center">
              RHYTHAALAYA
            </h1>

            {/* Subtitle */}
            <div className="text-brand-gold text-sm md:text-base tracking-[0.3em] uppercase mb-10 h-6 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Dance Beyond Movement',
                  2000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Constrained Mudras Marquee */}
            <div className="w-full relative overflow-hidden flex whitespace-nowrap border-y border-brand-gold/20 py-2.5 mb-10 bg-transparent">
              <div className="absolute inset-y-0 left-0 w-8 md:w-16 bg-gradient-to-r from-[#0b2c2f] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-8 md:w-16 bg-gradient-to-l from-[#0b2c2f] to-transparent z-10 pointer-events-none" />
              
              <motion.div 
                 className="inline-flex items-center min-w-max"
                 animate={{ x: [0, "-50%"] }}
                 transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              >
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    {mudras.map((mudra, idx) => (
                      <React.Fragment key={`${i}-${idx}`}>
                        <span className="mx-5 md:mx-6 text-[10px] tracking-[4px] uppercase text-brand-gold/70 font-medium whitespace-nowrap">
                          {mudra}
                        </span>
                        <span className="text-brand-gold/40 text-[10px] flex-shrink-0">
                          •
                        </span>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Lower Section */}
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mt-4">
            {/* Silhouette Image - Positioned to the left */}
            <div className="absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 w-72 h-auto opacity-40 pointer-events-none mix-blend-screen">
              <img src="/images/dancer.png" alt="Dancer Silhouette" className="w-full h-full object-contain" />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center z-10">
              <h2 className="font-serif italic text-3xl md:text-[40px] text-brand-gold mb-10">
                Begin Your Dance Journey
              </h2>

              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-white/90 text-sm md:text-base max-w-3xl">
                <span>Certified Course</span>
                <span className="text-white/30">|</span>
                <span>Flexible Learning Options</span>
                <span className="text-white/30">|</span>
                <span>Eligibility 5 Years and Above</span>
                <span className="text-white/30">|</span>
                <span>Schedule Twice a Week</span>
              </div>

              <button className="mt-12 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold tracking-wider text-sm hover:bg-[#1fad53] hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all flex items-center gap-3">
                <Phone size={18} fill="currentColor" />
                9597302769
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative bg-black/20 border-t border-b border-white/5">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-full max-w-[400px] aspect-square rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center gap-3 relative overflow-hidden shadow-lg">
              <div className="absolute inset-4 border border-dashed border-brand-gold/40 rounded-full z-20 pointer-events-none" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Bharatanatyam_-_Durga_Swaminathan_01.jpg" alt="Artistic Director" className="absolute inset-0 w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute w-full max-w-[440px] aspect-square rounded-full border border-brand-gold/20 -z-10" />
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-12 w-32 h-32 rounded-full bg-brand-gold opacity-10 -z-10 blur-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-brand-gold tracking-[4px] uppercase text-[11px] font-bold mb-3 block">
              Our Philosophy
            </span>
            <h3 className="font-serif text-4xl md:text-[42px] text-white leading-[1.2] mb-6">
              Rooted in the <br /><span className="italic text-brand-gold">Natya Shastra</span>
            </h3>
            <div className="space-y-4 text-white/80 font-light text-[15px] leading-relaxed mb-8">
              <p>
                Bharatanatyam is more than a dance; it is a moving meditation, a rigorous discipline, and a profound storytelling medium. Our academy approaches this ancient art form with uncompromising standards of excellence.
              </p>
              <p>
                We balance the strict adherence to the traditional Margam (repertoire) with modern pedagogical techniques, ensuring our students develop not just technical perfection in Nritta (pure dance), but deep emotional resonance in Abhinaya (expression).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Global Certification",
                "World-Class Faculty",
                "Rigorous Syllabus",
                "Career Placement"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] font-medium text-white">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-brand-gold" strokeWidth={3} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
    },
    {
      title: "Arangetram & Beyond",
      desc: "Preparation for the solo debut performance. Advanced choreography, Nattuvangam training, and professional performance opportunities.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Bharatanatyam_dance_at_shilpakala_academy_06.jpg"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" referrerPolicy="no-referrer" />
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

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Bharatanatyam_-_Durga_Swaminathan_02.jpg"
            alt="Performance Video"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />

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
              <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700" referrerPolicy="no-referrer" />
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

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-bold tracking-[3px] uppercase text-white mb-4 block">
              RHYTHAALAYA
            </span>
            <p className="text-white/60 text-[13px] font-light leading-[1.7] max-w-sm">
              Elevating the classical art of Bharatanatyam through rigorous training, academic excellence, and global performance.
            </p>
          </div>

          <div>
            <h5 className="text-[11px] font-medium tracking-[3px] uppercase text-brand-gold mb-5">Programs</h5>
            <ul className="space-y-3 text-[13px] text-white/60">
              <li><a href="#curriculum" className="hover:text-white transition-colors">Foundation Course</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Margam Intensive</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Teacher Training</a></li>
              <li><a href="#curriculum" className="hover:text-white transition-colors">Summer Residency</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-medium tracking-[3px] uppercase text-brand-gold mb-5">Contact</h5>
            <ul className="space-y-3 text-[13px] text-white/60">
              <li><a href="tel:+12125550198" className="hover:text-white transition-colors">+1 (212) 555-0198</a></li>
              <li><a href="mailto:admissions@natya.edu" className="hover:text-white transition-colors">admissions@natya.edu</a></li>
              <li><span className="cursor-default">124 Heritage Arts District,<br />NY 10012</span></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] font-medium tracking-[3px] uppercase text-brand-gold mb-5">Follow Us</h5>
            <ul className="space-y-3 text-[13px] text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40">
          <p>&copy; {new Date().getFullYear()} Rhythaalaya Dance Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-[#0b1f1c] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Curriculum />
        <VideoSection />
        <Gallery />
        <EnterpriseFeatures />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
