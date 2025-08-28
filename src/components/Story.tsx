import React from 'react';
import ScrollAnimation from './ScrollAnimations';

const Story: React.FC = () => {
  return (
    <section className="py-16 bg-cream-light/60 dark:bg-black/90 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fadeInUp" delay={100}>
          <h2 className="text-4xl lg:text-5xl font-thin tracking-wider font-serif text-gold mb-4">NOTRE HISTOIRE</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={200}>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold mb-4">
            Un lieu né d'une envie simple : rassembler, partager et célébrer le goût du quotidien.
          </p>

          <div className="prose prose-white mx-auto text-center text-gray-800 dark:text-gray-300 leading-relaxed">
            <p>
              Le Café Rostand est né d’un projet de revitalisation du centre-ville du Haillan. L’ouverture d’une petite
              échoppe a rapidement inspiré une équipe déterminée à imaginer un café où les saveurs locales et la convivialité
              se rencontrent.
            </p>
            <br />
            <p>
              Aux manettes, Alexandre Jullien et le chef Albert Bontrain ont misé sur des produits de saison, des recettes
              généreuses et un service chaleureux. Le lieu a été repensé pour accueillir les habitués comme les curieux,
              avec un jardin privatif pour profiter des beaux jours.
            </p>
            <br />
            <p>
              Depuis son ouverture le 28 février 2020, Le Café Rostand est devenu un rendez-vous gourmand du quartier :
              cafés au petit matin, déjeuners partagés et soirées détendues autour de tapas et de cocktails maison.
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">Passez nous voir, la porte est toujours ouverte pour un moment partagé.</p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Story;