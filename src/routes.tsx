// src/routes.tsx
import { createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';
import { Services } from '@components/services/Services';
import { FAQ } from '@components/faq/FAQ';
import { generatePageSEO, type SEOData } from '@lib/schema';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@content/config';

// Root route with layout
const rootRoute = createRootRoute({
  component: () => (
    <html lang="id">
      <head>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <link rel="canonical" href={siteConfig.url} />
          <link rel="alternate" hrefLang="id" href={`${siteConfig.url}/`} />
          <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en/`} />
          <link rel="alternate" hrefLang="x-default" href={`${siteConfig.url}/`} />
          <meta name="theme-color" content="#0F1013" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/img/favicon-32.png" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
          <link rel="preload" href="/fonts/bricolage.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/geist.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/geist-mono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/doto.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Helmet>
      </head>
      <body>
        <Layout />
      </body>
    </html>
  ),
});

// Index route (Indonesian)
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: () => generatePageSEO('id'),
  component: ((props: { loaderData: SEOData }) => {
    const seo = props.loaderData;
    return (
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta property="og:type" content={seo.ogType} />
          <meta property="og:site_name" content={siteConfig.name} />
          <meta property="og:url" content={seo.canonical} />
          <meta property="og:title" content={seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:image" content={seo.ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:locale:alternate" content="en_US" />
          <meta name="twitter:card" content={seo.twitterCard} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': seo.jsonLd }) }} />
        </Helmet>
        <Hero />
        <Services />
        <FAQ />
      </>
    );
  }) as any,
});

// English route
const enRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/en/',
  loader: () => generatePageSEO('en'),
  component: ((props: { loaderData: SEOData }) => {
    const seo = props.loaderData;
    return (
      <>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta property="og:type" content={seo.ogType} />
          <meta property="og:site_name" content={siteConfig.name} />
          <meta property="og:url" content={seo.canonical} />
          <meta property="og:title" content={seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:image" content={seo.ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="id_ID" />
          <meta name="twitter:card" content={seo.twitterCard} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': seo.jsonLd }) }} />
        </Helmet>
        <Hero />
        <Services />
        <FAQ />
      </>
    );
  }) as any,
});

const routeTree = rootRoute.addChildren([indexRoute, enRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPendingMs: 1000,
  defaultPreloadStaleTime: 1000 * 60 * 5,
  scrollRestoration: true,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}