import React from 'react';

const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Langoustines au Champagne",
      description: "Langoustines bretonnes, émulsion champagne, caviar osciètre",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "48€"
    },
    {
      name: "Bœuf de Kobé Grillé",
      description: "Côte de bœuf de Kobé, jus au thym, légumes de saison",
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "85€"
    },
    {
      name: "Soufflé Grand Marnier",
      description: "Soufflé traditionnel, glace vanille Madagascar, tuile amande",
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: "22€"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-thin tracking-wider text-black dark:text-cream-light mb-4">
            Nos Créations
            <span className="block text-gold font-light">Signature</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de nos plats emblématiques, créés avec passion et expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-black dark:text-cream-light">
                    {dish.name}
                  </h3>
                  <span className="text-gold font-bold text-lg">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;