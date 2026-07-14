import { useState } from 'react';
import { Target, TrendingUp, Award, Brain, Zap, ChevronLeft, Clock } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import StructuredData from '../components/StructuredData';

export default function FuturePage() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zmx-black to-gray-900 text-white">
      <StructuredData type="future" />
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-zmx-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-zmx-gold animate-lightning" />
            <span className="text-3xl font-display text-zmx-gold">ZMX</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-zmx-gray hover:text-zmx-gold transition">
            <ChevronLeft className="w-5 h-5" /><span>Retour</span>
          </a>
        </div>
      </nav>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-display uppercase mb-6">ZMX <span className="text-zmx-gold">FUTURE</span></h1>
            <p className="text-2xl text-zmx-gray max-w-3xl mx-auto">Coaching haute performance pour atteindre vos objectifs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img src="/zmx_future.png" alt="Coach ZMX Future au bord de la piste" className="w-full h-96 object-cover border-4 border-zmx-gold rounded-2xl" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">Passez au <span className="text-zmx-gold">niveau supérieur</span></h2>
              <p className="text-lg text-zmx-gray mb-6">Nos coachs experts vous débloquent en quelques sessions ce qui vous aurait pris des années seul.</p>
              <button onClick={() => setShowCalendar(true)} className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition self-start rounded-xl">Réserver mon coaching</button>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Ce que vous <span className="text-zmx-gold">débloquez</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Target, title: 'Précision chirurgicale', desc: "L'électrique permet une précision impossible avec une thermique." },
                { icon: Brain, title: 'Analyse pro', desc: 'Chaque session est filmée et analysée. Vous voyez exactement où vous gagnez.' },
                { icon: TrendingUp, title: 'Progression garantie', desc: 'Programme personnalisé basé sur vos forces et faiblesses.' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-zmx-gold/30 p-8 rounded-2xl">
                  <item.icon className="w-12 h-12 text-zmx-gold mb-4" />
                  <h3 className="text-2xl font-display uppercase mb-4">{item.title}</h3>
                  <p className="text-zmx-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect border border-zmx-gold/50 p-12 text-center rounded-2xl">
            <Award className="w-16 h-16 text-zmx-gold mx-auto mb-6" />
            <h2 className="text-4xl font-display uppercase mb-6">Formules <span className="text-zmx-gold">coaching</span></h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
              {[
                { title: 'Découverte', price: '149€', sub: '1 session de 2h', features: ['Analyse de votre niveau', 'Identification des axes', '1 vidéo débriefing', 'Plan personnalisé'] },
                { title: 'Future', price: '649€', sub: '5 sessions de 2h', features: ['Tout Découverte', 'Programme évolutif', '5 vidéos débriefing', 'Suivi entre sessions'], popular: true },
                { title: 'Elite', price: '1199€', sub: '10 sessions de 2h', features: ['Tout Future', 'Coach dédié', '10 vidéos débriefing', 'Accès prioritaire'] },
              ].map((plan) => (
                <div key={plan.title} className={`glass-card ${plan.popular ? 'border-4' : 'border'} border-zmx-gold p-6 relative rounded-2xl`}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold rounded-full">POPULAIRE</div>}
                  <h3 className="text-2xl font-display uppercase mb-3">{plan.title}</h3>
                  <p className="text-4xl font-bold text-zmx-gold mb-2">{plan.price}</p>
                  <p className="text-zmx-gray mb-4">{plan.sub}</p>
                  <ul className="text-left space-y-2 text-zmx-gray mb-6">
                    {plan.features.map((f) => <li key={f}>✓ {f}</li>)}
                  </ul>
                  <button onClick={() => setShowCalendar(true)} className="w-full bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase hover:bg-white transition rounded-xl">Réserver</button>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center items-center mb-6">
              <Clock className="w-6 h-6 text-zmx-gold" />
              <p className="text-zmx-gray">Sessions sur rendez-vous du mardi au dimanche</p>
            </div>
          </div>
        </div>
      </div>

      {showCalendar && <BookingCalendar service="future" onClose={() => setShowCalendar(false)} />}
    </div>
  );
}
