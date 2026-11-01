import React from 'react';
import { Search, Zap, Activity, ArrowRight, CheckCircle2, Shield, Compass, Cpu } from 'lucide-react';

export default function Methodology({ onNext, isDark }) {
  const pillars = [
    {
      phase: '01',
      name: 'Discover',
      tag: 'Audit & Map',
      color: '#f5a623', // Apple Warm Amber
      bgGlow: 'rgba(245, 166, 35, 0.12)',
      borderGlow: 'rgba(245, 166, 35, 0.35)',
      icon: Search,
      copy: 'We map your daily operations to identify the repetitive, manual tasks and unmonitored channels that are draining your revenue.',
      deliverables: [
        'End-to-End Workflow Mapping',
        'Friction & Leak Point Diagnosis',
        'Systems Redundancy Audit',
      ],
    },
    {
      phase: '02',
      name: 'Execute',
      tag: 'Architect & Automate',
      color: '#2997ff', // Apple Electric Blue
      bgGlow: 'rgba(41, 151, 255, 0.12)',
      borderGlow: 'rgba(41, 151, 255, 0.35)',
      icon: Zap,
      copy: 'We deploy custom webhooks, low-code apps, automated WhatsApp CRM bots, and Google Workspace architecture to digitize the workflow.',
      deliverables: [
        'Custom Webhooks & Low-Code Apps',
        'Automated WhatsApp CRM Flows',
        'Google Workspace IAM Architecture',
      ],
    },
    {
      phase: '03',
      name: 'Monitor',
      tag: 'Security & Uptime',
      color: '#30d158', // Apple Active Green
      bgGlow: 'rgba(48, 209, 88, 0.12)',
      borderGlow: 'rgba(48, 209, 88, 0.35)',
      icon: Activity,
      copy: 'We provide dedicated monthly oversight to manage endpoint security, cloud infrastructure, and 100% system uptime.',
      deliverables: [
        'Endpoint Policy & Security Control',
        'Cloud Infrastructure Health Checks',
        '100% Production System Uptime',
      ],
    },
  ];

  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-24 snap-start relative overflow-hidden">
      {/* Apple Ambient Keynote Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-[#2997ff]/6 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full max-h-[86vh]">
        {/* Apple Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 dark:border-white/10 border-black/10 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#2997ff] animate-pulse"></span>
            <span className="text-[11px] font-semibold tracking-tight uppercase font-mono text-[#2997ff]">
              Operating Philosophy
            </span>
            <span className="opacity-30">|</span>
            <span className="text-[11px] text-[#86868b]">Turnkey Delivery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest leading-tight dark:text-white text-zinc-900">
            The D.E.M.{' '}
            <span className="bg-gradient-to-r from-[#2997ff] via-[#70b6ff] to-[#deb368] bg-clip-text text-transparent">
              Engineering Framework
            </span>
          </h2>
          <p className="text-sm sm:text-base dark:text-[#86868b] text-zinc-600 mt-2 font-normal max-w-2xl">
            A battle-tested methodology designed to replace ad-hoc human workarounds with resilient, zero-friction systems.
          </p>
        </div>

        {/* 3-Column Feature Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.phase}
                className="apple-glass-card rounded-apple p-7 flex flex-col justify-between relative group"
              >
                <div>
                  {/* Top Header: Phase number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10" style={{ color: p.color }}>
                      {p.phase} · {p.tag}
                    </span>

                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: p.bgGlow,
                        borderColor: p.borderGlow,
                        color: p.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold tracking-tight dark:text-white text-zinc-900 mb-3">
                    {p.name}
                  </h3>

                  {/* Exact Framework Copy */}
                  <p className="text-sm leading-relaxed dark:text-[#f5f5f7] text-zinc-700 font-normal">
                    {p.copy}
                  </p>
                </div>

                {/* Micro Deliverables */}
                <div className="mt-6 pt-5 border-t dark:border-white/10 border-black/10 space-y-2">
                  {p.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs dark:text-[#86868b] text-zinc-500 font-normal">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color }}></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Indicator & Next Button */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs dark:text-[#86868b] text-zinc-500">
            Phase 02: Explore real-world implementation case study
          </span>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 text-xs font-semibold dark:text-white text-zinc-900 hover:text-[#2997ff] dark:hover:text-[#2997ff] transition-colors group"
          >
            <span>Review Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
