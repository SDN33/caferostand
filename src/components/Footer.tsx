import { ExternalLink, Instagram, Facebook } from 'lucide-react';
import profile from '../brand/profile';

// Composant SVG pour l'icône Google Business
const GoogleBusinessIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.14 0 5 3.14 5 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    <path d="M12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41L12 17.17l1.41 1.42c.37.36.59.86.59 1.41 0 1.1-.9 2-2 2z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Restaurant Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif text-gold mb-4">{profile.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {profile.tagline}
              <br />
              {profile.address?.full}
            </p>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className="text-lg font-medium mb-4 text-cream-light">Suivez-nous</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.instagram.com/lecaferostandoff/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                title="Notre Instagram"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a
                href="https://www.facebook.com/lecaferostand"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                title="Notre Facebook"
              >
                <Facebook className="h-5 w-5 text-gold" />
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.address?.full ?? "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                title="Notre fiche Google Business"
              >
                <GoogleBusinessIcon className="h-5 w-5 text-gold" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3">Laissez-nous un avis !</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium mb-4 text-cream-light">Contact</h4>
            <p className="text-gray-400 text-sm">
              <a
                href={`tel:+33${(profile.phoneHref ?? '').replace(/^0/, '')}`}
                className="hover:text-gold transition-colors duration-300"
              >
                {profile.phone}
              </a>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              <a href={`mailto:${profile.email}`} className="hover:text-gold transition-colors duration-300">
                {profile.email}
              </a>
            </p>
          </div>
        </div>

        {/* Reviews Reminder */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-medium mb-2 text-cream-light">Nos clients nous recommandent</h4>
            <p className="text-gray-400 text-sm">Découvrez leurs avis sur nos plateformes partenaires</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
            {/* Google */}
            <a
              href="https://share.google/me96bLFkIyjLUZATH"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <img src="https://www.ecrivus-multimedia.nl/wp-content/uploads/2023/11/png-transparent-logo-google-customer-service-review-google.png" alt="Google" className="h-6 w-6 object-contain" />
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                <span className="text-white text-sm font-medium">4.5</span>
                <span className="text-gray-400 text-xs">(989)</span>
              </div>
            </a>


            {/* TheFork */}
            <button onClick={() => profile.links?.theFork && window.open(profile.links.theFork, '_blank', 'noopener,noreferrer')} className="group flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/The_fork_logo.png" alt="TheFork" className="h-6 w-6 object-contain" />
              <div className="flex items-center gap-1">
                <span className="text-yellow-400 text-xs">⭐⭐⭐⭐⭐</span>
                <span className="text-white text-sm font-medium">9/10</span>
                <span className="text-gray-400 text-xs">(253)</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4">
            <div className="mb-2 md:mb-0 text-sm text-gray-400">
              © {new Date().getFullYear()} Café Rostand — Tous droits réservés.<br />
              2 Place Henri Bos, 33185 Le Haillan — Tél : <a href="tel:+33556780000" className="text-gold hover:text-gold/80">05 56 78 00 00</a>
            </div>
            <div className="text-sm">
              Propulsé par{' '}
              <a href="https://stillinov.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 font-medium inline-flex items-center">
                Still-inov Agency
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;