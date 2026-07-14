import { useState, useEffect } from 'react';
import { MapPin, Clock, Users, Shield, Zap, Heart, Trophy, ChevronLeft } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import StructuredData from '../components/StructuredData';

export default function ParkPage() {
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
      <StructuredData type="park" />
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

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-display uppercase mb-6">
              ZMX <span className="text-zmx-gold">PARK</span>
            </h1>
            <p className="text-2xl text-zmx-gray max-w-3xl mx-auto">
              Roulages libres ou encadrés sur circuits MX, SX et Enduro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src="/gemini-2.5-flash-image-preview_Top-down_aerial_view_of_MX_SX_circuits_with_spectator_zones_earthy_texture_ZMX_branding-0.jpg"
                alt="Vue aérienne du circuit ZMX Park"
                className="w-full h-96 object-cover border-4 border-zmx-gold"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">
                Libérez votre <span className="text-zmx-gold">adrénaline</span>
              </h2>
              <p className="text-lg text-zmx-gray mb-6">
                Profitez de nos circuits professionnels MX (Motocross), SX (Supercross) et Enduro pour des sessions
                de roulage libre ou encadré par nos moniteurs expérimentés.
              </p>
              <p className="text-lg text-zmx-gray mb-8">
                Que vous soyez débutant ou pilote confirmé, nos circuits 100% électriques vous offrent une expérience
                unique adaptée à votre niveau, sans le bruit et la pollution des moteurs thermiques.
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition self-start"
              >
                Réserver ma session
              </button>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Ce que vous <span className="text-zmx-gold">gagnez</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Heart className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Sensation pure</h3>
                <p className="text-zmx-gray">
                  Le silence de l'électrique vous permet d'entendre chaque détail : la limite d'adhérence des pneus,
                  le travail des suspensions. Vous êtes totalement connecté à votre pilotage.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Shield className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Sécurité maximale</h3>
                <p className="text-zmx-gray">
                  Circuit homologué, équipements de protection fournis, et présence permanente de nos équipes.
                  Vous pilotez l'esprit tranquille.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Users className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Accessible à tous</h3>
                <p className="text-zmx-gray">
                  Débutant ou expert, enfant ou adulte. L'électrique rend le motocross plus accessible et
                  moins intimidant. Venez en famille ou entre amis.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20 glass-effect border border-zmx-gold/30 p-12">
            <h2 className="text-5xl font-display uppercase text-center mb-8">
              Ce que vous <span className="text-zmx-gold">évitez</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-zmx-gold rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fini le bruit infernal</h3>
                  <p className="text-zmx-gray">
                    Plus de nuisances sonores. Profitez de sessions prolongées sans fatigue auditive.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-zmx-gold rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Puissance adaptée</h3>
                  <p className="text-zmx-gray">
                    Réglage de 10 à 80cv pour une totale harmonie entre le pilote et la moto.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-zmx-gold rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Moins de problèmes mécaniques</h3>
                  <p className="text-zmx-gray">
                    Nos motos sont toujours prêtes. Vous arrivez, vous pilotez. C'est tout.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-zmx-gold rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aucun conflit de voisinage</h3>
                  <p className="text-zmx-gray">
                    Circuit respectueux de l'environnement sonore. On reste en bons termes avec tout le monde.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Réalisez votre <span className="text-zmx-gold">rêve</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Trophy className="w-16 h-16 text-zmx-gold mb-6" />
                <h3 className="text-3xl font-display uppercase mb-6">
                  Devenez le pilote que vous avez toujours voulu être
                </h3>
                <p className="text-lg text-zmx-gray mb-4">
                  Vous avez toujours rêvé de maîtriser un circuit comme les pros ? C'est maintenant possible.
                </p>
                <p className="text-lg text-zmx-gray mb-4">
                  Avec l'électrique, la courbe d'apprentissage est plus douce. Vous progressez plus vite,
                  vous prenez confiance plus rapidement.
                </p>
                <p className="text-lg text-zmx-gold font-bold">
                  Dans 3 mois, vous serez méconnaissable. Dans 6 mois, vous serez celui qu'on admire.
                </p>
              </div>
              <div className="space-y-6">
                <div className="glass-effect border-l-4 border-zmx-gold p-6">
                  <p className="text-xl italic">
                    "J'ai essayé pendant des années avec une moto thermique. Trop dur, trop compliqué.
                    Avec ZMX Park, j'ai enfin compris ce qu'était vraiment piloter."
                  </p>
                  <p className="text-zmx-gold mt-4">- Julien, 34 ans</p>
                </div>
                <div className="glass-effect border-l-4 border-zmx-gold p-6">
                  <p className="text-xl italic">
                    "Mon fils de 12 ans pilote avec moi. C'est notre moment père-fils.
                    Impossible avec une thermique."
                  </p>
                  <p className="text-zmx-gold mt-4">- François, 45 ans</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Nos <span className="text-zmx-gold">tarifs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              <div className="glass-effect border-2 border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition">
                <h3 className="text-2xl font-display uppercase mb-4">Session 1h</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-6">10€</p>
                <ul className="text-left space-y-3 text-zmx-gray mb-8">
                  <li>✓ 1 heure de roulage</li>
                  <li>✓ Accès MX, SX et Enduro</li>
                  <li>✓ Roulage libre ou encadré</li>
                  <li>✓ Bornes de recharge</li>
                </ul>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="w-full bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase hover:bg-white transition"
                >
                  Réserver
                </button>
              </div>

              <div className="glass-effect border-4 border-zmx-gold p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-display uppercase mb-4">Demi-journée</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-6">20€</p>
                <ul className="text-left space-y-3 text-zmx-gray mb-8">
                  <li>✓ Demi-journée de roulage</li>
                  <li>✓ Accès MX, SX et Enduro</li>
                  <li>✓ Roulage libre ou encadré</li>
                  <li>✓ Bornes de recharge</li>
                </ul>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="w-full bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase hover:bg-white transition"
                >
                  Réserver
                </button>
              </div>

              <div className="glass-effect border-2 border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition">
                <h3 className="text-2xl font-display uppercase mb-4">Journée</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-6">35€</p>
                <ul className="text-left space-y-3 text-zmx-gray mb-8">
                  <li>✓ Journée complète</li>
                  <li>✓ Accès MX, SX et Enduro</li>
                  <li>✓ Roulage libre ou encadré</li>
                  <li>✓ Bornes de recharge</li>
                </ul>
                <button
                  onClick={() => setShowCalendar(true)}
                  className="w-full bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase hover:bg-white transition"
                >
                  Réserver
                </button>
              </div>
            </div>

            <div className="glass-effect border border-zmx-gold/30 p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display uppercase mb-6 text-center">
                Cartes d'<span className="text-zmx-gold">abonnement</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-l-4 border-zmx-gold pl-6">
                  <h4 className="text-xl font-bold mb-2">Carte 10 sessions 1h</h4>
                  <p className="text-3xl font-bold text-zmx-gold mb-2">90€</p>
                  <p className="text-zmx-gray">Soit 9€ la session (-10%)</p>
                </div>
                <div className="border-l-4 border-zmx-gold pl-6">
                  <h4 className="text-xl font-bold mb-2">Carte 10 demi-journées</h4>
                  <p className="text-3xl font-bold text-zmx-gold mb-2">180€</p>
                  <p className="text-zmx-gray">Soit 18€ la demi-journée (-10%)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              RÉSERVEZ VOTRE <span className="text-zmx-gold">CRÉNEAU</span>
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
            <h2 className="text-4xl font-display uppercase mb-6">
              Informations <span className="text-zmx-gold">pratiques</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <MapPin className="w-10 h-10 text-zmx-gold mb-4" />
                <p className="font-bold text-xl mb-3">Circuit Jancigny</p>
                <p className="text-zmx-gray mb-2">21550 Jancigny</p>
                <p className="text-zmx-gray">35 min de Dijon · 25 min de Beaune</p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <MapPin className="w-10 h-10 text-zmx-gold mb-4" />
                <p className="font-bold text-xl mb-3">Circuit Champlitte</p>
                <p className="text-zmx-gray mb-2">70600 Champlitte</p>
                <p className="text-zmx-gray">30 km de Jancigny</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 text-zmx-gold mx-auto mb-3" />
                <p className="font-bold mb-2">Horaires</p>
                <p className="text-zmx-gray">Selon saison</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-zmx-gold mx-auto mb-3" />
                <p className="font-bold mb-2">Âge minimum</p>
                <p className="text-zmx-gray">À partir de 6 ans</p>
              </div>
            </div>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-zmx-gold text-zmx-black px-12 py-4 font-bold text-xl uppercase hover:bg-white transition"
            >
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>

      {showCalendar && (
        <BookingCalendar
          service="park"
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}
