// src/lib/schema.ts
import { renderJSONLD, generateAllSchemas } from '@content/schema';
import { siteConfig } from '@content/config';

export interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: 'website' | 'article';
  twitterCard: 'summary_large_image' | 'summary';
  jsonLd: object[];
}

export function generatePageSEO(locale: 'id' | 'en', overrides: Partial<{
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}> = {}): SEOData {
  const baseUrl = siteConfig.url;
  const canonical = overrides.canonical || `${baseUrl}/${locale === 'id' ? '' : locale}/`;
  const title = overrides.title || siteConfig.name + (locale === 'id' ? ' — Mitra IT Jarak Jauh & Perlindungan Digital' : ' — Remote IT Partner & Digital Protection');
  const description = overrides.description || siteConfig.description[locale];
  const ogTitle = overrides.ogTitle || title;
  const ogDescription = overrides.ogDescription || description;
  const ogImage = overrides.ogImage || `${baseUrl}/img/og-v6.png`;

  return {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: generateAllSchemas(locale),
  };
}

export function renderJSONLDScript(schemas: object[]) {
  return renderJSONLD(schemas);
}

export function hreflangTags() {
  const base = siteConfig.url;
  return [
    { rel: 'alternate', hrefLang: 'id', href: `${base}/` },
    { rel: 'alternate', hrefLang: 'en', href: `${base}/en/` },
    { rel: 'alternate', hrefLang: 'x-default', href: `${base}/` },
  ];
}