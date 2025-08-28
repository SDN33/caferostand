import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';
import HoursToggle from './HoursToggle';
import profile from '../brand/profile';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const openTheForkWidget = () => {
    const url = profile.links?.theFork;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const bgImage = profile.images?.heroFallback || '';

  return (
  <section className="relative h-screen flex items-center justify-center overflow-hidden group pt-20 sm:pt-0">
      <div className="absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Native video background (public/hero.mp4) */}
        <video
          className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden pointer-events-none"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={bgImage}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/30 sm:bg-black/40 transition-colors duration-700 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 sm:h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <ScrollAnimation animation="fadeInUp" delay={100}>
            <div className="mx-auto mb-4 hidden sm:block">
            <img
              src="https://static.wixstatic.com/media/e5f698_098b4b72d5694dcfbe491ac6795a02da~mv2.png/v1/fill/w_266,h_266,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20ROSTAND.png"
              alt="Logo Café Rostand"
              className="h-24 w-24 rounded-full object-contain shadow-md mx-auto"
            />
            </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="mt-14 sm:mt-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 text-xs tracking-widest uppercase">
            <span className="text-gold">★ ★ ★</span>
            <span>BRASSERIE - BISTROT </span>
            <span className="hidden sm:inline text-white/70">| {profile.address?.city || ''}</span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scaleIn">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4 font-handwritten">{profile.name}</h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={300}>
          <p className="text-lg sm:text-xl font-light max-w-3xl mx-auto leading-relaxed mb-8">{profile.tagline}</p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={500}>
          <div className="flex flex-row flex-wrap gap-2 sm:gap-4 justify-center items-center">
            <button
              onClick={openTheForkWidget}
              className="inline-block bg-gold text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow hover:scale-105 transition-transform duration-200"
            >
              Réserver
            </button>

            <Link to="/menu" className="inline-block border-2 border-white/30 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-white/10 transition-colors duration-200">
              Voir la carte
            </Link>

            {/* TheFork badge */}
            <a
              href={profile.links?.theFork || '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir les avis sur TheFork"
              className="inline-flex items-center gap-2 sm:gap-3 bg-black/70 hover:bg-black/80 border border-gold/30 px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg"
            >
              <div className="flex flex-col items-start leading-tight">
                <div className="text-lg sm:text-2xl font-bold text-gold">9<span className="text-base text-white">/10</span></div>
                <div className="text-xs text-gray-200">Excellent • <span className="font-semibold">253 avis</span></div>
              </div>
              <div className="hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-md overflow-hidden">
                <img
                  src="https://play-lh.googleusercontent.com/-YJLx_Itkfi-13ljoVKocZ3HmhTfEGuaNqa9kQwSeLWmMTgaSYM9kGW6RWpyE84iR4w"
                  alt="TheFork logo"
                  className="w-full h-full object-contain"
                  title="Voir les avis sur TheFork"
                />
              </div>
            </a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={800}>
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div>
                <div className="font-semibold">Adresse</div>
                <div>{profile.address?.full || ''}</div>
              </div>
              <div>
                <div className="font-semibold">Téléphone</div>
                <div>
                  <a href={`tel:${profile.phoneHref || profile.phone}`}>{profile.phone}</a>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Horaires</div>
                <HoursToggle hours={profile.hours || {}} />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation animation="fadeInUp" delay={1000}>
        <button onClick={scrollToNext} className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white hover:text-gold transition-all duration-300 animate-bounce p-2 rounded-full" aria-label="Scroll down">
          <ChevronDown size={28} />
        </button>
      </ScrollAnimation>
    </section>
  );
};

export default Hero;