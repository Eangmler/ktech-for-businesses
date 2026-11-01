import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] flex flex-col font-sans selection:bg-[#c8933a] selection:text-black">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Case Study */}
        <CaseStudy />

        {/* Section 3: Services & Pricing */}
        <Pricing />
      </main>

      {/* Section 4: Footer */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
