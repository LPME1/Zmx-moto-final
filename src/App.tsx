import { useState, useEffect } from 'react';
import {
  Zap, ChevronRight, Star, MapPin, Clock, Menu, X,
  Battery, Shield, Wrench, Leaf, VolumeX,
  UserCheck, ClipboardList, CalendarCheck, Bike,
  ChevronDown, ArrowRight, Award, Users, Heart
} from 'lucide-react';
import StructuredData from './components/StructuredData';
import BookingCalendar from './components/BookingCalendar';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Location', href: '#motos' },
    { label: 'ZMX Rent', href: '#why-rent' },
    { label: 'Réserver', href: '#cta' },
    { label: 'Tarifs', href: '#motos' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-effect border-b border-zmx-gold/20 py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <Zap className="w-8 h-8 text-zmx-gold animate-lightning" />
          <span className="text-2xl font-display text-zmx-gold tracking-wider">ZMX RENT</span>
        </a>

        <div className="hidden md:flex gap-8 font-medium items-center">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-white/80 hover:text-zmx-gold transition relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zmx-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a href="#cta" className="bg-zmx-gold text-zmx-black px-6 py-2.5 font-bold uppercase text-sm hover:bg-white transition rounded-xl">
            Réserver
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-effect border-t border-zmx-gold/20 mt-2 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="block text-white/80 hover:text-zmx-gold transition py-2">
                {link.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setMobileOpen(false)} className="block bg-zmx-gold text-zmx-black px-6 py-3 font-bold uppercase text-center rounded-xl">
              Réserver
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ onReserve }: { onReserve: () => void }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0003})` }}>
        <img
          src="/two-riders-sunset.jpg"
          alt="Location de motos électriques Stark VARG chez ZMX Rent en Bourgogne"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zmx-black/80 via-zmx-black/50 to-zmx-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-zmx-black/60 via-transparent to-zmx-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="mb-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="relative">
            <Zap className="w-20 h-20 text-zmx-gold animate-lightning" />
            <div className="absolute -inset-4 bg-zmx-gold/20 blur-2xl rounded-full" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase mb-6 leading-[1.05] animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="block text-white">Louez les meilleures</span>
          <span className="block text-gradient-gold">motos électriques</span>
        </h1>

        <p className="text-lg md:text-2xl text-zmx-gray mb-12 font-light max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Découvrez les <strong className="text-white font-semibold">Stark VARG</strong> et les <strong className="text-white font-semibold">Torrot Kids</strong> disponibles chez ZMX Rent. Assurance comprise, chargeur fourni, accès piste inclus.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <button onClick={onReserve} className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold uppercase text-lg hover:bg-white transition flex items-center gap-2 group rounded-xl shadow-2xl shadow-zmx-gold/20">
            Réserver
            <ChevronRight className="group-hover:translate-x-1 transition" />
          </button>
          <a href="#motos" className="border-2 border-zmx-gold text-zmx-gold px-8 py-4 font-bold uppercase text-lg hover:bg-zmx-gold hover:text-zmx-black transition flex items-center gap-2 rounded-xl">
            Découvrir les motos
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="w-8 h-8 text-zmx-gold" />
      </div>
    </header>
  );
}

interface MotoCardProps {
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  prices: { label: string; price: string }[];
  includes: string[];
  badge?: string;
  badgeColor?: string;
  onReserve: () => void;
  externalLink?: string;
}

function MotoCard({ name, category, image, description, specs, prices, includes, badge, badgeColor, onReserve, externalLink }: MotoCardProps) {
  return (
    <div className="group relative scroll-reveal">
      <div className="glass-card border border-zmx-gold/20 rounded-3xl overflow-hidden hover:border-zmx-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-zmx-gold/10 hover:-translate-y-2">
        {badge && (
          <div className={`absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${badgeColor || 'bg-zmx-gold text-zmx-black'}`}>
            {badge}
          </div>
        )}

        <div className="relative h-64 overflow-hidden bg-zmx-black">
          <img src={image} alt={`Location ${name} - ${category} électrique ZMX Rent`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-zmx-black via-zmx-black/30 to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="text-sm font-bold uppercase tracking-wider text-zmx-gold bg-zmx-black/60 px-3 py-1 rounded-full">{category}</span>
          </div>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <h3 className="text-2xl font-display uppercase text-white mb-2">{name}</h3>
            <p className="text-zmx-gray text-sm leading-relaxed">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <span key={spec} className="text-xs bg-white/5 border border-zmx-gold/20 px-3 py-1.5 rounded-full text-zmx-gray">{spec}</span>
            ))}
          </div>

          {!externalLink && prices.length > 0 && (
            <div className="space-y-2">
              {prices.map((p) => (
                <div key={p.label} className="flex justify-between items-center bg-white/5 px-4 py-2.5 rounded-xl">
                  <span className="text-zmx-gray text-sm">{p.label}</span>
                  <span className="text-lg font-bold text-zmx-gold">{p.price}</span>
                </div>
              ))}
            </div>
          )}

          {externalLink && (
            <div className="bg-white/5 px-4 py-3 rounded-xl text-center">
              <p className="text-zmx-gray text-sm mb-3">Tarifs officiels Torrot Rent</p>
            </div>
          )}

          <div>
            <p className="text-xs font-bold uppercase text-zmx-gold/70 mb-2">Le tarif comprend</p>
            <ul className="space-y-1.5">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zmx-gray">
                  <span className="text-zmx-green">✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          {externalLink ? (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center border-2 border-zmx-gold text-zmx-gold px-6 py-3.5 font-bold uppercase hover:bg-zmx-gold hover:text-zmx-black transition rounded-xl">
              Voir les tarifs officiels
            </a>
          ) : (
            <button onClick={onReserve} className="block w-full bg-zmx-gold text-zmx-black px-6 py-3.5 font-bold uppercase hover:bg-white transition rounded-xl">
              Réserver
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MotosSection({ onReserve }: { onReserve: () => void }) {
  const motos: Omit<MotoCardProps, 'onReserve'>[] = [
    {
      name: 'Stark VARG EX 1.2',
      category: 'Enduro',
      image: 'https://assets.starkfuture.com/frontend-assets/varg/ex/white.webp',
      description: "La Stark VARG EX 1.2 2026, l'enduro électrique ultime. Puissance, autonomie et silence pour repousser vos limites.",
      specs: ['2026', '80 CV', 'Enduro', '6h autonomie'],
      prices: [
        { label: 'Demi-journée', price: '150 €' },
        { label: 'Journée', price: '190 €' },
        { label: 'Week-end', price: '250 €' },
      ],
      includes: ['Assurance', 'Chargeur'],
      badge: 'Best Seller',
      badgeColor: 'bg-zmx-gold text-zmx-black',
    },
    {
      name: 'Stark VARG MX',
      category: 'Motocross',
      image: 'https://assets.starkfuture.com/frontend-assets/varg/mx1.2/red.webp',
      description: "La Stark VARG MX pour le motocross pur. Couple instantané, zéro bruit, sensations maximales sur circuit.",
      specs: ['80 CV', 'Motocross', 'Réglable 10-80cv', '1-2h autonomie'],
      prices: [
        { label: 'Heure', price: '20 €' },
        { label: 'Demi-journée', price: '50 €' },
        { label: 'Journée', price: '90 €' },
      ],
      includes: ['Accès piste'],
      badge: 'Découverte',
      badgeColor: 'bg-zmx-green text-zmx-black',
    },
    {
      name: 'Torrot Kids',
      category: 'Moto enfant',
      image: 'https://torrot.com/uploads/_CGSmartImage/img-383efa567074ed7601c751786ae90c67-MY26-MX2.jpg',
      description: "Les motos Torrot Kids pour les jeunes pilotes. Sécurité, plaisir et initiation à l'électrique en toute confiance.",
      specs: ['Enfant', 'Électrique', 'Sécurisé', 'Puissance adaptée'],
      prices: [],
      includes: ['Accompagnement personnalisé', 'Initiation possible'],
      externalLink: 'https://www.torrotmoto.com/fr/rent',
    },
  ];

  return (
    <section id="motos" className="py-24 md:py-32 bg-gradient-to-b from-zmx-black via-gray-900/50 to-zmx-black" aria-labelledby="motos-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">Notre flotte</p>
          <h2 id="motos-heading" className="text-4xl md:text-6xl font-display uppercase mb-4">NOS <span className="text-gradient-gold">MOTOS</span></h2>
          <p className="text-xl text-zmx-gray max-w-2xl mx-auto">Des motos électriques haute performance pour chaque pilote</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motos.map((moto) => (
            <MotoCard key={moto.name} {...moto} onReserve={onReserve} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyRentSection() {
  const reasons = [
    { icon: Bike, title: 'Motos neuves', desc: 'Flotte récente entretenue par des professionnels' },
    { icon: Wrench, title: 'Entretien professionnel', desc: 'Motos vérifiées avant chaque session' },
    { icon: Battery, title: '100% électrique', desc: 'Zéro émission, zéro compromis' },
    { icon: VolumeX, title: 'Silencieuses', desc: 'Profitez du pilotage sans nuisance sonore' },
    { icon: Leaf, title: "Respect de l'environnement", desc: 'Roulez en harmonie avec la nature' },
    { icon: UserCheck, title: 'Initiation possible', desc: 'Accompagnement pour les débutants' },
    { icon: Shield, title: 'Assurance comprise sur la EX', desc: "Roulez l'esprit tranquille" },
    { icon: Battery, title: 'Chargeur fourni', desc: 'Rechargez sur le circuit' },
    { icon: MapPin, title: 'Accès piste inclus sur la MX', desc: 'Circuit MX/SX à disposition' },
    { icon: Award, title: 'Matériel entretenu', desc: 'Équipements en parfait état' },
    { icon: Users, title: 'Accompagnement personnalisé', desc: 'Conseils de nos coachs experts' },
    { icon: ClipboardList, title: 'Réservation rapide', desc: 'Réservez en ligne en 2 minutes' },
  ];

  return (
    <section id="why-rent" className="py-24 md:py-32 bg-gradient-to-b from-zmx-black to-gray-900/30" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">ZMX Rent</p>
          <h2 id="why-heading" className="text-4xl md:text-6xl font-display uppercase mb-4">POURQUOI LOUER <span className="text-gradient-gold">CHEZ NOUS</span></h2>
          <p className="text-xl text-zmx-gray max-w-2xl mx-auto">12 raisons de choisir ZMX Rent pour votre prochaine session</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="scroll-reveal glass-card border border-zmx-gold/15 rounded-2xl p-6 hover:border-zmx-gold/40 transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${i * 30}ms` }}>
              <div className="w-12 h-12 bg-zmx-gold/10 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-6 h-6 text-zmx-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{reason.title}</h3>
              <p className="text-zmx-gray text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection({ onReserve }: { onReserve: () => void }) {
  const steps = [
    { icon: Bike, title: 'Choisissez votre moto', desc: 'Stark VARG EX, MX ou Torrot Kids' },
    { icon: CalendarCheck, title: 'Choisissez votre créneau', desc: 'Date et horaire en ligne' },
    { icon: ClipboardList, title: 'Réservez', desc: 'Confirmation sous 24h' },
    { icon: Zap, title: 'Venez rouler', desc: 'Moto prête, circuit ouvert' },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900/30 to-zmx-black" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">Simple et rapide</p>
          <h2 id="how-heading" className="text-4xl md:text-6xl font-display uppercase mb-4">COMMENT ÇA <span className="text-gradient-gold">FONCTIONNE</span></h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="scroll-reveal relative">
              <div className="glass-card border border-zmx-gold/20 rounded-2xl p-8 text-center hover:border-zmx-gold/50 transition-all duration-300">
                <div className="w-16 h-16 bg-zmx-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-zmx-gold" />
                </div>
                <div className="text-5xl font-display text-zmx-gold/30 mb-3 absolute top-4 right-6">{i + 1}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-zmx-gray text-sm">{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-zmx-gold/20" />}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <button onClick={onReserve} className="bg-zmx-gold text-zmx-black px-8 py-4 font-bold uppercase text-lg hover:bg-white transition rounded-xl">Réserver maintenant</button>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  const images = [
    { src: '/electric-motocross-rider-jumping.jpg', alt: 'Pilote sur moto électrique Stark VARG en saut' },
    { src: '/two-riders-sunset.jpg', alt: 'Deux pilotes au coucher de soleil sur circuit ZMX' },
    { src: 'https://torrot.com/uploads/_CGSmartImage/img-383efa567074ed7601c751786ae90c67-MY26-MX2.jpg', alt: 'Torrot Kids MY26 moto électrique sur circuit ZMX' },
    { src: '/zmx_park.png', alt: 'Vue du circuit ZMX Park' },
    { src: '/zmx_future.png', alt: 'Coaching ZMX Future en action' },
    { src: '/zmx_team.png', alt: "L'équipe ZMX" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-zmx-black to-gray-900/30" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">En images</p>
          <h2 id="gallery-heading" className="text-4xl md:text-6xl font-display uppercase mb-4"><span className="text-gradient-gold">GALERIE</span></h2>
          <p className="text-xl text-zmx-gray max-w-2xl mx-auto">La passion de l'électrique en Bourgogne</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className={`scroll-reveal group cursor-pointer relative overflow-hidden rounded-2xl ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} onClick={() => setLightbox(img.src)} style={{ transitionDelay: `${i * 50}ms` }}>
              <img src={img.src} alt={img.alt} className={`w-full ${i === 0 ? 'h-full min-h-[400px]' : 'h-64'} object-cover group-hover:scale-110 transition-transform duration-700`} loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-zmx-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-zmx-black/95 backdrop-blur-sm p-6 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-zmx-gold transition" aria-label="Fermer"><X className="w-10 h-10" /></button>
          <img src={lightbox} alt="Image agrandie" className="max-w-full max-h-full object-contain rounded-2xl" />
        </div>
      )}
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'Comment réserver ?', a: "Choisissez votre moto (Stark VARG EX, MX ou Torrot Kids), sélectionnez votre créneau en ligne, remplissez le formulaire de réservation et confirmez. Vous recevez une confirmation sous 24h." },
    { q: "L'assurance est-elle comprise ?", a: "Oui, l'assurance circuit est comprise dans la location de la Stark VARG EX 1.2. Pour la Stark VARG MX, l'accès piste est inclus." },
    { q: 'Le chargeur est-il fourni ?', a: "Oui, le chargeur est fourni avec la Stark VARG EX 1.2. Des bornes de recharge sont également disponibles sur le circuit." },
    { q: 'Faut-il un permis ?', a: "Pour la Stark VARG EX, un permis moto est requis. Pour la Stark VARG MX et les Torrot Kids, aucun permis n'est nécessaire. L'équipement de protection est obligatoire." },
    { q: 'Quel équipement faut-il ?', a: "Un casque homologué, des gants, des bottes et des protections (dorsale, genouillères) sont obligatoires. Vous pouvez venir avec votre équipement ou en louer sur place." },
    { q: 'Les enfants peuvent-ils rouler ?', a: "Oui, les enfants peuvent rouler avec les motos Torrot Kids adaptées à leur âge et niveau. La puissance est réglable pour garantir leur sécurité." },
    { q: "Quelle est l'autonomie ?", a: "La Stark VARG EX offre jusqu'à 6 heures d'autonomie en utilisation enduro. La Stark VARG MX offre environ 1 à 2 heures selon l'intensité." },
    { q: 'Comment recharger ?', a: "Des bornes de recharge sont disponibles sur le circuit. Le chargeur est fourni avec la Stark VARG EX 1.2. La recharge complète prend 1 à 2 heures." },
    { q: 'Puis-je venir avec mon équipement ?', a: "Oui, vous pouvez venir avec votre propre équipement. Il doit être homologué et en bon état. Nous vérifions sa conformité avant l'accès au circuit." },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900/30 to-zmx-black" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">Questions fréquentes</p>
          <h2 id="faq-heading" className="text-4xl md:text-6xl font-display uppercase mb-4"><span className="text-gradient-gold">FAQ</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="scroll-reveal glass-card border border-zmx-gold/15 rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition" aria-expanded={openIndex === i}>
                <span className="text-lg font-bold text-white pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-zmx-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-5 text-zmx-gray leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [active, setActive] = useState(0);

  const reviews = [
    { text: "Location au top ! La Stark VARG EX est incroyable. Silencieuse, puissante, et l'assurance est comprise. Je reviens la semaine prochaine !", author: "Marc D.", role: "Pilote enduro", rating: 5 },
    { text: "Première fois sur une électrique. La MX est parfaite pour découvrir, et l'accès piste est inclus. Que demander de plus ?", author: "Sophie L.", role: "Débutante", rating: 5 },
    { text: "Mes enfants adorent les Torrot Kids. Sécurisé, encadré, et ils progressent vite. ZMX Rent a tout compris.", author: "Thomas R.", role: "Papa pilote", rating: 5 },
    { text: "Réservation en 2 minutes, moto prête à l'arrivée. Service impeccable, matériel premium. ZMX Rent est une référence.", author: "Julien M.", role: "Pilote amateur", rating: 5 },
    { text: "Le chargeur est fourni, les bornes sur le circuit, l'autonomie de 6h sur la EX. Tout est pensé pour le pilote.", author: "Alexandre P.", role: "Compétiteur", rating: 5 },
  ];

  useEffect(() => {
    const timer = setInterval(() => { setActive((prev) => (prev + 1) % reviews.length); }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-zmx-black to-gray-900/30" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <p className="text-zmx-gold font-bold uppercase tracking-widest text-sm mb-4">Ils nous font confiance</p>
          <h2 id="reviews-heading" className="text-4xl md:text-6xl font-display uppercase mb-4">AVIS <span className="text-gradient-gold">CLIENTS</span></h2>
        </div>

        <div className="scroll-reveal relative">
          <div className="glass-card border border-zmx-gold/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(reviews[active].rating)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-zmx-gold text-zmx-gold" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-white mb-8 italic leading-relaxed">"{reviews[active].text}"</blockquote>
            <div>
              <p className="text-zmx-gold font-display text-lg">{reviews[active].author}</p>
              <p className="text-zmx-gray text-sm">{reviews[active].role}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === active ? 'bg-zmx-gold w-8' : 'bg-zmx-gray/30'}`} aria-label={`Avis ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onReserve }: { onReserve: () => void }) {
  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/electric-motocross-rider-jumping.jpg" alt="Circuit de motocross électrique ZMX Rent" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-zmx-black via-zmx-black/80 to-zmx-black/60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center scroll-reveal">
        <h2 className="text-4xl md:text-7xl font-display uppercase mb-6">
          <span className="block text-white">Prêt à rouler ?</span>
          <span className="block text-gradient-gold">Réservez votre moto</span>
          <span className="block text-white">dès aujourd'hui</span>
        </h2>
        <p className="text-xl text-zmx-gray mb-10 max-w-2xl mx-auto">Stark VARG EX, MX et Torrot Kids disponibles. Assurance comprise, chargeur fourni, accès piste inclus.</p>
        <button onClick={onReserve} className="bg-zmx-gold text-zmx-black px-12 py-5 font-bold uppercase text-xl hover:bg-white transition rounded-xl shadow-2xl shadow-zmx-gold/30 inline-flex items-center gap-2 group">
          Réserver
          <ChevronRight className="group-hover:translate-x-1 transition" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const rentalLinks = ['Location moto électrique', 'Location Stark VARG', 'Location motocross', 'Location enduro', 'Location enfant', 'ZMX Rent'];
  const serviceLinks = [
    { label: 'ZMX Park', href: '/park' },
    { label: 'ZMX Future', href: '/future' },
    { label: 'ZMX Rent', href: '#motos' },
    { label: 'ZMX Event', href: '/event' },
  ];

  return (
    <footer className="bg-zmx-black border-t border-zmx-gold/20 pt-16 pb-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-8 h-8 text-zmx-gold" />
              <span className="text-2xl font-display text-zmx-gold">ZMX RENT</span>
            </div>
            <p className="text-zmx-gray text-sm leading-relaxed">Le spécialiste de la location de motos électriques en Bourgogne. Stark VARG, Torrot Kids, accès piste et coaching.</p>
          </div>

          <div>
            <h4 className="font-display uppercase text-zmx-gold mb-4 text-sm">LOCATION</h4>
            <nav aria-label="Location">
              <ul className="space-y-2 text-zmx-gray text-sm">
                {rentalLinks.map((link) => (
                  <li key={link}><a href="#motos" className="hover:text-zmx-gold transition">{link}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-display uppercase text-zmx-gold mb-4 text-sm">NOS SERVICES</h4>
            <nav aria-label="Services">
              <ul className="space-y-2 text-zmx-gray text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.label}><a href={link.href} className="hover:text-zmx-gold transition">{link.label}</a></li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="font-display uppercase text-zmx-gold mb-4 text-sm">CONTACT</h4>
            <ul className="space-y-2 text-zmx-gray text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-zmx-gold" /> Jancigny, Côte-d'Or</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-zmx-gold" /> Mar-Dim selon saison</li>
              <li className="flex items-center gap-2"><Heart className="w-4 h-4 text-zmx-gold" /> contact@zmxmoto.fr</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zmx-gold/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zmx-gray text-sm">&copy; 2025 ZMX Rent. Tous droits réservés.</p>
          <div className="flex gap-6 text-sm text-zmx-gray">
            <a href="#" className="hover:text-zmx-gold transition">Mentions légales</a>
            <a href="#" className="hover:text-zmx-gold transition">Confidentialité</a>
            <a href="#" className="hover:text-zmx-gold transition">Règlement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [showBooking, setShowBooking] = useState(false);
  useScrollReveal();

  return (
    <div className="min-h-screen bg-zmx-black text-white">
      <StructuredData type="home" />
      <Navbar />
      <Hero onReserve={() => setShowBooking(true)} />
      <main>
        <MotosSection onReserve={() => setShowBooking(true)} />
        <WhyRentSection />
        <HowItWorksSection onReserve={() => setShowBooking(true)} />
        <GallerySection />
        <FAQSection />
        <ReviewsSection />
        <CTASection onReserve={() => setShowBooking(true)} />
      </main>
      <Footer />

      {showBooking && <BookingCalendar service="rent" onClose={() => setShowBooking(false)} />}
    </div>
  );
}
