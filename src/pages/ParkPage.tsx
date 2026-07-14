import { useState, useEffect } from 'react';
import { MapPin, Clock, Zap, ChevronLeft, CheckCircle } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import StructuredData from '../components/StructuredData';

export default function ParkPage() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
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
                src="https://images.pexels.com/photos/1190338/pexels-photo-1190338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Vue aérienne du circuit ZMX Park"
                className="w-full h-96 object-cover border-4 border-zmx-gold rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">
                Libérez votre <span className="text-zmx-gold">adrénaline</span>
              </h2>
              <p className="text-lg text-zmx-gray mb-6">
                Profitez de nos circuits professionnels MX, SX et Enduro pour des sessions de roulage libre ou encadré.
              </p>
              <button
                onClick={() => setShowCalendar(true)}
                className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition self-start rounded-xl"
              >
                Réserver ma session
              </button>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">
              Nos <span className="text-zmx-gold">tarifs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Session 1h', price: '10€', features: ['1 heure de roulage', 'Accès MX, SX et Enduro', 'Roulage libre ou encadré'] },
                { title: 'Demi-journée', price: '20€', features: ['Demi-journée de roulage', 'Accès MX, SX et Enduro', 'Roulage libre ou encadré'], popular: true },
                { title: 'Journée', price: '35€', features: ['Journée complète', 'Accès MX, SX et Enduro', 'Roulage libre ou encadré'] },
              ].map((plan) => (
                <div key={plan.title} className={`glass-card ${plan.popular ? 'border-4' : 'border-2'} border-zmx-gold p-8 text-center rounded-2xl hover:border-zmx-gold transition`}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold rounded-full">POPULAIRE</div>}
                  <h3 className="text-2xl font-display uppercase mb-4">{plan.title}</h3>
                  <p className="text-5xl font-bold text-zmx-gold mb-6">{plan.price}</p>
                  <ul className="text-left space-y-3 text-zmx-gray mb-8">
                    {plan.features.map((f) => <li key={f} className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-zmx-gold" /> {f}</li>)}
                  </ul>
                  <button onClick={() => setShowCalendar(true)} className="w-full bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase hover:bg-white transition rounded-xl">Réserver</button>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect border border-zmx-gold/50 p-12 text-center rounded-2xl">
            <h2 className="text-4xl font-display uppercase mb-6">
              Informations <span className="text-zmx-gold">pratiques</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
              <div className="glass-card border border-zmx-gold/30 p-6 rounded-2xl">
                <MapPin className="w-10 h-10 text-zmx-gold mb-4" />
                <p className="font-bold text-xl mb-3">Circuit Jancigny</p>
                <p className="text-zmx-gray">21550 Jancigney · 35 min de Dijon</p>
              </div>
              <div className="glass-card border border-zmx-gold/30 p-6 rounded-2xl">
                <Clock className="w-10 h-10 text-zmx-gold mb-4" />
                <p className="font-bold text-xl mb-3">Horaires</p>
                <p className="text-zmx-gray">Selon saison · Mar-Dim</p>
              </div>
            </div>
            <button onClick={() => setShowCalendar(true)} className="bg-zmx-gold text-zmx-black px-12 py-4 font-bold text-xl uppercase hover:bg-white transition rounded-xl">
              Réserver maintenant
            </button>
          </div>
        </div>
      </div>

      {showCalendar && <BookingCalendar service="park" onClose={() => setShowCalendar(false)} />}
    </div>
  );
}
