import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate reservation submission
    alert('Réservation enregistrée ! Nous vous confirmerons par email dans les plus brefs délais.');
  };

  const timeSlots = [
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

     return (
       <div className="min-h-screen pt-24 pb-16 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-gold mb-6">
            RÉSERVATION
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Réservez votre table en 30 secondes et préparez-vous à vivre 
            une expérience culinaire inoubliable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
            <h2 className="text-2xl font-medium text-black dark:text-cream-light mb-6">
              Informations de réservation
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    Heure
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  >
                    <option value="">Choisir l'heure</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Users className="h-4 w-4 inline mr-2" />
                  Nombre de convives
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'personne' : 'personnes'}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Demandes spéciales (allergies, célébration...)
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                  placeholder="Mentionnez ici toute information importante..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-black py-4 font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg"
              >
                CONFIRMER MA RÉSERVATION
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-medium text-black dark:text-cream-light mb-4">
                Informations importantes
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>• Réservations acceptées jusqu'à 21h30</p>
                <p>• Temps de table : 2h30 en moyenne</p>
                <p>• Annulation gratuite jusqu'à 24h avant</p>
                <p>• Code vestimentaire : tenue soignée appréciée</p>
                <p>• Menu enfant disponible sur demande</p>
              </div>
            </div>

            <div className="bg-gold/10 dark:bg-gold/20 rounded-lg p-8">
              <h3 className="text-2xl font-medium text-black dark:text-cream-light mb-4">
                Réservation express
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Besoin d'une table en urgence ? Appelez-nous directement.
              </p>
              <a 
                href="tel:+33142123456" 
                className="inline-flex items-center bg-gold hover:bg-gold/90 text-black px-6 py-3 font-medium rounded-lg transition-all duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                01 42 12 34 56
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
              <h3 className="text-xl font-medium text-black dark:text-cream-light mb-4">
                Nos horaires
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p><strong>Mardi - Samedi :</strong> 19h00 - 23h30</p>
                <p><strong>Dimanche :</strong> 12h00 - 15h00 | 19h00 - 22h30</p>
                <p><strong>Lundi :</strong> Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;