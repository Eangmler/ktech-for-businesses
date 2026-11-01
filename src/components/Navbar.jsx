import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 lg:px-20 ${
        scrolled
          ? 'py-4 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#3d3a36]/60 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl sm:text-3xl font-light italic tracking-tight text-[#e8e4de] group-hover:text-white transition-colors">
            kTech<span className="text-[#c8933a] font-normal not-italic">.</span>
          </span>
          <span className="font-mono text-[10px] tracking-widest text-[#8a857e] uppercase border-l border-[#3d3a36] pl-2 hidden sm:inline-block">
            For Businesses
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-[#8a857e]">
          <a
            href="#case-study"
            className="hover:text-[#e8e4de] hover:border-b border-[#c8933a] pb-0.5 transition-all"
          >
            Case Study
          </a>
          <a
            href="#pricing"
            className="hover:text-[#e8e4de] hover:border-b border-[#c8933a] pb-0.5 transition-all"
          >
            Services & Pricing
          </a>
          <a
            href="https://thekisseh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#8a857e] hover:text-[#c8933a] transition-colors"
          >
            thekisseh.com
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#c8933a] text-[#c8933a] hover:bg-[#c8933a] hover:text-black font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#e8e4de] hover:text-[#c8933a] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#0a0a0a]/98 backdrop-blur-xl border-t border-[#3d3a36] px-8 py-10 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-[11px] tracking-widest text-[#8a857e] uppercase">
              Navigation
            </span>
            <a
              href="#case-study"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl italic text-[#e8e4de] hover:text-[#c8933a] transition-colors"
            >
              Case Study
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl italic text-[#e8e4de] hover:text-[#c8933a] transition-colors"
            >
              Services & Pricing
            </a>
            <a
              href="https://thekisseh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-3 border-t border-b border-[#3d3a36] font-mono text-xs uppercase tracking-widest text-[#8a857e] hover:text-[#c8933a]"
            >
              <span>Back to thekisseh.com</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-6">
            <a
              href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#c8933a] text-black font-sans text-xs font-semibold tracking-widest uppercase hover:bg-white transition-all shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
