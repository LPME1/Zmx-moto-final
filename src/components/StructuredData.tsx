import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'home' | 'park' | 'rent' | 'future' | 'event';
}

export default function StructuredData({ type = 'home' }: StructuredDataProps) {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      '@id': 'https://zmxmoto.fr/#organization',
      name: 'ZMX Rent',
      alternateName: 'ZMX Moto',
      description: 'Location de motos électriques Stark VARG et Torrot Kids. Circuit de motocross 100% électrique en Bourgogne. Assurance comprise, chargeur fourni, accès piste inclus.',
      url: 'https://zmxmoto.fr',
      logo: 'https://zmxmoto.fr/zmx-logo.png',
      image: [
        'https://zmxmoto.fr/two-riders-sunset.jpg',
        'https://zmxmoto.fr/stark.png',
      ],
      telephone: '+33-XXX-XXX-XXX',
      email: 'contact@zmxmoto.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Circuit de Jancigny',
        addressLocality: 'Jancigny',
        addressRegion: 'Bourgogne-Franche-Comté',
        postalCode: '21550',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '47.0833',
        longitude: '5.0833',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00',
      },
      priceRange: '€€',
      sameAs: [
        'https://www.facebook.com/zmxteam',
        'https://www.instagram.com/zmxteam',
      ],
    };

    const rentalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'RentalService',
      '@id': 'https://zmxmoto.fr/#rental',
      name: 'ZMX Rent — Location de Motos Électriques',
      description: 'Location de motos électriques Stark VARG EX 1.2, Stark VARG MX et Torrot Kids. Assurance comprise sur la EX, chargeur fourni, accès piste inclus sur la MX.',
      provider: { '@id': 'https://zmxmoto.fr/#organization' },
      areaServed: {
        '@type': 'City',
        name: 'Jancigny, Bourgogne-Franche-Comté',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Stark VARG EX 1.2 2026 — Demi-journée',
          price: '150',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Stark VARG EX 1.2 2026 — Journée',
          price: '190',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Stark VARG MX — Heure',
          price: '20',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Stark VARG MX — Journée',
          price: '90',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
        },
      ],
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment réserver une moto électrique chez ZMX Rent ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Choisissez votre moto (Stark VARG EX, MX ou Torrot Kids), sélectionnez votre créneau en ligne, remplissez le formulaire de réservation et confirmez. Vous recevez une confirmation sous 24h.',
          },
        },
        {
          '@type': 'Question',
          name: "L'assurance est-elle comprise dans la location ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, l'assurance circuit est comprise dans la location de la Stark VARG EX 1.2. Pour la Stark VARG MX, l'accès piste est inclus.",
          },
        },
        {
          '@type': 'Question',
          name: 'Le chargeur est-il fourni avec la moto ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, le chargeur est fourni avec la Stark VARG EX 1.2. Des bornes de recharge sont également disponibles sur le circuit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Faut-il un permis pour louer une moto électrique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pour la Stark VARG EX, un permis moto est requis. Pour la Stark VARG MX et les Torrot Kids, aucun permis n'est nécessaire. L'équipement de protection (casque, gants, protections) est obligatoire.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quel équipement faut-il pour rouler ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Un casque homologué, des gants, des bottes et des protections (dorsale, genouillères) sont obligatoires. Vous pouvez venir avec votre équipement ou en louer sur place.",
          },
        },
        {
          '@type': 'Question',
          name: 'Les enfants peuvent-ils rouler sur le circuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, les enfants peuvent rouler avec les motos Torrot Kids adaptées à leur âge et niveau. La puissance est réglable pour garantir leur sécurité.",
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est l\'autonomie des motos électriques ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La Stark VARG EX offre jusqu'à 6 heures d'autonomie en utilisation enduro. La Stark VARG MX offre environ 1 à 2 heures selon l'intensité. Les Torrot Kids ont une autonomie adaptée aux sessions enfant.",
          },
        },
        {
          '@type': 'Question',
          name: 'Comment recharger la moto sur le circuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Des bornes de recharge sont disponibles sur le circuit. Le chargeur est fourni avec la Stark VARG EX 1.2. La recharge complète prend environ 1 à 2 heures.",
          },
        },
        {
          '@type': 'Question',
          name: 'Puis-je venir avec mon propre équipement ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, vous pouvez tout à fait venir avec votre propre équipement. Il doit être homologué et en bon état. Nous vérifions sa conformité avant l'accès au circuit.",
          },
        },
      ],
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://zmxmoto.fr' },
      ],
    };

    if (type === 'park') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem', position: 2, name: 'ZMX Park', item: 'https://zmxmoto.fr/park',
      });
    } else if (type === 'rent') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem', position: 2, name: 'ZMX Rent', item: 'https://zmxmoto.fr/rent',
      });
    } else if (type === 'future') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem', position: 2, name: 'ZMX Future', item: 'https://zmxmoto.fr/future',
      });
    } else if (type === 'event') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem', position: 2, name: 'ZMX Event', item: 'https://zmxmoto.fr/event',
      });
    }

    const scripts: HTMLScriptElement[] = [];

    const addScript = (data: unknown) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
      scripts.push(s);
    };

    addScript(organizationSchema);
    addScript(rentalServiceSchema);
    addScript(breadcrumbSchema);
    if (type === 'home') {
      addScript(faqSchema);
    }

    return () => {
      scripts.forEach((s) => {
        if (s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [type]);

  return null;
}
