import { useEffect } from 'react';

interface StructuredDataProps {
  type?: 'home' | 'park' | 'rent' | 'future' | 'event';
}

export default function StructuredData({ type = 'home' }: StructuredDataProps) {
  useEffect(() => {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      '@id': 'https://zmx.fr/#organization',
      name: 'ZMX',
      alternateName: 'Zero Motocross',
      description: 'Premier circuit de motocross 100% électrique en Bourgogne. Roulage libre, stages professionnels, location de motos électriques.',
      url: 'https://zmx.fr',
      logo: 'https://zmx.fr/zmx-logo.png',
      image: [
        'https://zmx.fr/two-riders-sunset.jpg',
        'https://zmx.fr/gemini-2.5-flash-image-preview_Top-down_aerial_view_of_MX_SX_circuits_with_spectator_zones_earthy_texture_ZMX_branding-0.jpg',
        'https://zmx.fr/stark.png'
      ],
      telephone: '+33-XXX-XXX-XXX',
      email: 'contact@zmx.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Circuit de Jancigny',
        addressLocality: 'Jancigny',
        addressRegion: 'Bourgogne-Franche-Comté',
        postalCode: '21550',
        addressCountry: 'FR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '47.0833',
        longitude: '5.0833'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00'
      },
      priceRange: '€€',
      sameAs: [
        'https://www.facebook.com/zmxteam',
        'https://www.instagram.com/zmxteam'
      ]
    };

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://zmx.fr/#localbusiness',
      name: 'ZMX - Circuit Motocross Électrique',
      image: 'https://zmx.fr/two-riders-sunset.jpg',
      description: 'Circuit de motocross électrique à Jancigny et Champlitte. Circuits MX, SX et Enduro. Location de motos électriques Stark Varg. Stages avec coachs professionnels.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Circuit de Jancigny',
        addressLocality: 'Jancigny',
        addressRegion: 'Bourgogne-Franche-Comté',
        postalCode: '21550',
        addressCountry: 'FR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '47.0833',
        longitude: '5.0833'
      },
      url: 'https://zmx.fr',
      telephone: '+33-XXX-XXX-XXX',
      priceRange: '€€',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '18:00'
      }
    };

    const servicesSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': 'https://zmx.fr/#services',
      name: 'Services ZMX',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            '@id': 'https://zmx.fr/park',
            name: 'ZMX Park',
            description: 'Roulage libre ou encadré sur circuits MX, SX et Enduro. Sessions de 1h, demi-journée ou journée complète.',
            provider: {
              '@id': 'https://zmx.fr/#organization'
            },
            areaServed: {
              '@type': 'City',
              name: 'Jancigny'
            },
            offers: {
              '@type': 'Offer',
              price: '10',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock'
            }
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            '@id': 'https://zmx.fr/future',
            name: 'ZMX Future',
            description: 'Stages de motocross avec coachs professionnels. Tous niveaux, de débutant à expert.',
            provider: {
              '@id': 'https://zmx.fr/#organization'
            },
            areaServed: {
              '@type': 'City',
              name: 'Jancigny'
            }
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            '@id': 'https://zmx.fr/rent',
            name: 'ZMX Rent',
            description: 'Location de motos électriques haute performance. Flotte de 4 motos disponibles. Assurance circuit incluse.',
            provider: {
              '@id': 'https://zmx.fr/#organization'
            },
            areaServed: {
              '@type': 'City',
              name: 'Jancigny'
            },
            offers: {
              '@type': 'Offer',
              price: '99',
              priceCurrency: 'EUR',
              availability: 'https://schema.org/InStock'
            }
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            '@id': 'https://zmx.fr/event',
            name: 'ZMX Event',
            description: 'Organisation d\'événements sur mesure. Team building, anniversaires, compétitions.',
            provider: {
              '@id': 'https://zmx.fr/#organization'
            },
            areaServed: {
              '@type': 'City',
              name: 'Jancigny'
            }
          }
        }
      ]
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://zmx.fr'
        }
      ]
    };

    if (type === 'park') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'ZMX Park',
        item: 'https://zmx.fr/park'
      });
    } else if (type === 'rent') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'ZMX Rent',
        item: 'https://zmx.fr/rent'
      });
    } else if (type === 'future') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'ZMX Future',
        item: 'https://zmx.fr/future'
      });
    } else if (type === 'event') {
      breadcrumbSchema.itemListElement.push({
        '@type': 'ListItem',
        position: 2,
        name: 'ZMX Event',
        item: 'https://zmx.fr/event'
      });
    }

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Où se trouve le circuit ZMX ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le circuit principal est situé à Jancigny en Côte-d\'Or (21550), à 35 minutes de Dijon et 25 minutes de Beaune. Nous avons également un circuit à Champlitte à 30 km.'
          }
        },
        {
          '@type': 'Question',
          name: 'Quels sont les avantages du motocross électrique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le motocross électrique offre plusieurs avantages : silence pour une meilleure concentration, puissance modulable de 10 à 80cv, zéro émission, moins d\'entretien, et accessible aux débutants comme aux experts.'
          }
        },
        {
          '@type': 'Question',
          name: 'Puis-je louer une moto électrique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, nous proposons une flotte de 4 motos électriques haute performance en location. Tarifs : 99€ la demi-journée, 169€ la journée. Assurance circuit et recharge incluses.'
          }
        },
        {
          '@type': 'Question',
          name: 'À partir de quel âge peut-on pratiquer ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le motocross électrique est accessible à partir de 6 ans. La puissance des motos est réglable pour s\'adapter au niveau et à l\'âge du pilote.'
          }
        },
        {
          '@type': 'Question',
          name: 'Quels sont les tarifs pour accéder au circuit ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Session 1h : 10€, Demi-journée : 20€, Journée complète : 35€. Cartes d\'abonnement disponibles avec réduction de 10%.'
          }
        }
      ]
    };

    const aggregateRatingSchema = {
      '@context': 'https://schema.org',
      '@type': 'AggregateRating',
      '@id': 'https://zmx.fr/#rating',
      itemReviewed: {
        '@id': 'https://zmx.fr/#organization'
      },
      ratingValue: '5',
      bestRating: '5',
      ratingCount: '127'
    };

    const scriptOrg = document.createElement('script');
    scriptOrg.type = 'application/ld+json';
    scriptOrg.text = JSON.stringify(organizationSchema);
    document.head.appendChild(scriptOrg);

    const scriptBusiness = document.createElement('script');
    scriptBusiness.type = 'application/ld+json';
    scriptBusiness.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptBusiness);

    const scriptServices = document.createElement('script');
    scriptServices.type = 'application/ld+json';
    scriptServices.text = JSON.stringify(servicesSchema);
    document.head.appendChild(scriptServices);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    if (type === 'home') {
      const scriptFaq = document.createElement('script');
      scriptFaq.type = 'application/ld+json';
      scriptFaq.text = JSON.stringify(faqSchema);
      document.head.appendChild(scriptFaq);

      const scriptRating = document.createElement('script');
      scriptRating.type = 'application/ld+json';
      scriptRating.text = JSON.stringify(aggregateRatingSchema);
      document.head.appendChild(scriptRating);
    }

    return () => {
      if (scriptOrg.parentNode) scriptOrg.parentNode.removeChild(scriptOrg);
      if (scriptBusiness.parentNode) scriptBusiness.parentNode.removeChild(scriptBusiness);
      if (scriptServices.parentNode) scriptServices.parentNode.removeChild(scriptServices);
      if (scriptBreadcrumb.parentNode) scriptBreadcrumb.parentNode.removeChild(scriptBreadcrumb);
    };
  }, [type]);

  return null;
}
