// src/hooks/useLocale.ts
import { useLocation } from '@tanstack/react-router';
import { siteConfig } from '@content/config';
import type { Locale } from '@content/config';

export function useLocale(): Locale {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0] as Locale;
  return siteConfig.locales.includes(locale) ? locale : siteConfig.defaultLocale;
}

export function useLocalePath(path: string, locale?: Locale): string {
  const currentLocale = useLocale();
  const targetLocale = locale || currentLocale;
  if (targetLocale === siteConfig.defaultLocale) {
    return path === '/' ? '/' : `/${path.replace(/^\//, '')}`;
  }
  return `/${targetLocale}${path === '/' ? '' : path}`;
}