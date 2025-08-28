import React, { useEffect, useMemo, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

type Section = { id: string; label: string };

interface SectionNavigatorProps {
  sections: Section[];
  /** Additional offset in pixels when scrolling to sections (e.g., fixed navbar height) */
  offset?: number;
  className?: string;
}

const SectionNavigator: React.FC<SectionNavigatorProps> = ({ sections, offset = 0, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ids = useMemo(() => sections.map(s => s.id), [sections]);

  useEffect(() => {
    const elements = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      entries => {
        // Pick the entry with largest intersection ratio
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))[0];
        if (visible) {
          const index = ids.indexOf(visible.target.id);
          if (index !== -1) setActiveIndex(index);
        }
      },
      {
        root: null,
        threshold: [0.3, 0.6, 0.9]
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [ids]);

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, sections.length - 1));
    const target = document.getElementById(sections[clamped].id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleUp = () => scrollTo(activeIndex - 1);
  const handleDown = () => scrollTo(activeIndex + 1);

  return (
    <div className={`pointer-events-none ${className}`}>
      {/* Vertical dots nav (desktop) */}
      <div className="hidden md:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(i)}
            className={`relative w-3 h-3 rounded-full border border-white/40 transition-all duration-300 ${
              i === activeIndex ? 'bg-gold scale-125 shadow-[0_0_0_6px_rgba(255,215,0,0.15)]' : 'bg-white/30 hover:bg-white/60'
            }`}
            title={s.label}
            aria-label={`Aller à ${s.label}`}
            style={{ pointerEvents: 'auto' }}
          >
            {/* Tooltip placeholder (can be enhanced) */}
          </button>
        ))}
      </div>

      {/* Up/Down controller (all viewports) */}
      <div className="fixed right-4 bottom-6 md:right-6 md:bottom-8 z-40">
        <div className="pointer-events-auto rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex items-center gap-2 p-2">
          <button
            onClick={handleUp}
            disabled={activeIndex === 0}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/20'
            }`}
            aria-label="Section précédente"
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </button>
          <div className="h-6 w-px bg-white/20" />
          <button
            onClick={handleDown}
            disabled={activeIndex === sections.length - 1}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              activeIndex === sections.length - 1 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-white/20'
            }`}
            aria-label="Section suivante"
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigator;
