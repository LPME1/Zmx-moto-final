import { useState } from 'react';
import { Zap, ChevronLeft, Users, MapPin, Sparkles, Trophy, Heart, Gift } from 'lucide-react';
import StructuredData from '../components/StructuredData';

export default function EventPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zmx-black to-gray-900 text-white">
      <StructuredData type="event" />
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
            <h1 className="text-6xl md:text-8xl font-display uppercase mb-6">ZMX <span className="text-zmx-gold">EVENT</span></h1>
            <p className="text-2xl text-zmx-gray max-w-3xl mx-auto">Vos événements sur mesure autour de la moto électrique</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img src="/zmx_event.png" alt="Événement ZMX autour de la moto électrique" className="w-full h-96 object-cover border-4 border-zmx-gold rounded-2xl" loading="lazy" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-display uppercase mb-6">Une expérience <span className="text-zmx-gold">unique</span></h2>
              <p className="text-lg text-zmx-gray mb-6">Notre équipe organise une prise en charge sur mesure de vos événements autour de la moto électrique en adaptant ses services à vos besoins spécifiques.</p>
              <p className="text-lg text-zmx-gray mb-8">Nous pouvons même nous déplacer sur votre site avec nos motos électriques pour créer un événement mémorable directement chez vous.</p>
              <a href="#contact" className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold text-xl uppercase hover:bg-white transition self-start rounded-xl">Demander un devis</a>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Types d'<span className="text-zmx-gold">événements</span></h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Gift, title: 'Séminaires', desc: "Team building et renforcement d'équipe autour d'une activité originale" },
                { icon: Heart, title: 'Enterrements de vie', desc: 'EVJF/EVJG inoubliables avec sensations garanties' },
                { icon: Trophy, title: 'Compétitions', desc: 'Organisation de courses et challenges personnalisés' },
                { icon: Sparkles, title: 'Événements privés', desc: 'Anniversaires, fêtes familiales, ou tout événement spécial' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition rounded-2xl">
                  <item.icon className="w-12 h-12 text-zmx-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-display uppercase mb-4">{item.title}</h3>
                  <p className="text-zmx-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Nos <span className="text-zmx-gold">services</span></h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass-card border-l-4 border-zmx-gold p-8 rounded-2xl">
                <MapPin className="w-10 h-10 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Sur nos circuits</h3>
                <ul className="space-y-3 text-zmx-gray">
                  <li>✓ Accès exclusif aux circuits de Jancigny et Champlitte</li>
                  <li>✓ Mise à disposition du matériel et des motos</li>
                  <li>✓ Encadrement professionnel et sécurisé</li>
                  <li>✓ Espace privatisé pour votre groupe</li>
                  <li>✓ Possibilité de restauration sur place</li>
                </ul>
              </div>
              <div className="glass-card border-l-4 border-zmx-gold p-8 rounded-2xl">
                <Sparkles className="w-10 h-10 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase mb-4">Déplacement sur site</h3>
                <ul className="space-y-3 text-zmx-gray">
                  <li>✓ Transport de nos motos électriques</li>
                  <li>✓ Installation temporaire sur votre lieu</li>
                  <li>✓ Équipe complète déplacée</li>
                  <li>✓ Animations et démonstrations</li>
                  <li>✓ Initiation et baptêmes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-5xl font-display uppercase text-center mb-12">Pourquoi choisir <span className="text-zmx-gold">ZMX Event</span> ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Sur mesure', desc: "Chaque événement est unique. Nous adaptons notre offre à vos besoins, budget et objectifs." },
                { icon: Zap, title: 'Expérience unique', desc: "L'électrique offre une expérience moderne et accessible à tous les niveaux." },
                { icon: Trophy, title: 'Professionnel', desc: 'Équipe expérimentée, matériel de qualité et respect des normes de sécurité.' },
              ].map((item) => (
                <div key={item.title} className="glass-card border border-zmx-gold/30 p-8 rounded-2xl">
                  <item.icon className="w-12 h-12 text-zmx-gold mb-4" />
                  <h3 className="text-2xl font-display uppercase mb-4">{item.title}</h3>
                  <p className="text-zmx-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="glass-effect border-2 border-zmx-gold p-12 rounded-2xl">
            <h2 className="text-5xl font-display uppercase text-center mb-8">Demandez votre <span className="text-zmx-gold">offre sur mesure</span></h2>
            <p className="text-center text-zmx-gray text-xl mb-12">Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé</p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-zmx-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-zmx-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-display uppercase mb-4 text-zmx-gold">Demande envoyée !</h3>
                <p className="text-zmx-gray">Nous vous répondons sous 48h.</p>
              </div>
            ) : (
              <form className="max-w-3xl mx-auto space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Nom de l'entreprise / Organisation" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                  <input type="text" placeholder="Nom du contact" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="email" placeholder="Email" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                  <input type="tel" placeholder="Téléphone" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                </div>
                <select className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none rounded-xl">
                  <option value="">Type d'événement</option>
                  <option value="seminaire">Séminaire d'entreprise</option>
                  <option value="evjf">Enterrement de vie</option>
                  <option value="competition">Compétition / Challenge</option>
                  <option value="anniversaire">Anniversaire</option>
                  <option value="autre">Autre événement privé</option>
                </select>
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="date" placeholder="Date souhaitée" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                  <input type="number" placeholder="Nombre de participants" className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none rounded-xl" />
                </div>
                <select className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none rounded-xl">
                  <option value="">Lieu souhaité</option>
                  <option value="jancigny">Circuit Jancigny</option>
                  <option value="champlitte">Circuit Champlitte</option>
                  <option value="deplacement">Déplacement sur votre site</option>
                </select>
                <textarea placeholder="Décrivez votre projet en détail" rows={6} className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none resize-none rounded-xl"></textarea>
                <button type="submit" className="w-full bg-zmx-gold text-zmx-black px-8 py-4 font-bold uppercase hover:bg-white transition text-xl rounded-xl">Envoyer ma demande</button>
              </form>
            )}

            <div className="mt-12 text-center">
              <p className="text-zmx-gray mb-4">Ou contactez-nous directement :</p>
              <div className="flex flex-wrap justify-center gap-8">
                <div><p className="text-zmx-gold font-bold mb-2">Email</p><p className="text-white">contact@zmxmoto.fr</p></div>
                <div><p className="text-zmx-gold font-bold mb-2">Téléphone</p><p className="text-white">06 XX XX XX XX</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
