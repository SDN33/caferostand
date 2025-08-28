import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  /** Desktop container height (CSS length), default '150vh' */
  containerHeight?: string;
  /** Vertical alignment of track on desktop */
  align?: 'center' | 'end';
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, className = '', containerHeight = '150vh', align = 'center' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const scrollElement = scrollRef.current;
    
    if (!container || !scrollElement) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const scrollWidth = scrollElement.scrollWidth;
      const containerWidth = container.offsetWidth;
      
      // Calculate scroll progress based on container position
      const scrollProgress = Math.max(0, Math.min(1, 
        (window.innerHeight - rect.top) / (containerHeight + window.innerHeight)
      ));
      
      // Transform horizontal scroll
      const translateX = -scrollProgress * (scrollWidth - containerWidth);
      scrollElement.style.transform = `translateX(${translateX}px)`;
    };

    // Only apply scroll effect on desktop
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial call
    } else {
      // Reset transform on mobile
      scrollElement.style.transform = 'translateX(0px)';
    }
    
    return () => {
      if (!isMobile) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isMobile]);

  // Navigation functions for desktop
  const scrollToIndex = (index: number) => {
    const scrollElement = scrollRef.current;
    if (!scrollElement || isMobile) return;
    
    const childWidth = 400; // Approximate width of each dish card
    const gap = 32; // 8 * 4px (gap-8)
    const translateX = -(index * (childWidth + gap));
    
    scrollElement.style.transition = 'transform 0.5s ease-in-out';
    scrollElement.style.transform = `translateX(${translateX}px)`;
    
    setTimeout(() => {
      scrollElement.style.transition = '';
    }, 500);
    
    setCurrentIndex(index);
    updateNavigationButtons(index);
  };

  const updateNavigationButtons = (index: number) => {
    const childrenCount = React.Children.count(children);
    setCanScrollLeft(index > 0);
    setCanScrollRight(index < childrenCount - 1);
  };

  const scrollLeft = () => {
    if (canScrollLeft) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Mobile version with native horizontal scroll
  if (isMobile) {
    return (
      <div className={`${className}`}>
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
          <div 
            ref={scrollRef}
            className="flex gap-4 px-4 py-8"
            style={{ 
              width: 'max-content',
              scrollSnapType: 'x mandatory'
            }}
          >
            {React.Children.map(children, (child, index) => (
              <div 
                key={index}
                style={{ scrollSnapAlign: 'center' }}
                className="flex-shrink-0"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile scroll hint */}
        <div className="flex justify-center items-center gap-2 pb-4 text-gray-400">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-gold/60 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
            <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
          <span className="text-xs ml-2">Faites glisser →</span>
        </div>
      </div>
    );
  }

  // Desktop version with scroll-based animation
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height: containerHeight }} // Make container tall to create scroll space
    >
  <div className={`sticky top-0 h-screen flex ${align === 'end' ? 'items-end' : 'items-center'}`}>
        <div 
          ref={scrollRef}
          className="flex gap-8 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {children}
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${
            !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 ${
            !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
          }`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScroll;