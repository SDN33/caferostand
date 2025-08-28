import React from 'react';
import ScrollAnimation from './ScrollAnimations';

const partners = [
  {
    img: 'https://static.wixstatic.com/media/774418_e8e7b2e16dc74e8aae04deec1d384ac8~mv2.jpg/v1/fill/w_300,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/3c06e980d9ba7e171359731626df9f32.jpg',
    title: 'Fromagerie Fabrice',
    text: `Fidèles à notre volonté de soutenir les producteurs et commerçants de notre région, nous sélectionnons nos fromages auprès de Fabrice, artisan fromager du Haillan, pour des produits frais, authentiques et de proximité.`
  },
  {
    img: 'https://static.wixstatic.com/media/774418_4bd49eded57e4ab881b2a33b605320e1~mv2.jpg/v1/fill/w_290,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5cbbee945e236a555b5c76fbb46d61c5.jpg',
    title: 'Cristalys - Fleuriste',
    text: `Nous avons à cœur de faire vivre notre ville en collaborant avec ses commerçants. C’est pourquoi nous aimons mettre à l’honneur le travail de Cristalys, fleuriste du centre-ville du Haillan, lors de nos événements.`
  },
  {
    img: 'https://static.wixstatic.com/media/774418_9c4422f50f1041ecb9c3ffadb5c05b97~mv2.png/v1/fill/w_210,h_210,al_c,lg_1,q_85,enc_avif,quality_auto/R%20(3).png',
    title: 'ASH du Haillan',
    text: `Un grand merci à l'ASH du Haillan pour leur confiance. Nous sommes ravis de partager cette belle aventure ensemble !`
  },
  {
    img: 'https://static.wixstatic.com/media/774418_b66b061c318849fe891ba0a609f790a0~mv2.webp/v1/fill/w_264,h_264,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/OIP%20(1).webp',
    title: 'Comptoir du Rhum',
    text: `Merci au Comptoir du Rhum pour sa confiance et pour la qualité de ses produits. Heureux de partager ce partenariat qui ravit nos clients !`
  }
];

const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-cream-light/30 dark:bg-black/95" id="section-partners">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-thin tracking-wider font-serif text-gold mb-4">Nos partenaires</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">Fidèles à notre volonté de soutenir les artisans et commerçants locaux, nous mettons en avant ceux qui partagent nos valeurs.</p>
        </div>

        {/* Auto-scrolling partners marquee. Cards keep fixed width/height; text scrolls inside if long. */}
        <div className="overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              display: flex;
              gap: 1.5rem;
              align-items: stretch;
              animation: marquee 24s linear infinite;
            }
            .marquee:hover { animation-play-state: paused; }
          `}</style>

          <div className="marquee">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="flex-shrink-0 w-80 sm:w-96 h-72">
                <div className="rounded-xl overflow-hidden p-4 h-full flex flex-col bg-white/95 dark:bg-black/60 border border-gray-100 dark:border-gray-800 backdrop-blur-sm shadow-lg">
                  <div className="mb-3 h-32 flex items-center justify-center overflow-hidden rounded-md bg-gray-100 dark:bg-black/50">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col text-left">
                    <h3 className="text-lg sm:text-xl font-medium text-black dark:text-cream-light mb-2">{p.title}</h3>
                    <div className="text-gray-600 dark:text-gray-300 leading-relaxed overflow-auto max-h-24 pr-2 whitespace-pre-line">
                      {p.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
