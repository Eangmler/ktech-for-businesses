import React from 'react';
import { ArrowUpRight, ChevronRight, Layers } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ activeIndex, onNavigate }) {
  const navItems = [
    { label: 'Overview', index: 0 },
    { label: 'Case Study', index: 1 },
    { label: 'Services & Pricing', index: 2 },
    { label: 'Connect', index: 3 },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Apple Style Brand Lockup */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1c1c1e] to-[#2c2c2e] border border-white/15 flex items-center justify-center shadow-md group-hover:border-white/30 transition-all">
              <span className="font-semibold text-white text-sm font-sans">k</span>
            </div>
            <div>
              <div className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                <span>kTech</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 text-white/70 font-mono">
                  B2B
                </span>
              </div>
              <div className="text-[10px] text-[#86868b] tracking-normal font-sans -mt-0.5">
                Systems &amp; Automation
              </div>
            </div>
          </button>

          {/* Apple Segmented Header Nav (Desktop) */}
          <nav className="hidden md:flex items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full p-1 shadow-apple-card">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => onNavigate(item.index)}
                className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeIndex === item.index
                    ? 'bg-white/20 text-white shadow-sm'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Back to thekisseh.com link */}
          <a
            href="https://thekisseh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs text-[#86868b] hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <span>thekisseh.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Apple Store WhatsApp Pill Button */}
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-normal transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-black" />
            <span className="hidden xs:inline">Chat on WhatsApp</span>
            <span className="xs:hidden">Chat</span>
          </a>
        </div>
      </div>
    </header>
  );
}
