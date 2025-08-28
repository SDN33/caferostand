import React from 'react';
import ScrollAnimation from './ScrollAnimations';
import ParallaxImage from './ParallaxImage';

const GroupEvents: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white" id="section-group-events">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-wide mb-4 text-gold">Repas de groupe &amp; Bons cadeaux</h2>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={150}>
          <p className="text-lg text-gray-300 mb-6">Organisez vos événements chez nous !</p>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={250}>
          <div className="prose prose-lg text-gray-300 mx-auto text-center">
            <p>Repas de famille ou d'entreprise, mariage, baptême, anniversaire, séminaire…</p>
            <p>Réunissez vos proches ou vos collègues autour de moments savoureux grâce à nos menus sur mesure, conçus pour tous vos événements, professionnels comme personnels.</p>

            <h3 className="mt-4 text-lg font-medium text-gray-200">Nos espaces à votre disposition :</h3>
            <ul className="list-disc ml-6 md:ml-0 md:inline-block text-left">
              <li>Deux salles de restaurant, dont une à l’étage – capacité totale : 100 places assises</li>
              <li>Espace bistrot (40 places) à l’ambiance vintage avec grand écran</li>
              <li>Deux terrasses (120 places au total) côté rue et côté jardin, le jardin étant cosy et modulable à votre goût</li>
            </ul>

            <p className="mt-4">La décoration chaleureuse et personnalisable s’adapte à vos envies pour créer un moment unique.</p>

            <p className="mt-4 font-semibold">Merci de nous contacter au moins 10 jours avant votre événement. Nos équipes sont à votre écoute pour composer le menu et l’ambiance qui vous ressemblent.</p>

            {/* Ajout des photos repas de groupe avec effet parallax */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ParallaxImage
                src="https://static.wixstatic.com/media/e5f698_e6ec5898785542c4a2f12b0c85d6c817~mv2.jpg/v1/fill/w_618,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_2429.jpg"
                alt="Repas de groupe 1"
                speed={0.3}
              />
              <ParallaxImage
                src="https://static.wixstatic.com/media/e5f698_fdc1b23f480645b99688b70b25960a26~mv2.jpg/v1/fill/w_804,h_626,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e5f698_fdc1b23f480645b99688b70b25960a26~mv2.jpg"
                alt="Repas de groupe 2"
                speed={0.3}
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GroupEvents;
