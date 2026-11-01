import React from 'react';
import { Check, Star, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Pricing() {
  const tiers = [
    {
      id: 'basic',
      name: 'Basic',
      badge: 'The Decoy',
      highlighted: false,
      target: 'Micro-hustles',
      setupPrice: 'GH₵ 1,500',
      monthlyPrice: 'GH₵ 500',
      description: 'Foundational digital setup for solo operators and budding ventures.',
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
      description: 'Complete operational automation engine designed to capture and close every customer.',
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
      description: 'Full-spectrum systems architecture, custom automation workflows, and high-security compliance.',
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
    <section id="pricing" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#0a0a0a] relative">
      {/* Ambient background glow behind the central target card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#c8933a]/6 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[#c8933a]"></span>
            <span className="font-mono text-[11px] tracking-ultra text-[#c8933a] uppercase font-medium">
              Transparent Engineering Retainers
            </span>
            <span className="w-6 h-px bg-[#c8933a]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#e8e4de] font-light tracking-tight leading-[1.1]">
            Services &amp;{' '}
            <span className="italic text-[#c8933a] font-normal">Pricing</span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#8a857e] mt-4 font-light leading-relaxed">
            Eliminate operational overhead with transparent setup fees and dedicated monthly management retainers.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {tiers.map((tier) => {
            const isStandard = tier.highlighted;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between transition-all duration-300 ${
                  isStandard
                    ? 'bg-[#141414] border-2 border-[#c8933a] shadow-gold-glow lg:-translate-y-4 rounded-none p-8 sm:p-10 z-20'
                    : 'bg-[#111111] border border-[#3d3a36] hover:border-[#8a857e] p-8 sm:p-10 z-10'
                }`}
              >
                {/* Visual Pill Badge for Standard Package */}
                {isStandard && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c8933a] text-black font-mono text-[10px] font-bold tracking-widest uppercase px-4 py-1 flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  {/* Card Header: Name & Target */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-3xl text-[#e8e4de] font-light">
                        {tier.name}
                      </h3>
                      <p className="font-mono text-xs text-[#c8933a] mt-1 tracking-wide">
                        Target: <span className="text-[#e8e4de]">{tier.target}</span>
                      </p>
                    </div>

                    {!isStandard && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8a857e] px-2 py-0.5 border border-[#3d3a36]">
                        {tier.id === 'basic' ? 'Starter' : 'Enterprise'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#8a857e] font-light leading-relaxed mb-6 min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="py-6 border-t border-b border-[#3d3a36]/60 my-6 bg-[#0a0a0a]/50 px-4 -mx-4 sm:-mx-6 sm:px-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-light text-[#e8e4de]">
                        {tier.setupPrice}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-widest text-[#8a857e]">
                        setup
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mt-2 pt-2 border-t border-[#3d3a36]/30">
                      <span className="font-mono text-lg font-medium text-[#c8933a]">
                        {tier.monthlyPrice}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#8a857e]">
                        / monthly retainer
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <div className="font-mono text-[11px] tracking-widest uppercase text-[#8a857e]">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-3.5">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#e8e4de] font-light">
                          <span
                            className={`p-0.5 mt-0.5 shrink-0 rounded ${
                              isStandard
                                ? 'text-[#c8933a] bg-[#c8933a]/10'
                                : 'text-[#8a857e] bg-[#181818]'
                            }`}
                          >
                            <Check className="w-3.5 h-3.5" />
                          </span>
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4">
                  <a
                    href={`https://wa.me/233248147952?text=${encodeURIComponent(tier.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2.5 py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
                      isStandard
                        ? 'bg-[#c8933a] text-black hover:bg-white hover:text-black shadow-lg shadow-[#c8933a]/20'
                        : 'border border-[#3d3a36] text-[#e8e4de] hover:border-[#c8933a] hover:text-[#c8933a] bg-transparent'
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>{tier.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Italicized Note Required by the Prompt */}
        <div className="mt-12 text-center">
          <p className="font-serif italic text-sm sm:text-base text-[#8a857e] max-w-3xl mx-auto leading-relaxed">
            Note: Clients pay for their own software subscriptions directly; pricing reflects engineering, setup, and ongoing management.
          </p>
        </div>

        {/* FAQ / Guarantees Strip */}
        <div className="mt-16 pt-10 border-t border-[#3d3a36]/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="p-4 border border-[#3d3a36]/40 bg-[#111111]/40">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c8933a] block mb-1">
              Zero Vendor Lock-in
            </span>
            <p className="text-xs text-[#8a857e] font-light">
              All Google Workspace, domains, and API credentials remain 100% owned by your business.
            </p>
          </div>

          <div className="p-4 border border-[#3d3a36]/40 bg-[#111111]/40">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c8933a] block mb-1">
              48h Fast Onboarding
            </span>
            <p className="text-xs text-[#8a857e] font-light">
              We audit your domain DNS, provision your users, and test your WhatsApp flows within 2 business days.
            </p>
          </div>

          <div className="p-4 border border-[#3d3a36]/40 bg-[#111111]/40">
            <span className="font-mono text-xs uppercase tracking-widest text-[#c8933a] block mb-1">
              Direct Engineering Line
            </span>
            <p className="text-xs text-[#8a857e] font-light">
              Retainer clients receive priority WhatsApp support for system changes, new staff onboarding, and security checks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
