import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Curriculum from './components/Curriculum';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import EnterpriseFeatures from './components/EnterpriseFeatures';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
