import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import profile from '../brand/profile';

// Composant SVG pour l'icône Google Business
const GoogleBusinessIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.14 0 5 3.14 5 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    <path d="M12 22c-1.1 0-2-.9-2-2 0-.55.22-1.05.59-1.41L12 17.17l1.41 1.42c.37.36.59.86.59 1.41 0 1.1-.9 2-2 2z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gold mb-6">
            CONTACT
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour toute question ou demande particulière. 
            N'hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <h2 className="text-2xl font-medium text-black dark:text-cream-light mb-6">
                Informations pratiques
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium text-black dark:text-cream-light">Adresse</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        {profile.address?.street}<br />
                        {profile.address?.postal} {profile.address?.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium text-black dark:text-cream-light">Téléphone</h3>
                    <a 
                      href={`tel:+33${(profile.phoneHref ?? '').replace(/^0/,'')}`} 
                      className="text-gold hover:text-gold/80 transition-colors duration-300"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium text-black dark:text-cream-light">Email</h3>
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="text-gold hover:text-gold/80 transition-colors duration-300"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium text-black dark:text-cream-light mb-2">Horaires</h3>
                    <div className="text-gray-600 dark:text-gray-400 space-y-1">
                      {Object.entries(profile.hours ?? {}).map(([day, hours]) => (
                        <p key={day}><strong>{day} :</strong> {hours}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-medium text-black dark:text-cream-light mb-4">
                Suivez-nous & Avis
              </h3>
              <div className="flex space-x-4">
                <a 
                  href={profile.links?.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                  title="Notre Instagram"
                >
                  <Instagram className="h-6 w-6 text-gold" />
                </a>
                <a 
                  href={profile.links?.facebook} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                  title="Notre Facebook"
                >
                  <Facebook className="h-6 w-6 text-gold" />
                </a>
                <a
                  href="https://share.google/PqadiYUc8yqC1isEp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gold/10 hover:bg-gold/20 rounded-full transition-colors duration-300"
                  title="Notre fiche Google Business"
                >
                  <GoogleBusinessIcon className="h-6 w-6 text-gold" />
                </a>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Laissez-nous un avis sur Google Business !
              </p>
            </div>

            {/* Transport */}
            <div className="bg-gold/10 dark:bg-gold/20 rounded-lg p-8">
              <h3 className="text-xl font-medium text-black dark:text-cream-light mb-4">
                Accès & Transport
              </h3>
              <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Métro :</strong> Châtelet-Les Halles (Lignes 1, 4, 7, 11, 14)</p>
                <p><strong>Bus :</strong> Lignes 21, 27, 38, 67, 74, 81, 85</p>
                <p><strong>Parking :</strong> Forum des Halles (5min à pied)</p>
                <p><strong>Voiturier :</strong> Service disponible sur réservation</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl h-full">
              <h3 className="text-xl font-medium text-black dark:text-cream-light mb-6">
                Notre emplacement
              </h3>
              
              {/* Embedded Google Map using profile.address.full */}
              {profile.address?.full ? (
                <div className="w-full h-96 rounded-lg overflow-hidden mb-6">
                  <iframe
                    title="Carte - Le Café Rostand"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(profile.address.full)}&output=embed`}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : (
                <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <MapPin className="h-12 w-12 mx-auto mb-4 text-gold" />
                    <p>Carte interactive Google Maps</p>
                    <p className="text-sm mt-2">Adresse non disponible</p>
                  </div>
                </div>
              )}

              {/* Directions Button (dynamic) */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(profile.address?.full ?? '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-gold/90 text-black py-3 px-6 font-medium rounded-lg transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                OBTENIR L'ITINÉRAIRE
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-black dark:text-cream-light mb-6 text-center">
              Envoyez-nous un message
            </h2>
            
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Votre message..."
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-black px-8 py-3 font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
                >
                  ENVOYER LE MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;