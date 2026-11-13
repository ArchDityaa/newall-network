// scripts/generate-schema.ts
import { generateAllSchemas, renderJSONLD } from '../src/content/schema';
import { siteConfig } from '../src/content/config';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

console.log('🔧 Generating JSON-LD schemas...\n');

siteConfig.locales.forEach((locale) => {
  const schemas = generateAllSchemas(locale);
  const jsonld = renderJSONLD(schemas);
  
  const outputDir = resolve('dist', locale === 'id' ? '' : locale);
  mkdirSync(outputDir, { recursive: true });
  
  writeFileSync(resolve(outputDir, 'schema.json'), JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas }, null, 2));
  writeFileSync(resolve(outputDir, 'schema.html'), jsonld);
  
  console.log(`✅ Generated schema for ${locale} (${schemas.length} items)`);
});

console.log('\n📊 Schema generation complete');