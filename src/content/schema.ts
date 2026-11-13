// src/content/schema.ts
import { siteConfig } from './config';
import { services } from './services';
import { faq } from './faq';

export function generateOrganizationSchema(locale: 'id' | 'en' = 'id') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#org`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo-512.png`,
    email: siteConfig.email,
    foundingDate: siteConfig.founded.toString(),
    description: siteConfig.description[locale],
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.address.country,
    sameAs: [siteConfig.social.linkedin].filter(Boolean),
  };
}

export function generateProfessionalServiceSchema(locale: 'id' | 'en' = 'id') {
  const svc = services[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}/#service`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    description: siteConfig.description[locale],
    parentOrganization: { '@id': `${siteConfig.url}/#org` },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.address.country,
    inLanguage: locale,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'id' ? 'Apa yang bisa kami bantu?' : 'What can we help with?',
      itemListElement: svc.map((s, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          description: s.description,
        },
      })),
    },
  };
}

export function generateFAQSchema(locale: 'id' | 'en' = 'id') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${siteConfig.url}/#faq`,
    inLanguage: locale,
    mainEntity: faq[locale].map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function generateAllSchemas(locale: 'id' | 'en' = 'id') {
  return [
    generateOrganizationSchema(locale),
    generateProfessionalServiceSchema(locale),
    generateFAQSchema(locale),
  ];
}

export function renderJSONLD(schemas: object[]) {
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas })}</script>`;
}