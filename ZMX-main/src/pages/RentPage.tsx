import { useState, useEffect } from 'react';
import { Bike, Calendar, Shield, Wrench, Zap, ChevronLeft, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import StructuredData from '../components/StructuredData';

export default function RentPage() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zmx-black to-gray-900 text-white">
      <StructuredData type="rent" />
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-zmx-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-zmx-gold animate-lightning" />
            <span className="text-3xl font-display text-zmx-gold">ZMX</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-zmx-gray hover:text-zmx-gold transition">
            <ChevronLeft className="w-5 h-5" />
            <span>Retour</span>
          </a>
        </div>
      </nav>

      <div className="relative">
        <div className="absolute inset-0 h-[600px]">
          <img
            src='/electric-motocross-rider-jumping.jpg'
            alt="Motocross électrique en action"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zmx-black/70 via-zmx-black/60 to-zmx-black"></div>
        </div>

        <div className="relative pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-display uppercase mb-6 drop-shadow-2xl">
                ZMX <span className="text-zmx-gold">RENT</span>
              </h1>
              <p className="text-2xl text-white max-w-3xl mx-auto drop-shadow-lg">
                Louez une moto électrique pour rouler sur le circuit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 bg-gradient-to-b from-zmx-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16"></div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src="/stark.png"
                alt="Moto électrique Stark Varg disponible à la location"
                className="w-full h-96 object-contain bg-zmx-black border-4 border-zmx-gold"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">
                Roulez sur le <span className="text-zmx-gold">circuit</span> avec nos motos
              </h2>
              <p className="text-lg text-zmx-gray mb-6">
                Vous n'avez pas de moto électrique ? Vous voulez essayer un modèle différent ?
                Vous préférez ne pas user votre propre machine ?
              </p>
              <p className="text-lg text-zmx-gray mb-8">
                Avec ZMX Rent, accédez à notre flotte de 4 motos électriques haute performance.
                Utilisez-les directement sur le circuit ZMX Park. Parfait état garanti, entretien inclus.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowCalendar(true)}
                  className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition"
                >
                  Réserver un créneau
                </button>
                <a
                  href="/future"
                  className="border-2 border-zmx-gold text-zmx-gold px-8 py-4 font-bold text-xl uppercase hover:bg-zmx-gold hover:text-zmx-black transition flex items-center justify-center"
                >
                  Découvrir les stages
                </a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Ce que vous <span className="text-zmx-gold">gagnez</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Bike className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Matériel premium</h3>
                <p className="text-zmx-gray mb-4">
                  Flotte de 4 motos électriques haut de gamme. Toujours à jour, toujours en parfait état.
                  L'équipement des champions, accessible à tous pour rouler sur notre circuit.
                </p>
                <p className="text-zmx-gold font-bold">
                  Accédez au circuit avec du matériel premium.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Shield className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Zéro souci</h3>
                <p className="text-zmx-gray mb-4">
                  Assurance circuit incluse. Maintenance comprise. Motos prêtes à rouler.
                  Vous arrivez, vous roulez, c'est tout.
                </p>
                <p className="text-zmx-gold font-bold">
                  Parfait si vous n'avez pas de moto ou voulez protéger la vôtre.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Calendar className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Flexibilité totale</h3>
                <p className="text-zmx-gray mb-4">
                  Location à la session ou à la journée. Réservez votre créneau circuit avec une moto.
                  Idéal pour les débutants ou pour varier les sensations.
                </p>
                <p className="text-zmx-gold font-bold">
                  Circuit + moto = solution clé en main.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Pour qui <span className="text-zmx-gold">ZMX Rent</span> ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <CheckCircle className="w-8 h-8 text-zmx-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Vous n'avez pas de moto</h3>
                <p className="text-zmx-gray">
                  Vous voulez découvrir le motocross électrique sans investir dans l'achat d'une machine ?
                  Louez une de nos motos et accédez au circuit immédiatement.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <CheckCircle className="w-8 h-8 text-zmx-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Vous voulez tester</h3>
                <p className="text-zmx-gray mb-4">
                  Envie d'essayer un modèle différent de votre moto habituelle ?
                  Découvrez nos différentes machines avant d'investir.
                </p>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="text-zmx-gold hover:text-white transition text-sm font-bold uppercase"
                >
                  → Essayer une électrique
                </button>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <CheckCircle className="w-8 h-8 text-zmx-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Vous protégez votre moto</h3>
                <p className="text-zmx-gray">
                  Vous possédez une moto mais vous préférez économiser son utilisation ?
                  Utilisez nos motos et gardez la vôtre pour les occasions spéciales.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20 glass-effect border border-zmx-gold/30 p-12">
            <h2 className="text-5xl font-display uppercase text-center mb-8">
              Notre <span className="text-zmx-gold">flotte</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-center text-zmx-gray mb-8">
                4 motos électriques haute performance disponibles à la location pour rouler sur le circuit ZMX Park
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-effect border border-zmx-gold/30 p-6">
                  <h3 className="text-2xl font-display uppercase mb-4 text-zmx-gold">Motos disponibles</h3>
                  <ul className="space-y-3 text-zmx-gray">
                    <li>• Modèles haute performance</li>
                    <li>• Adaptées au circuit MX et SX</li>
                    <li>• Entretien régulier garanti</li>
                    <li>• Réglages prêts à l'emploi</li>
                  </ul>
                </div>
                <div className="glass-effect border border-zmx-gold/30 p-6">
                  <h3 className="text-2xl font-display uppercase mb-4 text-zmx-gold">Inclus</h3>
                  <ul className="space-y-3 text-zmx-gray">
                    <li>• Assurance circuit</li>
                    <li>• Recharge électrique</li>
                    <li>• Vérifications avant chaque session</li>
                    <li>• Support technique sur place</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Comment ça <span className="text-zmx-gold">fonctionne</span> ?
            </h2>
            <div className="glass-effect border border-zmx-gold/30 p-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zmx-gold text-zmx-black flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-display uppercase mb-2">Réservez</h3>
                    <p className="text-zmx-gray">
                      Réservez votre créneau circuit et ajoutez une location de moto à votre réservation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zmx-gold text-zmx-black flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-display uppercase mb-2">Arrivez au circuit</h3>
                    <p className="text-zmx-gray">
                      Présentez-vous au circuit ZMX Park à l'heure de votre réservation avec votre équipement (casque, protections).
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-zmx-gold text-zmx-black flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-display uppercase mb-2">Roulez</h3>
                    <p className="text-zmx-gray">
                      Nous vous remettons une moto prête à rouler, chargée et vérifiée. Il ne vous reste plus qu'à profiter !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              RÉSERVEZ VOTRE <span className="text-zmx-gold">LOCATION</span>
            </h2>
            <div className="max-w-5xl mx-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/zelectronsmx"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>
          </div>

          <div className="glass-effect border border-zmx-gold/50 p-12 text-center">
            <Wrench className="w-16 h-16 text-zmx-gold mx-auto mb-6" />
            <h2 className="text-4xl font-display uppercase mb-6">
              Tarifs <span className="text-zmx-gold">location</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <h3 className="text-2xl font-display uppercase mb-3">Demi-journée</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-4">99€</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ 3 heures de circuit</li>
                  <li>✓ Moto électrique</li>
                  <li>✓ Assurance circuit incluse</li>
                  <li>✓ Recharge incluse</li>
                </ul>
              </div>
              <div className="glass-effect border-4 border-zmx-gold p-6 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-display uppercase mb-3">Journée</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-4">169€</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ Journée complète circuit</li>
                  <li>✓ Moto électrique</li>
                  <li>✓ Assurance circuit incluse</li>
                  <li>✓ Recharge illimitée</li>
                  <li>✓ Économie de 29€</li>
                </ul>
              </div>
            </div>
            <div className="glass-effect border border-zmx-gold/30 p-6 max-w-3xl mx-auto mb-8">
              <h3 className="text-2xl font-display uppercase mb-4 text-center">Flotte de 4 motos</h3>
              <p className="text-center text-zmx-gray mb-4">
                Motos électriques haute performance adaptées aux circuits MX et SX
              </p>
              <div className="text-center text-sm text-zmx-gray">
                Modèles disponibles selon planning de réservation
              </div>
            </div>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-zmx-gold text-zmx-black px-12 py-4 font-bold text-xl uppercase hover:bg-white transition"
            >
              Réserver ma moto maintenant
            </button>
            <p className="text-zmx-gray mt-6">
              Caution de 500€ demandée • Permis moto requis • Équipement obligatoire (casque, protections)
            </p>
          </div>
        </div>
      </div>

      {showCalendar && (
        <BookingCalendar
          service="rent"
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}
