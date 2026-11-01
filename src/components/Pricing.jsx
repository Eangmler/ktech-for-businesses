import React from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Pricing({ onNext }) {
  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      badge: 'The Decoy',
      highlighted: false,
      target: 'Micro-hustles',
      setupPrice: 'GH₵ 1,500',
      monthlyPrice: 'GH₵ 500',
      description: 'Essential foundational setup for solo founders and micro-teams.',
      features: [
        '1-2 Professional Emails',
        'Domain Registration Only',
        'WhatsApp Business (Manual)',
        'Basic Spreadsheet Tracker',
      ],
      ctaText: 'Select Basic',
      whatsappMessage: 'Hello kTech, I am interested in the Basic package (GH₵ 1,500 setup / GH₵ 500 monthly).',
    },
    {
      id: 'standard',
      name: 'Standard',
      badge: 'Most Popular · Recommended',
      highlighted: true,
      target: 'Growing retail/e-commerce brands',
      setupPrice: 'GH₵ 3,500',
      monthlyPrice: 'GH₵ 1,500',
      description: 'Complete automation architecture designed to capture and close every inbound lead.',
      features: [
        'Up to 10 Emails + Shared Drives',
        'Domain + Landing Page Management',
        'WhatsApp API Bot (Auto-closing)',
        'Cloud POS & CRM Setup',
      ],
      ctaText: 'Get Started with Standard',
      whatsappMessage: 'Hello kTech, I want to get started with the Standard package (GH₵ 3,500 setup / GH₵ 1,500 monthly).',
    },
    {
      id: 'premium',
      name: 'Premium',
      badge: 'The Anchor · Enterprise',
      highlighted: false,
      target: 'Large established enterprises',
      setupPrice: 'GH₵ 8,500',
      monthlyPrice: 'GH₵ 4,500',
      description: 'End-to-end bespoke IT systems, autonomous voice & CRM integrations, and security policies.',
      features: [
        'Unlimited Emails + Advanced Security',
        'Full Custom Website Management',
        'Custom AI Voice & Chat Systems',
        'Custom ERP/App Integrations',
      ],
      ctaText: 'Inquire for Enterprise',
      whatsappMessage: 'Hello kTech, I want to discuss the Premium Enterprise package (GH₵ 8,500 setup / GH₵ 4,500 monthly).',
    },
  ];

  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-24 snap-start relative overflow-hidden">
      {/* Apple Keynote Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#2997ff]/8 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full max-h-[88vh]">
        {/* Apple Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2997ff]"></span>
            <span className="text-[11px] font-medium tracking-tight text-[#f5f5f7] uppercase font-mono">
              Transparent Engineering Retainers
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest text-white">
            Services &amp; Pricing
          </h2>
          <p className="text-xs sm:text-sm text-[#86868b] mt-1.5 font-normal">
            Predictable flat-rate engineering setups with dedicated monthly systems oversight.
          </p>
        </div>

        {/* 3-Column Apple Store Card Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {tiers.map((tier) => {
            const isStandard = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`rounded-apple flex flex-col justify-between p-6 sm:p-7 transition-all duration-400 relative ${
                  isStandard
                    ? 'apple-glass border-2 border-[#2997ff] shadow-apple-glow scale-[1.02] z-20 bg-zinc-900/90'
                    : 'apple-glass-card z-10'
                }`}
              >
                {/* Apple Recommended Badge for Standard */}
                {isStandard && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2997ff] text-white text-[10px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Target */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">
                        {tier.name}
                      </h3>
                      <div className="text-xs text-[#86868b] mt-0.5">
                        Target: <span className="text-[#f5f5f7] font-medium">{tier.target}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 my-3 border-t border-b border-white/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                        {tier.setupPrice}
                      </span>
                      <span className="text-xs uppercase font-mono text-[#86868b]">setup</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 mt-1 text-[#2997ff] font-mono text-sm font-semibold">
                      <span>{tier.monthlyPrice}</span>
                      <span className="text-xs text-[#86868b] font-normal">/ monthly</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 my-4">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#f5f5f7]">
                        <span className={`p-0.5 mt-0.5 rounded-full shrink-0 ${isStandard ? 'bg-[#2997ff]/20 text-[#2997ff]' : 'bg-white/10 text-white/70'}`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Apple Store Button */}
                <div className="pt-3">
                  <a
                    href={`https://wa.me/233248147952?text=${encodeURIComponent(tier.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 rounded-full flex items-center justify-center gap-2 text-xs font-semibold tracking-tight transition-all duration-300 ${
                      isStandard
                        ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                    }`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>{tier.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Italicized Subscription Note */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="italic text-xs sm:text-sm text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            Note: Clients pay for their own software subscriptions directly; pricing reflects engineering, setup, and ongoing management.
          </p>
        </div>
      </div>
    </section>
  );
}
