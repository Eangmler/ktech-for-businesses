import React from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar({ activeIndex, onNavigate, theme, onToggleTheme }) {
  const navItems = [
    { label: 'Overview', index: 0 },
    { label: 'Methodology', index: 1 },
    { label: 'Case Study', index: 2 },
    { label: 'Engineering', index: 3 },
    { label: 'Connect', index: 4 },
  ];

  const isDark = theme === 'dark';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-10 py-2.5 sm:py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Apple Style Brand Lockup */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-2 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#1c1c1e] to-[#2c2c2e] border dark:border-white/15 border-black/10 flex items-center justify-center shadow-md group-hover:scale-105 transition-all">
              <span className="font-semibold text-white text-xs sm:text-sm font-sans">k</span>
            </div>
            <div>
              <div className="font-semibold text-xs sm:text-sm tracking-tight dark:text-white text-zinc-900 flex items-center gap-1">
                <span>kTech</span>
                <span className="text-[9px] px-1.5 py-0.2 rounded-full dark:bg-white/10 bg-black/5 dark:text-white/70 text-zinc-600 font-mono">
                  B2B
                </span>
              </div>
              <div className="text-[9px] sm:text-[10px] dark:text-[#86868b] text-zinc-500 tracking-normal font-sans -mt-0.5 hidden xs:block">
                Systems &amp; Automation
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center dark:bg-black/40 bg-white/70 backdrop-blur-2xl border dark:border-white/10 border-black/10 rounded-full p-1 shadow-apple-card">
            {navItems.map((item) => (
              <button
                key={item.index}
                onClick={() => onNavigate(item.index)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                  activeIndex === item.index
                    ? 'dark:bg-white/20 bg-black/10 dark:text-white text-zinc-900 shadow-sm'
                    : 'dark:text-[#86868b] text-zinc-500 dark:hover:text-[#f5f5f7] hover:text-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Actions: Theme Switcher + thekisseh.com + CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Switcher Toggle (Dark / Light) */}
          <button
            onClick={onToggleTheme}
            className="p-1.5 sm:p-2 rounded-full dark:bg-white/10 bg-black/5 hover:dark:bg-white/20 hover:bg-black/10 border dark:border-white/15 border-black/10 dark:text-white text-zinc-900 transition-all duration-300 shadow-sm"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} Theme`}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-300" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-zinc-700" />
            )}
          </button>

          {/* thekisseh.com link */}
          <a
            href="https://thekisseh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs dark:text-[#86868b] text-zinc-500 dark:hover:text-white hover:text-zinc-900 px-3 py-1.5 rounded-full dark:hover:bg-white/5 hover:bg-black/5 transition-colors"
          >
            <span>thekisseh.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          {/* Quick WhatsApp CTA Pill */}
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-white text-black hover:bg-zinc-200 text-xs font-semibold tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-black" />
            <span className="hidden xs:inline">Book Call</span>
            <span className="xs:hidden">Chat</span>
          </a>
        </div>
      </div>
    </header>
  );
}
