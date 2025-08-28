import React from 'react';
import { Link } from 'react-router-dom';

const CarteBoissons: React.FC = () => (
  <section className="bg-black text-white min-h-screen py-12 px-4 sm:px-8 lg:px-24">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
        <img
          src="/images/unnamed (10).jpg"
          alt="Portrait Audrey mixologue"
          className="w-40 h-40 rounded-2xl object-cover shadow-lg mb-4 md:mb-0"
        />
        <div>
          <h1 className="text-4xl font-serif text-gold mb-2">Le mot de la cheffe du bar</h1>
          <blockquote className="text-lg font-light text-white/90 mb-4 border-l-4 border-gold pl-4 italic">
            “Au fil de mes nombreux voyages, j'ai pris goût à associer saveurs et couleurs pour créer des cocktails originaux. Ma passion de la mixologie m'amène à imaginer des associations ayant pour but de vous étonner. J'aspire à vous faire voyager à chaque nouvelle création.”
          </blockquote>
          <div className="text-right w-full text-gold font-serif font-medium mb-2">— Audrey</div>
        </div>
      </div>
      <h2 className="text-3xl font-serif text-gold mb-6">CARTE DES BOISSONS</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-serif text-gold mb-2">NOS COCKTAILS</h3>
          <ul className="text-lg font-light">
            <li>Mojito <span className="float-right">10€</span></li>
            <li>Mojito fruits <span className="float-right">11€</span></li>
            <li className="ml-4 text-sm text-gray-400">Fraise / Framboise / Passion</li>
            <li>Mojito royal <span className="float-right">12€</span></li>
            <li>Ti-Punch - 3 rivières 50° <span className="float-right">9€</span></li>
            <li>Ti-Punch - La Mauny 50° <span className="float-right">9€</span></li>
            <li>Caipirinha Cachaca <span className="float-right">9€</span></li>
            <li>Caipiroska vodka <span className="float-right">9€</span></li>
            <li>Daiquiri <span className="float-right">9€</span></li>
            <li>Daiquiri fruits <span className="float-right">9.5€</span></li>
            <li className="ml-4 text-sm text-gray-400">Fraise / Framboise / Passion</li>
            <li>Aperol Spritz <span className="float-right">10€</span></li>
            <li>Campari Spritz <span className="float-right">10€</span></li>
            <li>Fiorente (liqueur de sureau) <span className="float-right">12€</span></li>
            <li>Sarti Rosa <span className="float-right">11€</span></li>
            <li>Piña colada <span className="float-right">10€</span></li>
            <li>Cuba libre Trois Rivières ambré <span className="float-right">9€</span></li>
            <li>Gin Tonic Bulldog London Dry <span className="float-right">11€</span></li>
            <li>Lillet Tonic (rosé ou blanc) <span className="float-right">9€</span></li>
            <li>Jamaican / London / Moscow mule <span className="float-right">10€</span></li>
            <li>Rostand expresso <span className="float-right">11€</span></li>
            <li className="ml-4 text-sm text-gray-400">Vodka, Kahlua Baileys, expresso</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-serif text-gold mb-2">NOS ORIGINAUX</h3>
          <ul className="text-lg font-light">
            <li>Café des îles <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Rhum Kraken roast coffee, Frangelico, liqueur de noisette, purée de passion et jus d'ananas</li>
            <li>Green Asian <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Gin, menthe, liqueur de sureau fiorente, purée passion, citron vert, wasabi, tonic</li>
            <li>Blanc coco <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Rhum ambré trois rivières, liqueur de cacao blanc, purée de coco, jus de gingembre</li>
            <li>L’archipel <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Sarti (liqueur mangue / passion), rhum Trois Rivières ambré, purée coco, purée fraise, citron, jus d'ananas</li>
            <li>Mwen swef <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Rhum arrangé ananas / passion 4 épices, purée de passion, citron vert, jus d'ananas, eau gazeuse</li>
            <li>L’Olivia <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Rhum ambré trois rivières, purée de fraise, menthe, liqueur de litchi, citron vert, ginger beer</li>
            <li>Violette fizz <span className="float-right">13€</span></li>
            <li className="ml-4 text-sm text-gray-400">Vodka, liqueur violette, sirop hibiscus, citron vert, limonade, eau pétillante</li>
          </ul>
        </div>
        {/* ...other sections: classiques, apéritifs, spiritueux, rhums, bières, softs, mocktails, chaudes, cave... */}
        <div className="mt-8">
          <Link to="/" className="inline-block bg-gold hover:bg-gold/90 text-black px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 text-lg">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CarteBoissons;
