// src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { siteConfig } from '@content/config';

const resources = {
  id: { translation: {} },
  en: { translation: {} },
};

i18n.use(initReactI18next).init({
  resources,
  lng: siteConfig.defaultLocale,
  fallbackLng: siteConfig.defaultLocale,
  supportedLngs: siteConfig.locales,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
export { siteConfig };