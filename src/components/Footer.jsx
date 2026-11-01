import React from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onNavigate, isActive }) {
  return (
    <div className={`w-full h-full flex items-center justify-center px-5 sm:px-10 lg:px-20 pt-16 pb-20 sm:pb-24 relative overflow-hidden ${isActive ? 'animate-slide-enter' : ''}`}>
      {/* Apple Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#30d158]/6 blur-[100px] sm:blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-3xl w-full mx-auto flex flex-col justify-center max-h-[82vh] text-center z-10">
        {/* Apple Icon Badge */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-2xl bg-gradient-to-tr from-[#1c1c1e] to-[#2c2c2e] border dark:border-white/20 border-black/10 flex items-center justify-center shadow-apple-glow mb-4">
          <span className="font-bold text-xl sm:text-2xl text-white font-sans">k.</span>
        </div>

        {/* Updated Headline */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tightest dark:text-white text-zinc-900 mb-2 sm:mb-3 max-w-xl mx-auto leading-tight">
          What repetitive task is slowing your business down today?
        </h2>

        {/* Updated Subheadline */}
        <p className="text-xs sm:text-base dark:text-[#86868b] text-zinc-600 max-w-lg mx-auto mb-6 sm:mb-8 font-normal leading-relaxed">
          Book a Discovery Call with a systems engineer in Accra. We will audit your workflow and build the automation to fix it.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-10">
          {/* Primary Action Button */}
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20would%20like%20to%20Book%20a%20Discovery%20Call%20with%20a%20systems%20engineer%20in%20Accra."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white dark:bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>Book a Discovery Call</span>
          </a>

          {/* Back to thekisseh.com link */}
          <a
            href="https://thekisseh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-3 sm:py-3.5 rounded-full dark:bg-white/10 bg-black/5 hover:dark:bg-white/15 hover:bg-black/10 border dark:border-white/15 border-black/10 text-xs sm:text-sm font-medium dark:text-white text-zinc-900 transition-all duration-300"
          >
            <span>thekisseh.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 dark:text-[#86868b] text-zinc-400" />
          </a>

          {/* Return to Slide 1 */}
          <button
            onClick={() => onNavigate(0)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 border dark:border-white/10 border-black/10 text-xs font-medium dark:text-[#86868b] text-zinc-600 dark:hover:text-white hover:text-black transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Start Over</span>
          </button>
        </div>

        {/* Legal & Status Strip */}
        <div className="pt-4 border-t dark:border-white/10 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs dark:text-[#86868b] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="dark:text-white text-zinc-900 font-medium">kTech for Businesses</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158] animate-pulse"></span>
              <span className="dark:text-white text-zinc-900 font-medium">Accra HQ · Systems Active</span>
            </span>
            <span className="opacity-30">|</span>
            <span>GMT</span>
          </div>
        </div>
      </div>
    </div>
  );
}
