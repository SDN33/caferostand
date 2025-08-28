import Hero from '../components/Hero';
import Story from '../components/Story';
import FeaturedDishesHorizontal from '../components/FeaturedDishesHorizontal';
import CocktailsFeatured from '../components/CocktailsFeatured';
import ReservationCTA from '../components/ReservationCTA';
import SectionNavigator from '../components/SectionNavigator';
import Partners from '../components/Partners';
import GroupEvents from '../components/GroupEvents';

const Home = () => {
  return (
    <div>
      {/* Floating section navigator */}
      <SectionNavigator 
        sections={[ 
          { id: 'section-hero', label: 'Accueil' },
          { id: 'section-story', label: 'Notre Histoire' },
          { id: 'section-creations', label: 'Nos Créations' },
          { id: 'section-cocktails', label: 'Cocktails' },
          { id: 'section-reservation', label: 'Réserver' },
          { id: 'section-group-events', label: 'Événements' },
          { id: 'section-partners', label: 'Partenaires' },
        ]}
        offset={72} // approx navbar height
      />

      <div id="section-hero">
        <Hero />
      </div>
      <div id="section-story">
        <Story />
      </div>
      
      <div id="section-creations">
        <FeaturedDishesHorizontal />
      </div>
      <div id="section-cocktails">
        <CocktailsFeatured />
      </div>
      <div id="section-reservation">
        <ReservationCTA />
      </div>
      <div id="section-group-events">
        <GroupEvents />
      </div>
      <div id="section-partners">
        <Partners />
      </div>
    </div>
  );
};

export default Home;