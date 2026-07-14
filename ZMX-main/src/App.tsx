import { useState, useEffect } from 'react';
import { Zap, Leaf, Brain, ChevronRight, Star, Calendar, MapPin, Clock } from 'lucide-react';
import StructuredData from './components/StructuredData';

function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const testimonials = [
    {
      text: "Une expérience incroyable ! Le silence de l'électrique change tout.",
      author: "Marc D.",
      rating: 5
    },
    {
      text: "Les coachs sont pros, le terrain est top. Je reviendrai sans hésiter.",
      author: "Sophie L.",
      rating: 5
    },
    {
      text: "Première fois en électrique, et quelle sensation ! Plus concentré, plus précis.",
      author: "Thomas R.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zmx-black to-gray-900 text-white">
      <StructuredData type="home" />
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-zmx-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/zmx-logo.png" alt="ZMX Team Logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#park" className="hover:text-zmx-gold transition">PARK</a>
            <a href="#future" className="hover:text-zmx-gold transition">FUTURE</a>
            <a href="#rent" className="hover:text-zmx-gold transition">RENT</a>
            <a href="#event" className="hover:text-zmx-gold transition">EVENT</a>
            <a href="#contact" className="hover:text-zmx-gold transition">CONTACT</a>
          </div>
          <a href="/park" className="bg-zmx-gold text-zmx-black px-6 py-2 font-bold uppercase hover:bg-white transition">
            Réserver
          </a>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
        <div className="absolute inset-0">
          <img
            src="/two-riders-sunset.jpg"
            alt="Pilotes de motocross électrique au coucher du soleil"
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zmx-black/70 via-zmx-black/50 to-zmx-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zmx-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Zap className="w-24 h-24 text-zmx-gold animate-lightning" />
              <div className="absolute -inset-4 bg-zmx-gold/20 blur-2xl rounded-full"></div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-display uppercase mb-6 leading-none">
            <span className="text-white">LE MOTOCROSS</span>
            <br />
            <span className="text-zmx-gold">NOUVELLE GÉNÉRATION</span>
          </h1>

          <p className="text-xl md:text-2xl text-zmx-gray mb-12 font-light tracking-wide">
            Silencieux, puissant, accessible. À 35 min de Dijon.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/park" className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold uppercase hover:bg-white transition flex items-center gap-2 group">
              Réserver un créneau
              <ChevronRight className="group-hover:translate-x-1 transition" />
            </a>
            <a href="/future" className="border-2 border-zmx-gold text-zmx-gold px-8 py-4 font-bold uppercase hover:bg-zmx-gold hover:text-zmx-black transition">
              Découvrir les stages
            </a>
            <a href="/rent" className="border-2 border-white text-white px-8 py-4 font-bold uppercase hover:bg-white hover:text-zmx-black transition">
              Essayer une électrique
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <ChevronRight className="w-8 h-8 text-zmx-gold rotate-90" />
        </div>
      </header>

      <main>
        <section id="park" className="py-24 bg-gradient-to-b from-gray-900 to-zmx-black" aria-labelledby="univers-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="univers-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
            LES UNIVERS <span className="text-zmx-gold">ZMX</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="/park" className="group cursor-pointer">
              <div className="glass-effect border-2 border-zmx-gold/30 overflow-hidden hover:border-zmx-gold transition aspect-square relative">
                <img
                  src="/gemini-2.5-flash-image-preview_Top-down_aerial_view_of_MX_SX_circuits_with_spectator_zones_earthy_texture_ZMX_branding-0.jpg"
                  alt="Vue aérienne du circuit ZMX"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zmx-black/90 z-10"></div>
                <div className="absolute inset-0 bg-zmx-gold/10 group-hover:bg-zmx-gold/20 transition z-10"></div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-4xl font-display uppercase text-zmx-gold mb-3 group-hover:text-white transition">
                    ZMX PARK
                  </h3>
                  <p className="text-white text-lg mb-4">Roulage libre sur circuits MX/SX</p>
                  <div className="flex items-center gap-2 text-zmx-gold group-hover:translate-x-2 transition">
                    <span className="uppercase font-bold">Découvrir</span>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </a>

            <a href="/future" className="group cursor-pointer">
              <div className="glass-effect border-2 border-zmx-gold/30 overflow-hidden hover:border-zmx-gold transition aspect-square relative">
                <img
                  src="/gemini-2.5-flash-image-preview_Coach_pointing_at_electric_motorbike_rider_trackside_professional_sports_lighting_dans_un_circuit-0.jpg"
                  alt="Coach avec pilote sur circuit"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zmx-black/90 z-10"></div>
                <div className="absolute inset-0 bg-zmx-gold/10 group-hover:bg-zmx-gold/20 transition z-10"></div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-4xl font-display uppercase text-zmx-gold mb-3 group-hover:text-white transition">
                    ZMX FUTURE
                  </h3>
                  <p className="text-white text-lg mb-4">Stages avec coachs professionnels</p>
                  <div className="flex items-center gap-2 text-zmx-gold group-hover:translate-x-2 transition">
                    <span className="uppercase font-bold">Découvrir</span>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </a>

            <a href="/rent" className="group cursor-pointer">
              <div className="glass-effect border-2 border-zmx-gold/30 overflow-hidden hover:border-zmx-gold transition aspect-square relative bg-zmx-black">
                <img
                  src="/stark.png"
                  alt="Moto électrique Stark Varg"
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zmx-black/90 z-10"></div>
                <div className="absolute inset-0 bg-zmx-gold/10 group-hover:bg-zmx-gold/20 transition z-10"></div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-4xl font-display uppercase text-zmx-gold mb-3 group-hover:text-white transition">
                    ZMX RENT
                  </h3>
                  <p className="text-white text-lg mb-4">Location moto électrique Stark Varg</p>
                  <div className="flex items-center gap-2 text-zmx-gold group-hover:translate-x-2 transition">
                    <span className="uppercase font-bold">Découvrir</span>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </a>

            <a href="/event" className="group cursor-pointer">
              <div className="glass-effect border-2 border-zmx-gold/30 overflow-hidden hover:border-zmx-gold transition aspect-square relative">
                <img
                  src="/two-riders-sunset.jpg"
                  alt="Événements ZMX"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zmx-black/90 z-10"></div>
                <div className="absolute inset-0 bg-zmx-gold/10 group-hover:bg-zmx-gold/20 transition z-10"></div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-4xl font-display uppercase text-zmx-gold mb-3 group-hover:text-white transition">
                    ZMX EVENT
                  </h3>
                  <p className="text-white text-lg mb-4">Événements sur mesure</p>
                  <div className="flex items-center gap-2 text-zmx-gold group-hover:translate-x-2 transition">
                    <span className="uppercase font-bold">Découvrir</span>
                    <ChevronRight />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-zmx-black" aria-labelledby="booking-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="booking-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
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
      </section>

      <section className="py-24 bg-gradient-to-b from-zmx-black to-gray-900" aria-labelledby="electric-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="electric-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
            POURQUOI L'<span className="text-zmx-gold">ÉLECTRIQUE</span> ?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group hover:scale-105 transition duration-300">
              <div className="glass-effect border-2 border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition aspect-square flex flex-col items-center justify-center">
                <Zap className="w-16 h-16 text-zmx-yellow mb-4 group-hover:animate-lightning" />
                <h3 className="text-2xl font-display uppercase text-zmx-gold mb-3">BATTERIE</h3>
                <p className="text-zmx-gray">Autonomie optimale pour des sessions intenses</p>
              </div>
            </div>

            <div className="group hover:scale-105 transition duration-300">
              <div className="glass-effect border-2 border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition aspect-square flex flex-col items-center justify-center">
                <Leaf className="w-16 h-16 text-green-400 mb-4 group-hover:rotate-12 transition" />
                <h3 className="text-2xl font-display uppercase text-zmx-gold mb-3">ZÉRO ÉMISSION</h3>
                <p className="text-zmx-gray">Respect de l'environnement et du voisinage</p>
              </div>
            </div>

            <div className="group hover:scale-105 transition duration-300">
              <div className="glass-effect border-2 border-zmx-gold/30 p-8 text-center hover:border-zmx-gold transition aspect-square flex flex-col items-center justify-center">
                <Brain className="w-16 h-16 text-blue-400 mb-4 group-hover:scale-110 transition" />
                <h3 className="text-2xl font-display uppercase text-zmx-gold mb-3">CONCENTRATION</h3>
                <p className="text-zmx-gray">Moins de bruit, plus de sensations pures</p>
              </div>
            </div>
          </div>

          <div className="glass-effect border-2 border-zmx-gold p-8 text-center">
            <p className="text-xl md:text-2xl text-white mb-8">
              "Moins de bruit, plus de sensations. L'électrique permet de se concentrer sur l'essentiel : <span className="text-zmx-gold font-bold">le pilotage</span>."
            </p>
            <div className="flex flex-wrap justify-center gap-12">
              <div>
                <div className="text-5xl font-display text-zmx-gold mb-2">0</div>
                <div className="text-zmx-gray uppercase text-sm">Huile</div>
              </div>
              <div>
                <div className="text-5xl font-display text-zmx-gold mb-2">+20%</div>
                <div className="text-zmx-gray uppercase text-sm">Focus</div>
              </div>
              <div>
                <div className="text-5xl font-display text-zmx-gold mb-2">-50%</div>
                <div className="text-zmx-gray uppercase text-sm">Entretien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-900 to-zmx-black" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="testimonials-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
            ILS NOUS FONT <span className="text-zmx-gold">CONFIANCE</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="glass-effect border-2 border-zmx-gold p-12 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-zmx-gold text-zmx-gold" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-white mb-6 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <cite className="text-zmx-gold font-display text-xl not-italic">
                — {testimonials[activeTestimonial].author}
              </cite>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === activeTestimonial ? 'bg-zmx-gold' : 'bg-zmx-gray/30'
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-zmx-black to-gray-900" aria-labelledby="video-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="video-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-8">
            LA RÉVOLUTION <span className="text-zmx-gold">EN IMAGES</span>
          </h2>

          <p className="text-center text-zmx-gray text-xl mb-12">
            Première session électrique à Jancigny
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-zmx-black border-4 border-zmx-gold relative overflow-hidden group cursor-pointer">
              <img
                src="/image.png"
                alt="Vidéo ZMX - Première session électrique"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-zmx-black/30 group-hover:bg-zmx-black/50 transition flex items-center justify-center">
                <div className="w-20 h-20 bg-zmx-gold rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-zmx-black border-b-[12px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-zmx-gray uppercase tracking-wider mb-6">Ils parlent de nous</p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="glass-effect border border-zmx-gold/30 px-8 py-4">
                <span className="text-2xl font-display text-zmx-gold">LE BIEN PUBLIC</span>
              </div>
              <div className="glass-effect border border-zmx-gold/30 px-8 py-4">
                <span className="text-2xl font-display text-zmx-gold">MOTO VERTE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zmx-gold text-zmx-black" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-5xl md:text-7xl font-display uppercase mb-6">
            REJOINS LA COMMUNAUTÉ ZMX
          </h2>
          <p className="text-2xl mb-8 font-medium">
            Essais, stages, compétitions
          </p>
          <a href="/park" className="bg-zmx-black text-zmx-gold px-12 py-5 font-bold uppercase text-xl hover:bg-gray-900 transition inline-block">
            Réserver mon créneau
          </a>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-b from-gray-900 to-zmx-black" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="contact-heading" className="text-5xl md:text-7xl font-display uppercase text-center mb-16">
            <span className="text-zmx-gold">CONTACT</span> & ACCÈS
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="glass-effect border-2 border-zmx-gold/30 p-8 mb-8 aspect-square flex flex-col justify-center">
                <MapPin className="w-12 h-12 text-zmx-gold mb-4" />
                <h3 className="text-2xl font-display uppercase text-zmx-gold mb-4">JANCIGNY, CÔTE-D'OR</h3>
                <p className="text-white text-lg mb-2">35 min de Dijon</p>
                <p className="text-white text-lg mb-4">25 min de Beaune</p>
                <p className="text-zmx-gray">Parking gratuit + bornes de recharge disponibles</p>
              </div>
            </div>

            <div className="glass-effect border-2 border-zmx-gold/30 p-8">
              <h3 className="text-2xl font-display uppercase text-zmx-gold mb-6">CONTACTEZ-NOUS</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none"
                />
                <select className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white focus:border-zmx-gold focus:outline-none">
                  <option value="">Service</option>
                  <option value="park">ZMX Park</option>
                  <option value="future">ZMX Future</option>
                  <option value="rent">ZMX Rent</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-white/10 border border-zmx-gold/30 px-4 py-3 text-white placeholder-zmx-gray focus:border-zmx-gold focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-zmx-gold text-zmx-black px-8 py-4 font-bold uppercase hover:bg-white transition"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass-effect border border-zmx-gold/30 p-6 text-center">
              <Clock className="w-10 h-10 text-zmx-gold mx-auto mb-3" />
              <h4 className="font-display uppercase text-zmx-gold mb-2">HORAIRES</h4>
              <p className="text-zmx-gray">Selon saison</p>
            </div>
            <div className="glass-effect border border-zmx-gold/30 p-6 text-center">
              <Calendar className="w-10 h-10 text-zmx-gold mx-auto mb-3" />
              <h4 className="font-display uppercase text-zmx-gold mb-2">RÉSERVATION</h4>
              <p className="text-zmx-gray">En ligne 24/7</p>
            </div>
            <div className="glass-effect border border-zmx-gold/30 p-6 text-center">
              <MapPin className="w-10 h-10 text-zmx-gold mx-auto mb-3" />
              <h4 className="font-display uppercase text-zmx-gold mb-2">ACCÈS</h4>
              <p className="text-zmx-gray">GPS friendly</p>
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer className="bg-zmx-black border-t border-zmx-gold/20 py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-zmx-gold" />
                <span className="text-3xl font-display text-zmx-gold">ZMX</span>
              </div>
              <p className="text-zmx-gray">
                Le motocross nouvelle génération en Bourgogne
              </p>
            </div>
            <div>
              <h4 className="font-display uppercase text-zmx-gold mb-4">UNIVERS</h4>
              <nav aria-label="Services">
                <ul className="space-y-2 text-zmx-gray">
                  <li><a href="#park" className="hover:text-white transition">ZMX Park</a></li>
                  <li><a href="#future" className="hover:text-white transition">ZMX Future</a></li>
                  <li><a href="#rent" className="hover:text-white transition">ZMX Rent</a></li>
                  <li><a href="#event" className="hover:text-white transition">ZMX Event</a></li>
                </ul>
              </nav>
            </div>
            <div>
              <h4 className="font-display uppercase text-zmx-gold mb-4">INFORMATIONS</h4>
              <ul className="space-y-2 text-zmx-gray">
                <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
                <li><a href="#" className="hover:text-white transition">Règlement intérieur</a></li>
                <li><a href="#" className="hover:text-white transition">Politique de confidentialité</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display uppercase text-zmx-gold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-zmx-gray">
                <li>Jancigny, Côte-d'Or</li>
                <li>35 min de Dijon</li>
                <li>contact@zmx.fr</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zmx-gold/20 pt-8 text-center text-zmx-gray">
            <p>&copy; 2025 ZMX. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
