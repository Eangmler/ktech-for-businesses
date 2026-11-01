import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick WhatsApp assistance" className="fixed bottom-6 right-6 z-40 transition-all duration-300 animate-fade-in">
      <a
        href="https://wa.me/233000000000?text=Hello%20kTech%2C%20I%20am%20interested%20in%20enterprise%20IT%20and%20automation%20systems."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#c8933a] text-black font-sans text-xs font-semibold tracking-wider uppercase shadow-[0_4px_20px_rgba(200,147,58,0.4)] hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
