import { useState } from 'react';
import { Bike, Calendar, Shield, Wrench, Zap, ChevronLeft } from 'lucide-react';
import BookingCalendar from '../components/BookingCalendar';
import StructuredData from '../components/StructuredData';

export default function RentPage() {
  const [showCalendar, setShowCalendar] = useState(false);

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
            <ChevronLeft className="w-5 h-5" /><span>Retour</span>
          </a>
        </div>
      </nav>

      <div className="relative">
        <div className="absolute inset-0 h-[600px]">
          <img src="/stark.png" alt="Location moto électrique Stark VARG chez ZMX Rent" className="w-full h-full object-cover bg-zmx-black" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-zmx-black/70 via-zmx-black/60 to-zmx-black" />
        </div>

        <div className="relative pt-32 pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl font-display uppercase mb-6 drop-shadow-2xl">ZMX <span className="text-zmx-gold">RENT</span></h1>
              <p className="text-2xl text-white max-w-3xl mx-auto drop-shadow-lg">Louez une moto électrique pour rouler sur le circuit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-16 bg-gradient-to-b from-zmx-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img src="/electric-motocross-rider-jumping.jpg" alt="Stark Varg électrique disponible à la location ZMX Rent" className="w-full h-96 object-cover bg-zmx-black border-4 border-zmx-gold rounded-2xl" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">Roulez sur le <span className="text-zmx-gold">circuit</span> avec nos motos</h2>
              <p className="text-lg text-zmx-gray mb-6">Vous n'avez pas de moto électrique ? Vous voulez essayer un modèle différent ? Vous préférez ne pas user votre propre machine ?</p>
              <p className="text-lg text-zmx-gray mb-8">Avec ZMX Rent, accédez à notre flotte de motos électriques haute performance. Utilisez-les directement sur le circuit ZMX Park. Parfait état garanti, entretien inclus.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowCalendar(true)} className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition rounded-xl">Réserver un créneau</button>
                <a href="/future" className="border-2 border-zmx-gold text-zmx-gold px-8 py-4 font-bold text-xl uppercase hover:bg-zmx-gold hover:text-zmx-black transition flex items-center justify-center rounded-xl">Découvrir les stages</a>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Notre <span className="text-zmx-gold">flotte</span></h2>
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="glass-card border border-zmx-gold/30 rounded-2xl overflow-hidden group hover:border-zmx-gold/70 transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src="/gemini-2.5-flash-image-preview_Electric_dirt_bike_Stark_Varg_black_background_golden_lighting_studio-grade_product_shot-2.jpg"
                    alt="Stark VARG EX"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zmx-black/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-zmx-gold bg-zmx-black/60 px-3 py-1 rounded-full">Électrique</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display uppercase mb-2">Stark VARG <span className="text-zmx-gold">EX</span></h3>
                  <p className="text-zmx-gray text-sm mb-4">La référence de la compétition électrique. Puissance et précision pour rider à son niveau.</p>
                  <button onClick={() => setShowCalendar(true)} className="w-full bg-zmx-gold text-zmx-black py-3 font-bold uppercase hover:bg-white transition rounded-xl text-sm">Réserver</button>
                </div>
              </div>

              <div className="glass-card border border-zmx-gold/30 rounded-2xl overflow-hidden group hover:border-zmx-gold/70 transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src="/electric-motocross-rider-jumping.jpg"
                    alt="MX électrique"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zmx-black/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-zmx-gold bg-zmx-black/60 px-3 py-1 rounded-full">Électrique</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display uppercase mb-2">MX <span className="text-zmx-gold">électrique</span></h3>
                  <p className="text-zmx-gray text-sm mb-4">Idéale pour le circuit MX. Accessible, maniable, et puissante pour progresser.</p>
                  <button onClick={() => setShowCalendar(true)} className="w-full bg-zmx-gold text-zmx-black py-3 font-bold uppercase hover:bg-white transition rounded-xl text-sm">Réserver</button>
                </div>
              </div>

              <div className="glass-card border border-zmx-gold/30 rounded-2xl overflow-hidden group hover:border-zmx-gold/70 transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src="https://images.pexels.com/photos/163210/motocross-sport-moto-rider-163210.jpeg"
                    alt="Torrot MX électrique"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zmx-black/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-widest text-zmx-gold bg-zmx-black/60 px-3 py-1 rounded-full">Électrique</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display uppercase mb-2">Torrot <span className="text-zmx-gold">MX</span></h3>
                  <p className="text-zmx-gray text-sm mb-4">La Torrot MX : légère, efficace, parfaite pour débuter ou rider en famille sur le circuit.</p>
                  <a href="https://torrot.com/en/torrot-rent" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-zmx-gold text-zmx-black py-3 font-bold uppercase hover:bg-white transition rounded-xl text-sm">Louer une Torrot</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Ce que vous <span className="text-zmx-gold">gagnez</span></h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bike, title: 'Matériel premium', desc: 'Motos électriques haut de gamme. Toujours à jour, toujours en parfait état.' },
                { icon: Shield, title: 'Zéro souci', desc: 'Assurance circuit incluse. Maintenance comprise. Motos prêtes à rouler.' },
                { icon: Calendar, title: 'Flexibilité totale', desc: 'Location à la session ou à la journée. Réservez votre créneau circuit.' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-zmx-gold/30 p-8 rounded-2xl">
                  <item.icon className="w-12 h-12 text-zmx-gold mb-4" />
                  <h3 className="text-2xl font-display uppercase mb-4">{item.title}</h3>
                  <p className="text-zmx-gray mb-4">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect border border-zmx-gold/50 p-12 text-center rounded-2xl">
            <Wrench className="w-16 h-16 text-zmx-gold mx-auto mb-6" />
            <h2 className="text-4xl font-display uppercase mb-6">Tarifs <span className="text-zmx-gold">location</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="glass-card border border-zmx-gold/30 p-6 rounded-2xl">
                <h3 className="text-2xl font-display uppercase mb-3">Demi-journée</h3>
                <p className="text-5xl font-bold text-zmx-gold mb-4">99€</p>
                <ul className="text-left space-y-2 text-zmx-gray">
                  <li>✓ 3 heures de circuit</li>
                  <li>✓ Moto électrique</li>
                  <li>✓ Assurance circuit incluse</li>
                  <li>✓ Recharge incluse</li>
                </ul>
              </div>
              <div className="glass-card border-4 border-zmx-gold p-6 relative rounded-2xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-zmx-gold text-zmx-black px-4 py-1 text-sm font-bold rounded-full">POPULAIRE</div>
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
            <button onClick={() => setShowCalendar(true)} className="bg-zmx-gold text-zmx-black px-12 py-4 font-bold text-xl uppercase hover:bg-white transition rounded-xl">Réserver ma moto maintenant</button>
            <p className="text-zmx-gray mt-6">Caution de 500€ demandée · Permis moto requis · Équipement obligatoire</p>
          </div>
        </div>
      </div>

      {showCalendar && <BookingCalendar service="rent" onClose={() => setShowCalendar(false)} />}
    </div>
  );
}
