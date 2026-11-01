import React, { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import HorizontalDock from './components/HorizontalDock';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalSections = 4;

  // Track horizontal scroll position and compute active slide & progress
  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const progress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;
    setScrollProgress(progress);

    // Compute active section based on slide width
    const slideWidth = el.clientWidth;
    const currentIndex = Math.min(
      totalSections - 1,
      Math.max(0, Math.round(el.scrollLeft / slideWidth))
    );
    setActiveIndex(currentIndex);
  };

  // Convert standard vertical mouse wheel scrolling into horizontal motion
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e) => {
      // If the user is scrolling vertically with mouse wheel, translate to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.15;
      }
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        navigateTo(Math.min(totalSections - 1, activeIndex + 1));
      } else if (e.key === 'ArrowLeft') {
        navigateTo(Math.max(0, activeIndex - 1));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  // Smooth programmatic scroll to a specific section index
  const navigateTo = (index) => {
    const el = containerRef.current;
    if (!el) return;

    const targetX = index * el.clientWidth;
    el.scrollTo({
      left: targetX,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-[#f5f5f7] flex flex-col font-sans select-none relative apple-canvas-bg apple-grid">
      {/* Apple Store Floating Header */}
      <Navbar activeIndex={activeIndex} onNavigate={navigateTo} />

      {/* Main Horizontal Panoramic Canvas */}
      <main
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full flex flex-row overflow-x-auto overflow-y-hidden no-scrollbar snap-x snap-mandatory scroll-smooth touch-pan-x"
      >
        {/* Slide 1: Hero */}
        <Hero onNext={() => navigateTo(1)} />

        {/* Slide 2: Case Study */}
        <CaseStudy onNext={() => navigateTo(2)} />

        {/* Slide 3: Services & Pricing */}
        <Pricing onNext={() => navigateTo(3)} />

        {/* Slide 4: Connect & Footer */}
        <Footer onNavigate={navigateTo} />
      </main>

      {/* Apple Dynamic Island Floating Navigation Dock */}
      <HorizontalDock
        activeIndex={activeIndex}
        totalSections={totalSections}
        onNavigate={navigateTo}
        scrollProgress={scrollProgress}
      />

      {/* Floating WhatsApp Action Pill */}
      <WhatsAppFloat />
    </div>
  );
}
