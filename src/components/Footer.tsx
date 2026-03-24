import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/20 backdrop-blur-md border-t border-white/10 text-white pt-12 sm:pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">
          <div className="lg:col-span-2">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[2px] sm:tracking-[3px] uppercase text-white mb-4 block">
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
              <li><a href="https://wa.me/919019860818" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+91 90198 60818</a></li>
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

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/40 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Rhythaalaya Dance Studio. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
