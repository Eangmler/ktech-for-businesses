import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, HardDrive, Cpu } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero({ onNext, isActive }) {
  const [activeTiles, setActiveTiles] = useState({
    workspace: true,
    whatsapp: true,
    chrome: true,
    crm: true,
  });

  const toggleTile = (key) => {
    setActiveTiles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className={`w-full h-full flex items-center justify-center px-5 sm:px-10 lg:px-20 pt-16 pb-20 sm:pb-24 relative overflow-hidden ${isActive ? 'animate-slide-enter' : ''}`}>
      {/* Apple Keynote Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#2997ff]/12 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#f5a623]/8 blur-[90px] sm:blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
        {/* Left Column: Keynote Typography & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Apple Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 backdrop-blur-xl mb-3 sm:mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-medium tracking-tight dark:text-[#f5f5f7] text-zinc-900">
              Enterprise Systems &amp; Automation
            </span>
            <span className="opacity-30">|</span>
            <span className="text-[10px] sm:text-xs dark:text-[#86868b] text-zinc-500">Accra, GH</span>
          </div>

          {/* Headline - Scaled cleanly on phones */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.12] sm:leading-[1.08] dark:text-white text-zinc-950 mb-3 sm:mb-6">
            Enterprise-Grade IT &amp;{' '}
            <span className="bg-gradient-to-r from-[#2997ff] via-[#70b6ff] to-[#deb368] bg-clip-text text-transparent">
              Automation
            </span>{' '}
            for Growing Ghanaian Businesses.
          </h1>

          {/* Subheadline - uncluttered and readable */}
          <p className="text-xs sm:text-base lg:text-lg dark:text-[#86868b] text-zinc-600 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-8">
            Stop losing sales to unread WhatsApps, messy Gmail accounts, and disorganized staff. We
            build the systems that run your business while you sleep.
          </p>

          {/* Primary CTA and Secondary Navigation */}
          <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 w-full sm:w-auto">
            {/* Primary WhatsApp CTA Button */}
            <a
              href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white dark:bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-black" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Next Slide Pill */}
            <button
              onClick={onNext}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 border dark:border-white/10 border-black/10 text-xs sm:text-sm font-medium dark:text-[#f5f5f7] text-zinc-900 tracking-tight backdrop-blur-xl transition-all duration-300 group"
            >
              <span>Explore Methodology</span>
              <ArrowRight className="w-3.5 h-3.5 dark:text-[#86868b] text-zinc-500 group-hover:dark:text-white group-hover:text-black group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {/* Mobile-Only Ultra-Clean Status Strip (Replaces bulky 4-tile card on phones) */}
          <div className="flex lg:hidden items-center gap-2 mt-4 pt-3 border-t dark:border-white/10 border-black/10 text-[11px] dark:text-[#86868b] text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse"></span>
            <span>Google Workspace · WhatsApp CRM · Cloud IAM</span>
          </div>
        </div>

        {/* Right Column: Apple Home Dynamic Accessory Tiles (Desktop / Tablet) */}
        <div className="hidden lg:block lg:col-span-5 w-full z-10">
          <div className="apple-glass rounded-apple p-6 sm:p-7 relative shadow-apple-card">
            {/* Apple Home Section Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b dark:border-white/10 border-black/10">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#f5a623] shadow-[0_0_10px_#f5a623]"></div>
                <span className="text-xs font-semibold uppercase tracking-wider dark:text-white text-zinc-900">
                  kTech Home Dashboard
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#30d158] bg-[#30d158]/10 px-2 py-0.5 rounded-full border border-[#30d158]/20">
                4 Nodes Synced
              </span>
            </div>

            {/* 2x2 Apple Home Control Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => toggleTile('workspace')}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTiles.workspace
                    ? 'dark:bg-white/15 bg-white border-white/30 dark:border-white/30 border-black/10 shadow-md'
                    : 'dark:bg-white/5 bg-black/5 dark:border-white/5 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-1.5 rounded-xl ${activeTiles.workspace ? 'bg-[#2997ff] text-white' : 'dark:bg-white/10 bg-black/10 dark:text-white/50 text-zinc-400'}`}>
                    <HardDrive className="w-3.5 h-3.5" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${activeTiles.workspace ? 'bg-[#30d158]' : 'bg-zinc-400 dark:bg-zinc-600'}`}></div>
                </div>
                <div className="text-xs font-semibold dark:text-white text-zinc-900">Google Workspace</div>
                <div className="text-[10px] dark:text-[#86868b] text-zinc-500">Centralized Admin</div>
              </div>

              <div
                onClick={() => toggleTile('whatsapp')}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTiles.whatsapp
                    ? 'dark:bg-white/15 bg-white border-white/30 dark:border-white/30 border-black/10 shadow-md'
                    : 'dark:bg-white/5 bg-black/5 dark:border-white/5 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-1.5 rounded-xl ${activeTiles.whatsapp ? 'bg-[#30d158] text-black' : 'dark:bg-white/10 bg-black/10 dark:text-white/50 text-zinc-400'}`}>
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${activeTiles.whatsapp ? 'bg-[#30d158]' : 'bg-zinc-400 dark:bg-zinc-600'}`}></div>
                </div>
                <div className="text-xs font-semibold dark:text-white text-zinc-900">WhatsApp Bot</div>
                <div className="text-[10px] dark:text-[#86868b] text-zinc-500">&lt;3s Auto-Closing</div>
              </div>

              <div
                onClick={() => toggleTile('chrome')}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTiles.chrome
                    ? 'dark:bg-white/15 bg-white border-white/30 dark:border-white/30 border-black/10 shadow-md'
                    : 'dark:bg-white/5 bg-black/5 dark:border-white/5 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-1.5 rounded-xl ${activeTiles.chrome ? 'bg-[#f5a623] text-black' : 'dark:bg-white/10 bg-black/10 dark:text-white/50 text-zinc-400'}`}>
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${activeTiles.chrome ? 'bg-[#30d158]' : 'bg-zinc-400 dark:bg-zinc-600'}`}></div>
                </div>
                <div className="text-xs font-semibold dark:text-white text-zinc-900">Chrome Cloud IAM</div>
                <div className="text-[10px] dark:text-[#86868b] text-zinc-500">Zero File Leaks</div>
              </div>

              <div
                onClick={() => toggleTile('crm')}
                className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTiles.crm
                    ? 'dark:bg-white/15 bg-white border-white/30 dark:border-white/30 border-black/10 shadow-md'
                    : 'dark:bg-white/5 bg-black/5 dark:border-white/5 border-transparent opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className={`p-1.5 rounded-xl ${activeTiles.crm ? 'bg-purple-500 text-white' : 'dark:bg-white/10 bg-black/10 dark:text-white/50 text-zinc-400'}`}>
                    <Cpu className="w-3.5 h-3.5" />
                  </div>
                  <div className={`w-2 h-2 rounded-full ${activeTiles.crm ? 'bg-[#30d158]' : 'bg-zinc-400 dark:bg-zinc-600'}`}></div>
                </div>
                <div className="text-xs font-semibold dark:text-white text-zinc-900">Cloud POS &amp; CRM</div>
                <div className="text-[10px] dark:text-[#86868b] text-zinc-500">Realtime Ledgers</div>
              </div>
            </div>

            {/* Apple Home Accessory Info Bar */}
            <div className="mt-4 pt-3 border-t dark:border-white/10 border-black/10 flex items-center justify-between text-[10px] dark:text-[#86868b] text-zinc-500">
              <span>Interactive systems simulation</span>
              <span className="dark:text-white text-zinc-900 font-mono font-medium">100% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
