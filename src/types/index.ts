// src/types/index.ts
import { Locale, SiteConfig } from '@content/config';
import { Service } from '@content/services';
import { FAQItem } from '@content/faq';
import { HeroContent } from '@content/hero';

export type { Locale, SiteConfig, Service, FAQItem, HeroContent };

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

export interface PageProps {
  locale: Locale;
  seo: SEOData;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LinkProps extends ComponentProps {
  href: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  asChild?: boolean;
}