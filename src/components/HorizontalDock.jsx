import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HorizontalDock({ activeIndex, totalSections, onNavigate, scrollProgress }) {
  const sections = [
    { label: 'Overview', number: '01' },
    { label: 'Case Study', number: '02' },
    { label: 'Pricing', number: '03' },
    { label: 'Connect', number: '04' },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-auto">
      {/* Floating Apple Dock Pill */}
      <div className="apple-glass rounded-full px-3 py-2 flex items-center gap-1.5 sm:gap-2 shadow-2xl border border-white/15">
        {/* Previous Slide Button */}
        <button
          onClick={() => onNavigate(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            activeIndex === 0
              ? 'opacity-30 cursor-not-allowed text-zinc-500'
              : 'hover:bg-white/15 text-white active:scale-95'
          }`}
          aria-label="Previous Section"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Section Indicators */}
        <div className="flex items-center gap-1">
          {sections.map((sec, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={sec.number}
                onClick={() => onNavigate(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-300 font-medium ${
                  isActive
                    ? 'bg-white text-black shadow-md scale-100 font-semibold'
                    : 'text-[#86868b] hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="font-mono text-[10px] opacity-75">{sec.number}</span>
                <span className="hidden sm:inline">{sec.label}</span>
              </button>
            );
          })}
        </div>

        {/* Next Slide Button */}
        <button
          onClick={() => onNavigate(Math.min(totalSections - 1, activeIndex + 1))}
          disabled={activeIndex === totalSections - 1}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            activeIndex === totalSections - 1
              ? 'opacity-30 cursor-not-allowed text-zinc-500'
              : 'hover:bg-white/15 text-white active:scale-95'
          }`}
          aria-label="Next Section"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Progress Track Line */}
      <div className="w-36 h-1 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-[#2997ff] to-white rounded-full transition-all duration-300"
          style={{ width: `${Math.max(8, scrollProgress * 100)}%` }}
        ></div>
      </div>
    </div>
  );
}
