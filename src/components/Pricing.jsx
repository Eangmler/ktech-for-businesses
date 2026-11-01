import React from 'react';
import { Check, Sparkles, ArrowRight, Layers, Cpu, ShieldCheck, Database, Bot, BarChart3, Radio } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Pricing({ onNext }) {
  const partAFeatures = [
    'Google Workspace Centralization',
    'Custom Domain & DNS Management',
    'Chrome Browser Cloud Management',
    'Staff Onboarding & Access Handover',
  ];

  const partBFeatures = [
    { title: 'AppSheet Workflows & Internal Tools', icon: Layers },
    { title: 'Looker Studio BI Dashboards', icon: BarChart3 },
    { title: 'Automated WhatsApp API CRMs', icon: Bot },
    { title: 'Odoo / ERP Cloud Integrations', icon: Database },
    { title: 'Absolute Zero-Trust Endpoint Security', icon: ShieldCheck },
    { title: 'Fleet & Multi-Site Network Monitoring', icon: Radio },
  ];

  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-24 snap-start relative overflow-hidden">
      {/* Apple Keynote Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[#2997ff]/8 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full max-h-[88vh]">
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border dark:border-white/10 border-black/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2997ff]"></span>
            <span className="text-[11px] font-semibold tracking-tight uppercase font-mono text-[#2997ff]">
              Engineering Architecture
            </span>
            <span className="opacity-30">|</span>
            <span className="text-[11px] dark:text-[#86868b] text-zinc-500">Custom Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest dark:text-white text-zinc-900">
            Systems Engineering &amp; Retainers
          </h2>
          <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 mt-1.5 font-normal">
            Moving beyond rigid tiers. A solid foundation paired with tailor-made enterprise modules.
          </p>
        </div>

        {/* 2-Part Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* ========================================================
              PART A: The Core Foundation (Left Side / 5 Columns)
          ======================================================== */}
          <div className="lg:col-span-5 apple-glass-card rounded-apple p-7 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#86868b] font-semibold px-2.5 py-1 rounded-full bg-white/5 dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10">
                  Part A · Baseline
                </span>
                <span className="text-xs text-[#86868b] font-mono">Prerequisite</span>
              </div>

              {/* Exact Title & Description */}
              <h3 className="text-2xl font-bold dark:text-white text-zinc-900 tracking-tight">
                Phase 1: Core Infrastructure Setup
              </h3>
              <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 mt-1.5 leading-relaxed font-normal">
                The mandatory baseline for modern business operations.
              </p>

              {/* Price Display */}
              <div className="py-4 my-4 border-t border-b dark:border-white/10 border-black/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] mb-1">
                  Starting Investment
                </div>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight dark:text-white text-zinc-900 font-sans">
                    Starts at GH₵ 3,500 setup
                  </span>
                </div>
                <div className="mt-1 text-sm font-mono font-medium text-[#2997ff]">
                  + GH₵ 1,500 / monthly retainer
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 my-4">
                <div className="text-[10px] font-mono uppercase tracking-wider dark:text-[#86868b] text-zinc-500 font-semibold">
                  Included Baseline:
                </div>
                <ul className="space-y-2">
                  {partAFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs dark:text-[#f5f5f7] text-zinc-800">
                      <span className="p-0.5 mt-0.5 rounded-full shrink-0 bg-[#2997ff]/20 text-[#2997ff]">
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry for Phase 1 */}
            <div className="pt-3">
              <a
                href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20deploying%20Phase%201%20Core%20Infrastructure%20Setup."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full flex items-center justify-center gap-2 text-xs font-semibold tracking-tight bg-white/10 dark:bg-white/10 bg-black/5 hover:bg-white/20 dark:hover:bg-white/20 hover:bg-black/10 dark:text-white text-zinc-900 border dark:border-white/15 border-black/10 transition-all duration-300"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire on Phase 1</span>
              </a>
            </div>
          </div>

          {/* ========================================================
              PART B: Custom Enterprise Modules (Right Side / 7 Columns)
              Expansive & Visually Distinct
          ======================================================== */}
          <div className="lg:col-span-7 apple-glass rounded-apple p-7 sm:p-8 flex flex-col justify-between relative group border-2 border-[#2997ff] shadow-apple-glow dark:bg-zinc-900/90 bg-white/95">
            {/* Top Distinct Badge */}
            <div className="absolute -top-3.5 right-8 bg-[#2997ff] text-white text-[10px] font-bold tracking-wider uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 fill-white" />
              <span>Bespoke Engineering</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold px-2.5 py-1 rounded-full bg-[#2997ff]/10 border border-[#2997ff]/25">
                  Part B · Custom Modules
                </span>
                <span className="text-xs text-[#30d158] font-mono font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse"></span>
                  Modular Scaling
                </span>
              </div>

              {/* Exact Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-bold dark:text-white text-zinc-900 tracking-tight">
                Phase 2: Custom Systems &amp; Automation
              </h3>
              <p className="text-xs sm:text-sm dark:text-[#f5f5f7] text-zinc-700 mt-1.5 leading-relaxed font-normal max-w-xl">
                Scoped individually based on your operational complexity.
              </p>

              {/* Expansive Features Grid */}
              <div className="mt-6 mb-6">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#2997ff] font-semibold mb-3">
                  Available Enterprise Capability Modules:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {partBFeatures.map((feat, idx) => {
                    const FeatIcon = feat.icon;
                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl dark:bg-white/5 bg-zinc-100/80 border dark:border-white/10 border-black/5 flex items-center gap-3 hover:border-[#2997ff]/40 transition-colors"
                      >
                        <div className="p-2 rounded-xl bg-[#2997ff]/10 text-[#2997ff] shrink-0">
                          <FeatIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-medium dark:text-white text-zinc-900 leading-snug">
                          {feat.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20would%20like%20to%20Book%20a%20Systems%20Discovery%20Call%20for%20Phase%202%20Custom%20Automation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold tracking-tight bg-white dark:bg-white text-black hover:bg-zinc-200 shadow-[0_4px_25px_rgba(41,151,255,0.4)] dark:shadow-[0_4px_30px_rgba(255,255,255,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-black" />
                <span>Book a Systems Discovery Call</span>
              </a>
            </div>
          </div>
        </div>

        {/* Small Italicized Note Required by the Prompt */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="italic text-xs sm:text-sm dark:text-[#86868b] text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Note: Clients pay for their own software subscriptions directly; pricing reflects engineering, setup, and ongoing management.
          </p>
        </div>
      </div>
    </section>
  );
}
