// scripts/verify-content.ts
import { siteConfig } from '../src/content/config';
import { services } from '../src/content/services';
import { faq } from '../src/content/faq';
import { heroContent } from '../src/content/hero';
import { navigation } from '../src/content/navigation';

console.log('🔍 Validating content...\n');

let errors = 0;
let warnings = 0;

function error(msg: string) {
  console.error(`❌ ${msg}`);
  errors++;
}

function warn(msg: string) {
  console.warn(`⚠️  ${msg}`);
  warnings++;
}

function success(msg: string) {
  console.log(`✅ ${msg}`);
}

type Locale = 'id' | 'en';

function checkLocaleContent(locale: Locale) {
  // Hero
  const hero = heroContent[locale];
  if (!hero) error(`Missing hero content for ${locale}`);
  else success(`Hero content exists for ${locale}`);
  
  // Services - cast through unknown to avoid readonly issues
  const svcList = services[locale] as unknown as Array<{ id: string; name: string; description: string; icon: string; features: string[] }>;
  if (!svcList) error(`Missing services for ${locale}`);
  else {
    success(`Services exist for ${locale} (${svcList.length} services)`);
    svcList.forEach((svc, i) => {
      if (!svc.id) error(`Service ${i} missing id in ${locale}`);
      if (!svc.name) error(`Service ${svc.id} missing name in ${locale}`);
      if (!svc.description) error(`Service ${svc.id} missing description in ${locale}`);
      if (!svc.icon) error(`Service ${svc.id} missing icon in ${locale}`);
      if (!svc.features?.length) warn(`Service ${svc.id} has no features in ${locale}`);
    });
  }
  
  // FAQ - cast through unknown
  const faqList = faq[locale] as unknown as Array<{ id: string; question: string; answer: string }>;
  if (!faqList) error(`Missing FAQ for ${locale}`);
  else {
    success(`FAQ exists for ${locale} (${faqList.length} items)`);
    faqList.forEach((item, i) => {
      if (!item.id) error(`FAQ ${i} missing id in ${locale}`);
      if (!item.question) error(`FAQ ${item.id} missing question in ${locale}`);
      if (!item.answer) error(`FAQ ${item.id} missing answer in ${locale}`);
    });
  }
  
  // Navigation
  navigation.main.forEach((item) => {
    if (!item.label[locale]) error(`Nav item ${item.href} missing label for ${locale}`);
  });
  if (!navigation.cta.label[locale]) error(`CTA missing label for ${locale}`);
}

siteConfig.locales.forEach((locale) => checkLocaleContent(locale));

// Check service IDs match across locales
const idServices = services.id.map(s => s.id).sort();
const enServices = services.en.map(s => s.id).sort();
if (JSON.stringify(idServices) !== JSON.stringify(enServices)) {
  error('Service IDs mismatch between id and en locales');
} else {
  success('Service IDs match across locales');
}

// Check FAQ IDs match across locales
const idFaq = faq.id.map(f => f.id).sort();
const enFaq = faq.en.map(f => f.id).sort();
if (JSON.stringify(idFaq) !== JSON.stringify(enFaq)) {
  error('FAQ IDs mismatch between id and en locales');
} else {
  success('FAQ IDs match across locales');
}

// Check site config
if (!siteConfig.url) error('Missing siteConfig.url');
if (!siteConfig.email) error('Missing siteConfig.email');
if (!siteConfig.name) error('Missing siteConfig.name');

console.log(`\n📊 Validation complete: ${errors} errors, ${warnings} warnings`);

if (errors > 0) {
  process.exit(1);
}