import profile from '../brand/profile';
import { Calendar, Clock, Users } from 'lucide-react';
import ScrollAnimation from './ScrollAnimations';
import ParallaxSection from './ParallaxSection';

const ReservationCTA = () => {
  return (
    <section data-section="reservation" className="py-32 bg-black text-white relative overflow-hidden">
      <ParallaxSection speed={0.2} className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
      </ParallaxSection>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fadeInUp">
          <h2 className="text-4xl xs:text-5xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide mb-6 sm:mb-8 leading-tight">
            Réservez Votre
            <span className="block text-gold mt-2">Expérience</span>
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-2">
            Chaque table est une invitation au voyage. Réservez dès maintenant 
            pour découvrir l'art culinaire dans toute sa splendeur.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <ScrollAnimation animation="fadeInUp" delay={300}>
            <div className="flex flex-col items-center group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-4 lg:p-6 sm:bg-transparent sm:backdrop-blur-none hover:bg-white/10 transition-all duration-300">
              <Calendar className="h-10 w-10 sm:h-12 sm:w-12 text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">Réservation Simple</h3>
              <p className="text-gray-400 text-center text-sm sm:text-base">En 30 secondes seulement</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={400}>
            <div className="flex flex-col items-center group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-4 lg:p-6 sm:bg-transparent sm:backdrop-blur-none hover:bg-white/10 transition-all duration-300">
              <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">Ouvert 7j/7</h3>
              <p className="text-gray-400 text-center text-sm sm:text-base">Service continu</p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" delay={500}>
            <div className="flex flex-col items-center group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-4 lg:p-6 sm:bg-transparent sm:backdrop-blur-none hover:bg-white/10 transition-all duration-300">
              <Users className="h-10 w-10 sm:h-12 sm:w-12 text-gold mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-gold transition-colors duration-300">Événements Privés</h3>
              <p className="text-gray-400 text-center text-sm sm:text-base">Sur demande</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="scaleIn" delay={600}>
          <div className="flex flex-row gap-4 items-center justify-center w-full sm:w-auto">
            <button
              onClick={() => profile.links?.theFork && window.open(profile.links.theFork, '_blank', 'noopener,noreferrer')}
              className="inline-block bg-gold hover:bg-gold/90 text-black px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-full w-full max-w-xs sm:w-auto"
            >
              <span className="sm:hidden">RÉSERVER</span>
              <span className="hidden sm:inline">RÉSERVER MAINTENANT</span>
            </button>
            <button
              onClick={() => profile.links?.theFork && window.open(profile.links.theFork, '_blank', 'noopener,noreferrer')}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-12 py-3 sm:py-5 text-sm sm:text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-full w-full max-w-xs sm:w-auto"
            >
              <img src="https://play-lh.googleusercontent.com/-YJLx_Itkfi-13ljoVKocZ3HmhTfEGuaNqa9kQwSeLWmMTgaSYM9kGW6RWpyE84iR4w" alt="TheFork" className="h-6 w-6 object-contain" />
              <span className="whitespace-nowrap">Via The Fork</span>
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ReservationCTA;