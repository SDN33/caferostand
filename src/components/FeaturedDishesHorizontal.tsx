import React from 'react';
import { Link } from 'react-router-dom';
import HorizontalScroll from './HorizontalScroll';
import ScrollAnimation from './ScrollAnimations';
import { Star, Leaf } from 'lucide-react';
import { menuItems } from '../data/menuData';

const FeaturedDishesHorizontal = () => {
  // Use the first four non-empty menu items from the Menu data
  const fallbackImages = [
  'https://www.huitrerie-besson.com/file/si1282895/Bar-a%CC%80-hui%CC%82tres-fi19986599x1000.jpg',
    'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
  ];

  const oysterImage = 'https://www.huitrerie-besson.com/file/si1282895/Bar-a%CC%80-hui%CC%82tres-fi19986599x1000.jpg';
  const oeufImage = 'https://assets.afcdn.com/story/20250414/2298403_w1200h675cx600cy338cxt0cyt0cxb1200cyb675.jpg';

  type MenuItem = { category?: string; tags?: string[]; name?: string; description?: string; price?: string };

  const dishes = (menuItems as MenuItem[])
    .filter((item: MenuItem) => !!item.name && !!item.price)
    .slice(0, 4)
    .map((item: MenuItem, idx: number) => {
      const name = (item.name || '').toString();
      const isOysters = /HUITRE|HUITRES/i.test(name);
      const isOeuf = name.trim().toUpperCase() === 'OEUF BÉNÉDICTE DU CHEF';
      return {
        name: name,
        description: item.description || '',
        image: isOeuf ? oeufImage : isOysters ? oysterImage : fallbackImages[idx % fallbackImages.length],
        price: item.price || '',
        tags: item.tags || []
      };
    });

  return (
    <section data-section="creations" className="bg-black text-white overflow-hidden">
      <div className="pt-12 px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeInUp" className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-wide mb-6 text-gold">
            NOTRE CARTE
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4">
            Laissez parler vos papilles : jetez un œil à notre carte en ligne.
          </p>
        </ScrollAnimation>
      </div>

  <HorizontalScroll className="bg-black" containerHeight="100vh" align="end">
        {dishes.map((dish, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-80 sm:w-96 h-[90vh] lg:h-[85vh] flex flex-col justify-center px-4 sm:px-8"
          >
            <div className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-all duration-700 hover:scale-105 shadow-2xl">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Tags */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                  {dish.tags.includes('signature') && (
                    <span className="bg-gold text-black text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium flex items-center gap-1">
                      <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="hidden xs:inline">SIGNATURE</span>
                      <span className="xs:hidden">★</span>
                    </span>
                  )}
                  {dish.tags.includes('vegan') && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full font-medium flex items-center gap-1">
                      <Leaf className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      <span className="hidden xs:inline">VÉGAN</span>
                      <span className="xs:hidden">🌱</span>
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <span className="bg-black/80 backdrop-blur-sm text-gold text-base sm:text-lg font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
                    {dish.price}
                  </span>
                </div>

                {/* Mobile swipe indicator */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 sm:hidden">
                  <div className="flex gap-1">
                    <div className="w-2 h-0.5 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="w-6 h-0.5 bg-gold rounded-full"></div>
                    <div className="w-2 h-0.5 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-white mb-3 sm:mb-4 group-hover:text-gold transition-colors duration-300 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-base sm:text-lg mb-4 sm:mb-0">
                  {dish.description}
                </p>
                
                <button className="w-full sm:w-auto mt-4 sm:mt-6 bg-gold hover:bg-gold/90 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base">
                  Commander
                </button>
              </div>
            </div>
          </div>
        ))}
      </HorizontalScroll>

      {/* Text highlight about the menu */}
  <div className="px-4 sm:px-6 lg:px-8 pt-4 pb-16 sm:pt-6 sm:pb-20 bg-gradient-to-b from-black via-black to-black">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fadeInUp">
            <h3 className="text-3xl sm:text-4xl font-serif font-light tracking-wide mb-4 sm:mb-6">
              Une Carte d’Exception
            </h3>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={150}>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              De la mer à la terre, notre carte célèbre les produits de saison, sublimés par des
              techniques précises et des accords audacieux. Chaque plat est pensé comme une scène,
              pour dévoiler un parfum, une texture, une émotion.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInUp" delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="inline-block bg-gold hover:bg-gold/90 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                aria-label="Découvrir toute la carte"
              >
                Découvrir la carte
              </Link>

              <Link
                to="/contact"
                className="inline-block border-2 border-white/20 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-300"
                aria-label="Nous contacter"
              >
                Nous contacter
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishesHorizontal;