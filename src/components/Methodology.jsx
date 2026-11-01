import React from 'react';
import { Search, Zap, Activity, ArrowRight } from 'lucide-react';

export default function Methodology({ onNext, isActive }) {
  const pillars = [
    {
      phase: '01',
      name: 'Discover',
      tag: 'Audit & Map',
      color: '#f5a623',
      bgGlow: 'rgba(245, 166, 35, 0.12)',
      borderGlow: 'rgba(245, 166, 35, 0.35)',
      icon: Search,
      copy: 'We map your daily operations to identify the repetitive, manual tasks and unmonitored channels that are draining your revenue.',
    },
    {
      phase: '02',
      name: 'Execute',
      tag: 'Architect & Automate',
      color: '#2997ff',
      bgGlow: 'rgba(41, 151, 255, 0.12)',
      borderGlow: 'rgba(41, 151, 255, 0.35)',
      icon: Zap,
      copy: 'We deploy custom webhooks, low-code apps, automated WhatsApp CRM bots, and Google Workspace architecture to digitize the workflow.',
    },
    {
      phase: '03',
      name: 'Monitor',
      tag: 'Security & Uptime',
      color: '#30d158',
      bgGlow: 'rgba(48, 209, 88, 0.12)',
      borderGlow: 'rgba(48, 209, 88, 0.35)',
      icon: Activity,
      copy: 'We provide dedicated monthly oversight to manage endpoint security, cloud infrastructure, and 100% system uptime.',
    },
  ];

  return (
    <div className={`w-full h-full flex items-center justify-center px-5 sm:px-10 lg:px-20 pt-16 pb-20 sm:pb-24 relative overflow-hidden ${isActive ? 'animate-slide-enter' : ''}`}>
      {/* Apple Ambient Keynote Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[500px] bg-[#2997ff]/6 blur-[120px] sm:blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center max-h-[82vh] z-10">
        {/* Apple Section Header */}
        <div className="max-w-2xl mb-4 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border dark:border-white/10 border-black/10 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-pulse"></span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-tight uppercase font-mono text-[#2997ff]">
              Operating Philosophy
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest leading-tight dark:text-white text-zinc-900">
            The D.E.M.{' '}
            <span className="bg-gradient-to-r from-[#2997ff] via-[#70b6ff] to-[#deb368] bg-clip-text text-transparent">
              Engineering Framework
            </span>
          </h2>
          <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 mt-1 sm:mt-2 font-normal hidden xs:block">
            A battle-tested methodology designed to replace manual bottlenecks with resilient systems.
          </p>
        </div>

        {/* 3-Column Responsive Cards - Uncluttered on phones */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.phase}
                className="apple-glass-card rounded-2xl sm:rounded-apple p-4 sm:p-7 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Header: Phase and Icon */}
                  <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                    <span
                      className="font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/5 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10"
                      style={{ color: p.color }}
                    >
                      {p.phase} · {p.name}
                    </span>

                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        backgroundColor: p.bgGlow,
                        borderColor: p.borderGlow,
                        color: p.color,
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Title & Copy */}
                  <h3 className="text-base sm:text-2xl font-bold tracking-tight dark:text-white text-zinc-900 mb-1 sm:mb-2">
                    {p.name}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed dark:text-[#f5f5f7] text-zinc-700 font-normal">
                    {p.copy}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Indicator & Next Button */}
        <div className="mt-4 sm:mt-8 flex items-center justify-between pt-2 border-t dark:border-white/10 border-black/10">
          <span className="text-[11px] sm:text-xs dark:text-[#86868b] text-zinc-500">
            Swipe or tap to review real-world Case Study
          </span>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 text-xs font-semibold dark:text-white text-zinc-900 hover:text-[#2997ff] dark:hover:text-[#2997ff] transition-colors group"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
