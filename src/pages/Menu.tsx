import { useState } from 'react';
import { menuItems } from '../data/menuData';

const Menu = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'Tous les plats' },
    { id: 'entrees', label: 'Entrées' },
    { id: 'plats', label: 'Plats' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'vegan', label: 'Végan' },
    { id: 'signature', label: 'Signature' },
    { id: 'bistrot', label: "Côté Bistrot" }
  ];
  

  const filteredItems = menuItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === item.category) return true;
    return item.tags.includes(activeFilter);
  });

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-thin tracking-widest text-black dark:text-cream-light mb-6">
            NOTRE CARTE
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Une symphonie de saveurs orchestrée par notre chef, où chaque plat 
            révèle l'excellence des produits de saison et le savoir-faire français.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-gold text-black shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-black dark:text-cream-light hover:bg-gold/20 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gold"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1 mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-medium text-black dark:text-cream-light">
                      {item.name}
                    </h3>
                    {item.tags.includes('signature') && (
                      <span className="bg-gold text-black text-xs px-3 py-1 rounded-full font-medium">
                        SIGNATURE
                      </span>
                    )}
                    {item.tags.includes('vegan') && (
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        VÉGAN
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
                <div className="text-gold text-2xl font-bold lg:ml-8">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Menu PDF CTA */}
        <div className="text-center mt-16">
          <button className="bg-black dark:bg-cream-light hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black px-8 py-4 font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg">
            TÉLÉCHARGER LA CARTE COMPLÈTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;