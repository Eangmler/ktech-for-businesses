import React from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <a
        href="https://wa.me/233248147952?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full apple-glass dark:text-white text-zinc-900 text-xs font-medium dark:hover:border-white/30 hover:border-black/20 transition-all duration-300 shadow-apple-card hover:scale-105 active:scale-95"
      >
        <span className="w-2 h-2 rounded-full bg-[#30d158] animate-pulse"></span>
        <WhatsAppIcon className="w-4 h-4 text-[#30d158]" />
        <span className="text-[11px] font-medium">Quick Chat</span>
      </a>
    </aside>
  );
}
