import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#3d3a36] pt-16 pb-12 px-6 sm:px-12 lg:px-20 text-[#8a857e]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Block */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-12 border-b border-[#3d3a36]/60">
          {/* Brand & Descriptor */}
          <div className="max-w-md">
            <a href="#" className="font-serif text-2xl sm:text-3xl font-light italic text-[#e8e4de] tracking-tight block mb-3">
              kTech<span className="text-[#c8933a] font-normal not-italic">.</span>{' '}
              <span className="text-base sm:text-lg not-italic font-sans text-[#8a857e]">for Businesses</span>
            </a>
            <p className="font-sans text-xs sm:text-sm font-light text-[#8a857e] leading-relaxed">
              Enterprise IT architecture, Google Workspace administration, and WhatsApp CRM automation for forward-looking Ghanaian enterprises.
            </p>
          </div>

          {/* Key Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <a
              href="https://thekisseh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#e8e4de] hover:text-[#c8933a] transition-colors pb-1 border-b border-transparent hover:border-[#c8933a]"
            >
              <span>Back to thekisseh.com</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c8933a]" />
            </a>

            <a
              href="https://wa.me/233000000000?text=Hello%20kTech%2C%20I%20am%20reaching%20out%20from%20the%20website%20footer."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#c8933a] text-[#c8933a] hover:bg-[#c8933a] hover:text-black font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Contact via WhatsApp</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 border border-[#3d3a36] hover:border-[#c8933a] text-[#8a857e] hover:text-[#c8933a] transition-colors"
              title="Return to top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sub-footer / Operational metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] tracking-widest uppercase text-[#8a857e]">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-[#e8e4de]">kTech for Businesses</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[#e8e4de]">Accra HQ · Systems Active</span>
            </span>
            <span className="text-[#3d3a36]">·</span>
            <span className="text-[#8a857e]">GMT / UTC+0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
