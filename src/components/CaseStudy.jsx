import React from 'react';
import { AlertTriangle, Cog, CheckCircle, ArrowRight, Shield, Zap, Lock, FileCheck } from 'lucide-react';

export default function CaseStudy() {
  return (
    <section id="case-study" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#111111] border-t border-b border-[#3d3a36]/60 relative">
      {/* Background ambient accents */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#c8933a]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#c8933a]"></span>
            <span className="font-mono text-[11px] tracking-ultra text-[#c8933a] uppercase font-medium">
              Systems Audit &amp; Deployment
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#e8e4de] font-light tracking-tight leading-[1.15]">
            Case Study:{' '}
            <span className="italic font-normal text-[#c8933a]">
              From Chaos to Centralized Control
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8a857e] mt-4 font-light leading-relaxed">
            How a rapid intervention in workspace permissions and lead automation turned operational bottlenecks into automated revenue.
          </p>
        </div>

        {/* 3-Pillar Clean Architectural Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Card 1: The Problem */}
          <div className="group relative bg-[#0a0a0a] border border-[#3d3a36] p-8 sm:p-10 flex flex-col justify-between hover:border-[#8a857e] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#8a857e] tracking-widest uppercase">
                  01 / The Friction
                </span>
                <span className="p-2 rounded bg-red-950/30 border border-red-800/40 text-red-400">
                  <AlertTriangle className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#e8e4de] font-normal mb-4">
                The Problem
              </h3>

              <p className="font-sans text-sm sm:text-[15px] text-[#8a857e] leading-relaxed font-light">
                A local enterprise was struggling with scattered employee communications, unsecured local files, and lost leads on social media.
              </p>
            </div>

            {/* Micro Breakdown of Friction */}
            <div className="mt-8 pt-6 border-t border-[#3d3a36]/60 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8a857e]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/80"></span>
                <span>Unmonitored personal Gmails</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8a857e]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/80"></span>
                <span>Confidential spreadsheets on laptops</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8a857e]">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400/80"></span>
                <span>WhatsApp DMs going cold for 12+ hrs</span>
              </div>
            </div>
          </div>

          {/* Card 2: The Solution */}
          <div className="group relative bg-[#141414] border border-[#c8933a]/50 p-8 sm:p-10 flex flex-col justify-between shadow-gold-subtle hover:border-[#c8933a] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#c8933a] tracking-widest uppercase">
                  02 / The Intervention
                </span>
                <span className="p-2 rounded bg-[#c8933a]/10 border border-[#c8933a]/30 text-[#c8933a]">
                  <Cog className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#e8e4de] font-normal mb-4">
                The Solution
              </h3>

              <p className="font-sans text-sm sm:text-[15px] text-[#e8e4de] leading-relaxed font-light">
                We deployed centralized Google Workspace administration for secure file management, configured Chrome Browser Cloud Management, and implemented automated WhatsApp CRM flows to catch every inbound lead.
              </p>
            </div>

            {/* Architecture Pillars Deployed */}
            <div className="mt-8 pt-6 border-t border-[#c8933a]/20 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c8933a]">
                <Shield className="w-3.5 h-3.5" />
                <span>Google Workspace Admin &amp; IAM</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c8933a]">
                <Lock className="w-3.5 h-3.5" />
                <span>Chrome Browser Cloud Management</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c8933a]">
                <Zap className="w-3.5 h-3.5" />
                <span>Automated WhatsApp CRM Auto-Flows</span>
              </div>
            </div>
          </div>

          {/* Card 3: The Result */}
          <div className="group relative bg-[#0a0a0a] border border-[#3d3a36] p-8 sm:p-10 flex flex-col justify-between hover:border-[#c8933a] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#8a857e] tracking-widest uppercase">
                  03 / The Quantifiable Outcome
                </span>
                <span className="p-2 rounded bg-emerald-950/30 border border-emerald-800/40 text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#e8e4de] font-normal mb-4">
                The Result
              </h3>

              <p className="font-sans text-sm sm:text-[15px] text-[#8a857e] leading-relaxed font-light">
                Zero lost documents, 100% staff onboarding compliance, and immediate automated responses to 24/7 sales inquiries.
              </p>
            </div>

            {/* Highlight Metric Badges */}
            <div className="mt-8 pt-6 border-t border-[#3d3a36]/60 grid grid-cols-1 gap-2.5">
              <div className="flex items-center justify-between px-3 py-2 bg-[#141414] border border-[#3d3a36]">
                <span className="font-mono text-xs text-[#8a857e] uppercase">Document Retention</span>
                <span className="font-mono text-xs font-bold text-emerald-400">Zero Lost</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-[#141414] border border-[#3d3a36]">
                <span className="font-mono text-xs text-[#8a857e] uppercase">Staff Compliance</span>
                <span className="font-mono text-xs font-bold text-[#c8933a]">100% Locked</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-[#141414] border border-[#3d3a36]">
                <span className="font-mono text-xs text-[#8a857e] uppercase">Lead Response Time</span>
                <span className="font-mono text-xs font-bold text-[#e8e4de]">Immediate (&lt;5s)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Takeaway Bar */}
        <div className="mt-12 p-6 sm:p-8 bg-[#0a0a0a] border border-[#3d3a36] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-1.5 h-12 bg-[#c8933a] shrink-0"></div>
            <div>
              <p className="font-serif text-lg sm:text-xl italic text-[#e8e4de] leading-snug">
                "When your communications, documents, and customer channels are standardized on enterprise infrastructure, your business ceases to rely on human memory."
              </p>
              <span className="font-mono text-[10px] tracking-widest text-[#8a857e] uppercase block mt-2">
                Systems Engineering Philosophy · kTech
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/233000000000?text=Hello%20kTech%2C%20I%20read%20the%20Case%20Study%20and%20want%20to%20audit%20my%20business%20systems."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#c8933a] hover:text-white uppercase transition-colors"
          >
            <span>Request Systems Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
