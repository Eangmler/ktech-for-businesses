import React from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Sparkles, Sliders } from 'lucide-react';

export default function CaseStudy({ onNext, isActive }) {
  return (
    <div className={`w-full h-full flex items-center justify-center px-5 sm:px-10 lg:px-20 pt-16 pb-20 sm:pb-24 relative overflow-hidden ${isActive ? 'animate-slide-enter' : ''}`}>
      {/* Apple Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#deb368]/8 blur-[100px] sm:blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center max-h-[84vh] z-10">
        {/* Apple Section Header */}
        <div className="mb-4 sm:mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border dark:border-white/10 border-black/10 mb-2 sm:mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f5a623]"></span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-tight uppercase font-mono text-[#f5a623]">
              Field Implementation Audit
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest dark:text-white text-zinc-900 leading-tight">
            Case Study:{' '}
            <span className="bg-gradient-to-r from-[#deb368] via-[#e8c788] to-[#86868b] bg-clip-text text-transparent">
              From Chaos to Centralized Control
            </span>
          </h2>
          <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 mt-1 font-normal hidden xs:block">
            A real-world systems intervention transforming scattered communications into an automated engine.
          </p>
        </div>

        {/* 3 Apple Home Transformation Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-6 items-stretch">
          {/* Card 1: The Problem */}
          <div className="apple-glass-card rounded-2xl sm:rounded-apple p-4 sm:p-7 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold">
                  01 · The Problem
                </span>
                <span className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 leading-relaxed font-normal">
                A local enterprise was struggling with scattered employee communications, unsecured local files, and lost leads on social media.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t dark:border-white/10 border-black/10 text-[11px] text-red-400/90 font-mono hidden sm:block">
              Confidential files on unmonitored laptops
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="apple-glass-card rounded-2xl sm:rounded-apple p-4 sm:p-7 flex flex-col justify-between relative group border-[#2997ff]/40 shadow-apple-glow">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#2997ff] font-semibold">
                  02 · The Solution
                </span>
                <span className="w-6 h-6 rounded-full bg-[#2997ff]/20 border border-[#2997ff]/30 flex items-center justify-center text-[#2997ff]">
                  <Sliders className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-xs sm:text-sm dark:text-[#f5f5f7] text-zinc-800 leading-relaxed font-normal">
                We deployed centralized Google Workspace administration for secure file management, configured Chrome Browser Cloud Management, and implemented automated WhatsApp CRM flows to catch every inbound lead.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t dark:border-white/10 border-black/10 text-[11px] text-[#2997ff] font-mono hidden sm:block">
              Centralized IAM &amp; WhatsApp Auto-closing
            </div>
          </div>

          {/* Card 3: The Result */}
          <div className="apple-glass-card rounded-2xl sm:rounded-apple p-4 sm:p-7 flex flex-col justify-between relative group">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#30d158] font-semibold">
                  03 · The Result
                </span>
                <span className="w-6 h-6 rounded-full bg-[#30d158]/20 border border-[#30d158]/30 flex items-center justify-center text-[#30d158]">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
              </div>
              <p className="text-xs sm:text-sm dark:text-[#86868b] text-zinc-600 leading-relaxed font-normal">
                Zero lost documents, 100% staff onboarding compliance, and immediate automated responses to 24/7 sales inquiries.
              </p>
            </div>

            {/* Apple Metric Chips */}
            <div className="mt-3 pt-2.5 border-t dark:border-white/10 border-black/10 grid grid-cols-3 gap-1.5 sm:gap-2">
              <div className="p-1.5 sm:p-2 rounded-xl dark:bg-white/5 bg-black/5 text-center">
                <div className="text-xs sm:text-sm font-bold dark:text-white text-zinc-900">0</div>
                <div className="text-[8px] sm:text-[9px] uppercase tracking-wider dark:text-[#86868b] text-zinc-500">Lost Docs</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl dark:bg-white/5 bg-black/5 text-center">
                <div className="text-xs sm:text-sm font-bold text-[#30d158]">100%</div>
                <div className="text-[8px] sm:text-[9px] uppercase tracking-wider dark:text-[#86868b] text-zinc-500">Compliance</div>
              </div>
              <div className="p-1.5 sm:p-2 rounded-xl dark:bg-white/5 bg-black/5 text-center">
                <div className="text-xs sm:text-sm font-bold text-[#2997ff]">&lt;3s</div>
                <div className="text-[8px] sm:text-[9px] uppercase tracking-wider dark:text-[#86868b] text-zinc-500">Auto Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="mt-4 sm:mt-8 flex items-center justify-between pt-2 border-t dark:border-white/10 border-black/10">
          <span className="text-[11px] sm:text-xs dark:text-[#86868b] text-zinc-500">
            Phase 04: View custom architecture &amp; retainers
          </span>
          <button
            onClick={onNext}
            className="inline-flex items-center gap-1.5 text-xs font-semibold dark:text-white text-zinc-900 hover:text-[#2997ff] transition-colors group"
          >
            <span>Architecture &amp; Pricing</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
