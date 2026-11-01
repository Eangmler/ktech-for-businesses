import React from 'react';
import { ArrowDown, ShieldCheck, Zap, Cpu, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-20 overflow-hidden bg-ambient-glow">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40"></div>

      {/* Decorative Warm Ambient Radial Beam */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#c8933a]/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#c8933a]"></span>
          <span className="font-mono text-[11px] tracking-ultra text-[#c8933a] uppercase font-medium">
            Systems Architecture &amp; Automation
          </span>
          <span className="text-[#3d3a36]">·</span>
          <span className="font-mono text-[11px] tracking-widest text-[#8a857e] uppercase hidden sm:inline-block">
            Accra &amp; Remote
          </span>
        </div>

        {/* Exact Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-light text-[#e8e4de] leading-[1.08] tracking-tight mb-8">
          Enterprise-Grade IT &amp;{' '}
          <em className="text-[#c8933a] italic font-normal">Automation</em> for Growing{' '}
          <span className="italic font-normal">Ghanaian Businesses</span>.
        </h1>

        {/* Exact Subheadline */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-[#8a857e] max-w-3xl font-light leading-relaxed mb-10">
          Stop losing sales to unread WhatsApps, messy Gmail accounts, and disorganized staff. We
          build the systems that run your business while you sleep.
        </p>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 mb-16">
          {/* Primary WhatsApp CTA Button */}
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c8933a] text-black font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(200,147,58,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)]"
          >
            <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Secondary Outline Link */}
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#3d3a36] text-[#e8e4de] hover:border-[#c8933a] hover:text-[#c8933a] font-sans text-xs sm:text-sm font-medium tracking-widest uppercase transition-all duration-300"
          >
            <span>View Packages &amp; Pricing</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

        {/* Trust Badges Strip (matching the editorial stats strip of thekisseh.com) */}
        <div className="pt-8 border-t border-[#3d3a36]/60 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 border border-[#3d3a36] bg-[#111111] text-[#c8933a]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-[#e8e4de]">Google Workspace</div>
              <div className="text-[11px] text-[#8a857e] font-light">Centralized Admin Control</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 border border-[#3d3a36] bg-[#111111] text-[#c8933a]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-[#e8e4de]">WhatsApp API Bot</div>
              <div className="text-[11px] text-[#8a857e] font-light">Instant Auto-Closing</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 border border-[#3d3a36] bg-[#111111] text-[#c8933a]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-[#e8e4de]">Cloud POS &amp; CRM</div>
              <div className="text-[11px] text-[#8a857e] font-light">Zero Scattered Data</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 border border-[#3d3a36] bg-[#111111] text-[#c8933a]">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-[#e8e4de]">48-Hour Turnaround</div>
              <div className="text-[11px] text-[#8a857e] font-light">Turnkey Deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
