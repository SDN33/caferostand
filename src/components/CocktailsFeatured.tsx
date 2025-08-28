import ScrollAnimation from './ScrollAnimations';

const CocktailsFeatured = () => {
  return (
  <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: avatar + quote */}
          <div className="flex items-start gap-6 order-1 md:order-1">
            <ScrollAnimation animation="fadeInUp">
                <img src="https://static.wixstatic.com/media/e5f698_b822e6c3991944ff8e9e0ae3c3610d89~mv2.jpg/v1/fill/w_450,h_616,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed%20(10).jpg" alt="Cheffe du bar Audrey" className="w-56 md:w-96 lg:w-[520px] h-auto rounded-2xl shadow-lg flex-shrink-0 object-cover bg-black" />
            </ScrollAnimation>

            <div>
              <ScrollAnimation animation="fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-wide mb-4 text-gold">Découvrez des cocktails d'exception... Un mot de notre mixologue</h2>
            <blockquote className="text-lg text-gray-300 italic leading-relaxed">“Au fil de mes voyages, j'ai appris à marier ingrédients, textures et couleurs pour créer des cocktails qui surprennent et transportent. Chaque recette puise son inspiration dans une rencontre, un terroir ou une saison, et vise à éveiller vos sens. Je vous invite à goûter ces créations — voyage et émotion au rendez‑vous.”</blockquote>
            <p className="mt-6 font-medium text-gray-200">— Audrey</p>
              </ScrollAnimation>
            </div>
          </div>

          {/* Right: large cocktail image */}
          <div className="order-2 md:order-2">
            <ScrollAnimation animation="fadeInUp" delay={150}>
              <div className="w-full flex justify-center">
                <img src="https://static.wixstatic.com/media/774418_75546fbbf1c84cae9718074b7c34bd03~mv2.jpeg/v1/fit/w_1290,h_565,q_90,enc_avif,quality_auto/774418_75546fbbf1c84cae9718074b7c34bd03~mv2.jpeg" alt="Cocktail feature" className="w-64 md:w-80 lg:w-96 h-[520px] object-cover rounded-xl shadow-2xl" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CocktailsFeatured;
