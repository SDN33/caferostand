import React, { useRef, useEffect, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // Parallax speed factor
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = '', speed = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Only animate if in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const parallax = (rect.top - windowHeight / 2) * speed;
          setOffset(parallax);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-xl shadow-lg w-full h-80 md:h-96 bg-black ${className}`}
      style={{ position: 'relative' }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.2s linear',
        }}
      />
    </div>
  );
};

export default ParallaxImage;
