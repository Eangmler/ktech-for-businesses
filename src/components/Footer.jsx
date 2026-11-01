import React from 'react';
import { ArrowUpRight, ArrowLeft, Shield, Globe, Clock, ChevronRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer({ onNavigate }) {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-24 snap-start relative overflow-hidden">
      {/* Apple Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#30d158]/6 blur-[170px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto flex flex-col justify-center h-full max-h-[85vh] text-center">
        {/* Apple Icon Badge */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-[#1c1c1e] to-[#2c2c2e] border dark:border-white/20 border-black/10 flex items-center justify-center shadow-apple-glow mb-6">
          <span className="font-bold text-2xl text-white font-sans">k.</span>
        </div>

        {/* Updated Headline */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tightest dark:text-white text-zinc-900 mb-4 max-w-2xl mx-auto leading-tight">
          What repetitive task is slowing your business down today?
        </h2>

        {/* Updated Subheadline */}
        <p className="text-sm sm:text-base dark:text-[#86868b] text-zinc-600 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Book a Discovery Call with a systems engineer in Accra. We will audit your workflow and build the automation to fix it.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {/* Primary Updated Button: Book a Discovery Call */}
          <a
            href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20would%20like%20to%20Book%20a%20Discovery%20Call%20with%20a%20systems%20engineer%20in%20Accra."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white dark:bg-white text-black hover:bg-zinc-200 text-sm font-bold tracking-tight transition-all duration-300 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-4 h-4 text-black" />
            <span>Book a Discovery Call</span>
          </a>

          {/* Back to thekisseh.com link */}
          <a
            href="https://thekisseh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full dark:bg-white/10 bg-black/5 hover:dark:bg-white/15 hover:bg-black/10 border dark:border-white/15 border-black/10 text-sm font-medium dark:text-white text-zinc-900 transition-all duration-300"
          >
            <span>Back to thekisseh.com</span>
            <ArrowUpRight className="w-4 h-4 dark:text-[#86868b] text-zinc-400" />
          </a>

          {/* Return to Slide 1 */}
          <button
            onClick={() => onNavigate(0)}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-full dark:bg-white/5 bg-black/5 hover:dark:bg-white/10 hover:bg-black/10 border dark:border-white/10 border-black/10 text-xs font-medium dark:text-[#86868b] text-zinc-600 dark:hover:text-white hover:text-black transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Start</span>
          </button>
        </div>

        {/* Apple Style Legal & Status Strip */}
        <div className="pt-8 border-t dark:border-white/10 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs dark:text-[#86868b] text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="dark:text-white text-zinc-900 font-medium">kTech for Businesses</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse"></span>
              <span className="dark:text-white text-zinc-900 font-medium">Accra Hub · Systems Active</span>
            </span>
            <span className="dark:text-white/20 text-black/20">|</span>
            <span>GMT / UTC+0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
