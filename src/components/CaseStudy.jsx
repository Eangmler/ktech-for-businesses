import React from 'react';
import { AlertCircle, CheckCircle2, Shield, ArrowRight, Sparkles, Layers, Sliders } from 'lucide-react';

export default function CaseStudy({ onNext }) {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-24 snap-start relative overflow-hidden">
      {/* Apple Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-[#deb368]/8 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full max-h-[85vh]">
        {/* Apple Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f5a623]"></span>
            <span className="text-[11px] font-medium tracking-tight text-[#f5f5f7] uppercase font-mono">
              Field Implementation Audit
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest text-white leading-tight">
            Case Study:{' '}
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#86868b] bg-clip-text text-transparent">
              From Chaos to Centralized Control
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] mt-2 font-normal max-w-2xl">
            A real-world systems intervention transforming scattered channels into an automated operating unit.
          </p>
        </div>

        {/* 3 Apple Home Transformation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {/* Card 1: The Problem */}
          <div className="apple-glass-card rounded-apple p-7 flex flex-col justify-between relative group">
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
              <AlertCircle className="w-4 h-4" />
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-red-400 font-semibold mb-2">
                Phase 01 · Friction
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                The Problem
              </h3>
              <p className="text-sm text-[#86868b] leading-relaxed font-normal">
                A local enterprise was struggling with scattered employee communications, unsecured local files, and lost leads on social media.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Unmonitored personal Gmails</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>Confidential spreadsheets on laptops</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                <span>WhatsApp leads going cold overnight</span>
              </div>
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="apple-glass-card rounded-apple p-7 flex flex-col justify-between relative group border-white/25 shadow-apple-glow">
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#2997ff]/20 border border-[#2997ff]/30 flex items-center justify-center text-[#2997ff]">
              <Sliders className="w-4 h-4" />
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#2997ff] font-semibold mb-2">
                Phase 02 · Engineering
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                The Solution
              </h3>
              <p className="text-sm text-[#f5f5f7] leading-relaxed font-normal">
                We deployed centralized Google Workspace administration for secure file management, configured Chrome Browser Cloud Management, and implemented automated WhatsApp CRM flows to catch every inbound lead.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#2997ff]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Centralized Workspace IAM Admin</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2997ff]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Chrome Browser Cloud Security Policies</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#2997ff]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Automated WhatsApp CRM Inbound Router</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Result */}
          <div className="apple-glass-card rounded-apple p-7 flex flex-col justify-between relative group">
            <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#30d158]/20 border border-[#30d158]/30 flex items-center justify-center text-[#30d158]">
              <Sparkles className="w-4 h-4" />
            </div>

            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#30d158] font-semibold mb-2">
                Phase 03 · Outcome
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4">
                The Result
              </h3>
              <p className="text-sm text-[#86868b] leading-relaxed font-normal">
                Zero lost documents, 100% staff onboarding compliance, and immediate automated responses to 24/7 sales inquiries.
              </p>
            </div>

            {/* Apple Style Metric Chips */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold text-white">0</div>
                <div className="text-[9px] uppercase tracking-wider text-[#86868b] mt-0.5">Lost Docs</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold text-[#30d158]">100%</div>
                <div className="text-[9px] uppercase tracking-wider text-[#86868b] mt-0.5">Compliant</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base font-bold text-[#2997ff]">&lt;3s</div>
                <div className="text-[9px] uppercase tracking-wider text-[#86868b] mt-0.5">Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="mt-8 flex items-center justify-between">
          <span className="text-xs text-[#86868b]">
            Swipe horizontally or use arrows to view pricing
          </span>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#2997ff] transition-colors"
          >
            <span>See Services &amp; Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
