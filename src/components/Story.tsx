import React from 'react';
import ScrollAnimation from './ScrollAnimations';

const Story: React.FC = () => {
  return (
    <section className="py-16 bg-black text-center text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fadeInUp" delay={100}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-thin tracking-wider font-serif text-gold mb-4">NOTRE HISTOIRE</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={200}>
          <p className="text-lg text-white font-semibold mb-4 px-2 sm:px-0">
            Un lieu né d'une envie simple&nbsp;: rassembler, partager, célébrer le goût du quotidien.
          </p>

          <div className="prose prose-white mx-auto text-center text-white leading-relaxed px-2 sm:px-0">
            <p>
              Le Café Rostand, c’est l’histoire d’un quartier qui reprend vie. Une petite échoppe, une équipe passionnée, et l’envie de créer un café où chaque saveur locale rime avec convivialité.
            </p>
            <p>
              Alexandre Jullien et le chef Albert Bontrain misent sur la saison, la générosité, le sourire. Ici, les habitués croisent les curieux, et le jardin privatif invite à profiter des beaux jours.
            </p>
            <p>
              Depuis 2020, le Café Rostand est devenu le rendez-vous gourmand du Haillan&nbsp;: cafés du matin, déjeuners partagés, soirées détendues autour de tapas et cocktails maison. Venez vivre l’instant.
            </p>
          </div>

          <p className="mt-6 text-base text-gold px-2 sm:px-0">La porte est toujours ouverte. Entrez, partagez, savourez.</p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Story;