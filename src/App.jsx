import React, { useRef, useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import CaseStudy from './components/CaseStudy';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import HorizontalDock from './components/HorizontalDock';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [theme, setTheme] = useState('dark');
  const totalSections = 5;

  // Animation lock to prevent frantic multiple slide changes in a single gesture
  const isTransitioningRef = useRef(false);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Sync theme with HTML root element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Navigate to specific slide with cooldown lock
  const navigateTo = useCallback((index) => {
    if (index < 0 || index >= totalSections) return;
    setActiveIndex(index);
    isTransitioningRef.current = true;
    setTimeout(() => {
      isTransitioningRef.current = false;
    }, 600);
  }, [totalSections]);

  const goToNext = useCallback(() => {
    if (activeIndex < totalSections - 1 && !isTransitioningRef.current) {
      navigateTo(activeIndex + 1);
    }
  }, [activeIndex, totalSections, navigateTo]);

  const goToPrev = useCallback(() => {
    if (activeIndex > 0 && !isTransitioningRef.current) {
      navigateTo(activeIndex - 1);
    }
  }, [activeIndex, navigateTo]);

  // Touch Gesture Handling:
  // Swiping UP or swiping LEFT -> Next Slide
  // Swiping DOWN or swiping RIGHT -> Previous Slide
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  const handleTouchEnd = (e) => {
    if (isTransitioningRef.current) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    const deltaTime = Date.now() - touchStartRef.current.time;

    // Minimum swipe threshold (pixels)
    const threshold = 35;

    // Check if swipe was significant and within reasonable duration (< 1000ms)
    if (deltaTime < 1000) {
      // Swiping UP (diffY < -threshold) OR swiping LEFT (diffX < -threshold)
      if (diffY < -threshold || diffX < -threshold) {
        goToNext();
      }
      // Swiping DOWN (diffY > threshold) OR swiping RIGHT (diffX > threshold)
      else if (diffY > threshold || diffX > threshold) {
        goToPrev();
      }
    }
  };

  // Wheel Gesture Handling:
  // Scrolling DOWN (deltaY > 0) OR scrolling RIGHT (deltaX > 0) -> Next Slide
  // Scrolling UP (deltaY < 0) OR scrolling LEFT (deltaX < 0) -> Previous Slide
  useEffect(() => {
    const onWheel = (e) => {
      if (isTransitioningRef.current) return;

      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (Math.abs(delta) > 20) {
        if (delta > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    return () => window.removeEventListener('wheel', onWheel);
  }, [goToNext, goToPrev]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [goToNext, goToPrev]);

  const scrollProgress = activeIndex / (totalSections - 1);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`w-screen h-screen overflow-hidden flex flex-col font-sans select-none relative transition-colors duration-500 apple-canvas-bg touch-deck ${
        theme === 'dark' ? 'dark bg-black text-[#f5f5f7]' : 'light bg-[#f5f5f7] text-[#1d1d1f]'
      }`}
    >
      {/* Top Floating Apple Header */}
      <Navbar
        activeIndex={activeIndex}
        onNavigate={navigateTo}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Seamless Horizontal Stage with 60fps GPU Hardware Acceleration */}
      <main className="w-full h-full relative overflow-hidden flex-1">
        <div
          className="flex w-full h-full transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
          style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
        >
          {/* Slide 1: Overview & Hero */}
          <div className="w-full h-full shrink-0 flex items-center justify-center relative">
            <Hero onNext={() => navigateTo(1)} isDark={theme === 'dark'} isActive={activeIndex === 0} />
          </div>

          {/* Slide 2: The Methodology (D.E.M. Framework) */}
          <div className="w-full h-full shrink-0 flex items-center justify-center relative">
            <Methodology onNext={() => navigateTo(2)} isDark={theme === 'dark'} isActive={activeIndex === 1} />
          </div>

          {/* Slide 3: Case Study */}
          <div className="w-full h-full shrink-0 flex items-center justify-center relative">
            <CaseStudy onNext={() => navigateTo(3)} isDark={theme === 'dark'} isActive={activeIndex === 2} />
          </div>

          {/* Slide 4: Engineering & Architecture */}
          <div className="w-full h-full shrink-0 flex items-center justify-center relative">
            <Pricing onNext={() => navigateTo(4)} isDark={theme === 'dark'} isActive={activeIndex === 3} />
          </div>

          {/* Slide 5: Connect & Final Discovery CTA */}
          <div className="w-full h-full shrink-0 flex items-center justify-center relative">
            <Footer onNavigate={navigateTo} isDark={theme === 'dark'} isActive={activeIndex === 4} />
          </div>
        </div>
      </main>

      {/* Apple Dynamic Island Floating Navigation Dock */}
      <HorizontalDock
        activeIndex={activeIndex}
        totalSections={totalSections}
        onNavigate={navigateTo}
        scrollProgress={scrollProgress}
      />

      {/* Floating Action Badge */}
      <WhatsAppFloat />
    </div>
  );
}
