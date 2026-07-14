import { useState, useEffect } from 'react';
import { Target, TrendingUp, Award, Brain, Zap, ChevronLeft, Clock, Users } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';

export default function FuturePage() {
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
              ZMX <span className="text-zmx-gold">FUTURE</span>
            </h1>
            <p className="text-2xl text-zmx-gray max-w-3xl mx-auto">
              Coaching haute performance pour atteindre vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img
                src="/gemini-2.5-flash-image-preview_Coach_pointing_at_electric_motorbike_rider_trackside_professional_sports_lighting_dans_un_circuit-0.jpg"
                alt="Coach ZMX Future au bord de la piste"
                className="w-full h-96 object-cover border-4 border-zmx-gold"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">
                Passez au <span className="text-zmx-gold">niveau supérieur</span>
              </h2>
              <p className="text-lg text-zmx-gray mb-6">
                Vous stagnez depuis trop longtemps ? Vous sentez que vous avez le potentiel mais quelque chose
                vous empêche de progresser ?
              </p>
              <p className="text-lg text-zmx-gray mb-8">
                Nos coachs experts vous débloquent en quelques sessions ce qui vous aurait pris des années seul.
                Analyse vidéo, débriefing personnalisé, programme sur mesure.
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition self-start"
              >
                Réserver mon coaching
              </button>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Ce que vous <span className="text-zmx-gold">débloquez</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Target className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Précision chirurgicale</h3>
                <p className="text-zmx-gray mb-4">
                  L'électrique permet une précision impossible avec une thermique. Le couple instantané,
                  le silence, la concentration maximale.
                </p>
                <p className="text-zmx-gold font-bold">
                  Vos trajectoires deviennent parfaites. Vos temps s'effondrent.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <Brain className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Analyse pro</h3>
                <p className="text-zmx-gray mb-4">
                  Chaque session est filmée et analysée. Vous voyez exactement où vous perdez du temps,
                  où vous pouvez gagner.
                </p>
                <p className="text-zmx-gold font-bold">
                  Plus de suppositions. Que des faits. Que des résultats.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8">
                <TrendingUp className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Progression garantie</h3>
                <p className="text-zmx-gray mb-4">
                  Programme personnalisé basé sur vos forces et vos faiblesses. Exercices ciblés.
                  Suivi session après session.
                </p>
                <p className="text-zmx-gold font-bold">
                  En 10 sessions, vous ne vous reconnaîtrez plus.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Les erreurs que vous <span className="text-zmx-gold">évitez</span>
            </h2>
            <div className="glass-effect border border-zmx-gold/30 p-12">
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-red-400">❌ Sans coaching</h3>
                  <ul className="space-y-3 text-zmx-gray">
                    <li>• Vous répétez les mêmes erreurs sans le savoir</li>
                    <li>• Vous développez de mauvaises habitudes</li>
                    <li>• Vous progressez 5x plus lentement</li>
                    <li>• Vous risquez la blessure par mauvaise technique</li>
                    <li>• Vous abandonnez par frustration</li>
                  </ul>
                </div>
                <div className="border-l-4 border-zmx-gold pl-6">
                  <h3 className="text-2xl font-bold mb-3 text-zmx-gold">✓ Avec ZMX Future</h3>
                  <ul className="space-y-3 text-white">
                    <li>• Chaque erreur est identifiée et corrigée</li>
                    <li>• Vous développez la bonne technique dès le départ</li>
                    <li>• Progression rapide et mesurable</li>
                    <li>• Technique sûre qui protège votre corps</li>
                    <li>• Motivation constante grâce aux résultats</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Votre transformation <span className="text-zmx-gold">garantie</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-effect border border-zmx-gold/30 p-8 text-center">
                <div className="text-6xl font-display text-zmx-gold mb-4">1</div>
                <h3 className="text-2xl font-display uppercase mb-4">Après 1 session</h3>
                <p className="text-zmx-gray">
                  Vous identifiez vos 3 plus gros points faibles. Vous comprenez enfin pourquoi vous stagniez.
                  Vous repartez avec un plan d'action clair.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8 text-center">
                <div className="text-6xl font-display text-zmx-gold mb-4">5</div>
                <h3 className="text-2xl font-display uppercase mb-4">Après 5 sessions</h3>
                <p className="text-zmx-gray">
                  Vos amis remarquent la différence. Votre style est plus fluide, plus confiant.
                  Vous gagnez 3-5 secondes par tour.
                </p>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-8 text-center">
                <div className="text-6xl font-display text-zmx-gold mb-4">10</div>
                <h3 className="text-2xl font-display uppercase mb-4">Après 10 sessions</h3>
                <p className="text-zmx-gray">
                  Vous êtes méconnaissable. Vous pilotez comme un pro. Vous êtes prêt pour la compétition
                  si vous le souhaitez.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20 glass-effect border border-zmx-gold/50 p-12">
            <h2 className="text-4xl font-display uppercase text-center mb-8">
              Témoignages <span className="text-zmx-gold">vérifiés</span>
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-zmx-gold pl-6">
                <p className="text-xl italic mb-4">
                  "En 8 sessions, j'ai gagné 7 secondes sur mon meilleur chrono. Mon coach a identifié
                  en 10 minutes ce que je n'avais pas vu en 2 ans. Incroyable."
                </p>
                <p className="text-zmx-gold">- Alexandre, 28 ans, pilote amateur</p>
              </div>
              <div className="border-l-4 border-zmx-gold pl-6">
                <p className="text-xl italic mb-4">
                  "J'avais peur de me blesser avec mes mauvaises habitudes. Le coaching m'a appris
                  la bonne technique. Maintenant je pilote plus vite ET plus sûr."
                </p>
                <p className="text-zmx-gold">- Morgane, 32 ans, reconversion pro</p>
              </div>
              <div className="border-l-4 border-zmx-gold pl-6">
                <p className="text-xl italic mb-4">
                  "L'analyse vidéo est un game-changer. Tu te vois piloter et tu comprends TOUT.
                  Impossible de progresser aussi vite sans ça."
                </p>
                <p className="text-zmx-gold">- Kevin, 25 ans, compétiteur</p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              RÉSERVEZ VOTRE <span className="text-zmx-gold">COACHING</span>
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
            <Award className="w-16 h-16 text-zmx-gold mx-auto mb-6" />
            <h2 className="text-4xl font-display uppercase mb-6">
              Formules <span className="text-zmx-gold">coaching</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <h3 className="text-2xl font-display uppercase mb-3">Découverte</h3>
                <p className="text-4xl font-bold text-zmx-gold mb-4">149€</p>
                <p className="text-zmx-gray mb-4">1 session de 2h</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ Analyse de votre niveau</li>
                  <li>✓ Identification des axes d'amélioration</li>
                  <li>✓ 1 vidéo débriefing</li>
                  <li>✓ Plan de progression personnalisé</li>
                </ul>
              </div>
              <div className="glass-effect border-4 border-zmx-gold p-6 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold">
                  POPULAIRE
                </div>
                <h3 className="text-2xl font-display uppercase mb-3">Future</h3>
                <p className="text-4xl font-bold text-zmx-gold mb-4">649€</p>
                <p className="text-zmx-gray mb-4">5 sessions de 2h</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ Tout de la formule Découverte</li>
                  <li>✓ Programme personnalisé évolutif</li>
                  <li>✓ 5 vidéos débriefing</li>
                  <li>✓ Suivi entre les sessions</li>
                  <li>✓ Économie de 100€</li>
                </ul>
              </div>
              <div className="glass-effect border border-zmx-gold/30 p-6">
                <h3 className="text-2xl font-display uppercase mb-3">Elite</h3>
                <p className="text-4xl font-bold text-zmx-gold mb-4">1199€</p>
                <p className="text-zmx-gray mb-4">10 sessions de 2h</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ Tout de la formule Future</li>
                  <li>✓ Coach dédié</li>
                  <li>✓ 10 vidéos débriefing</li>
                  <li>✓ Accès prioritaire au circuit</li>
                  <li>✓ Économie de 300€</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center mb-6">
              <Clock className="w-6 h-6 text-zmx-gold" />
              <p className="text-zmx-gray">Sessions sur rendez-vous du mardi au dimanche</p>
            </div>
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-zmx-gold text-zmx-black px-12 py-4 font-bold text-xl uppercase hover:bg-white transition"
            >
              Réserver mon coaching
            </button>
          </div>
        </div>
      </div>

      {showCalendar && (
        <BookingCalendar
          service="future"
          onClose={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}
