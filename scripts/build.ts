// scripts/build.ts
import { build } from 'bun';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, readdirSync, statSync, writeFileSync, rmSync } from 'fs';

const outdir = resolve(__dirname, '../dist');

// Clean and create dist directory
try { rmSync(outdir, { recursive: true, force: true }); } catch {}
mkdirSync(outdir, { recursive: true });

// Copy static assets
function copyAssets(src: string, dest: string) {
  mkdirSync(dest, { recursive: true });
  for (const file of readdirSync(src)) {
    const srcPath = resolve(src, file);
    const destPath = resolve(dest, file);
    const stat = statSync(srcPath);
    if (stat.isDirectory()) {
      copyAssets(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

copyAssets(resolve(__dirname, '../public'), resolve(outdir, 'public'));

// Build with Bun
await build({
  entrypoints: [resolve(__dirname, '../src/main.tsx')],
  outdir: resolve(outdir, 'assets'),
  target: 'browser',
  minify: true,
  splitting: true,
  define: {
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
    'import.meta.env.VITE_SITE_URL': '"https://newall.network"',
  },
  conditions: ['browser', 'module'],
  format: 'esm',
  naming: '[name]-[hash].[ext]',
  loader: {
    '.woff2': 'file',
    '.png': 'file',
    '.svg': 'file',
    '.ico': 'file',
    '.css': 'text',
  },
});

// Generate HTML file
const mainJs = readdirSync(resolve(outdir, 'assets')).find(f => f.startsWith('main-') && f.endsWith('.js'));
if (mainJs) {
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Newall Network — Mitra IT Jarak Jauh & Perlindungan Digital</title>
  <meta name="description" content="Newall Network membantu bisnis di bagian IT secara jarak jauh (IT support, website, SEO, otomasi, bot, AI agent) dan mendampingi perorangan saat data bocor, diteror penagih, atau kena tipu. Berbasis di Jakarta.">
  <link rel="canonical" href="https://newall.network/">
  <link rel="alternate" hreflang="id" href="https://newall.network/">
  <link rel="alternate" hreflang="en" href="https://newall.network/en/">
  <link rel="alternate" hreflang="x-default" href="https://newall.network/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Newall Network">
  <meta property="og:url" content="https://newall.network/">
  <meta property="og:title" content="Newall Network — Mitra IT Jarak Jauh & Perlindungan Digital">
  <meta property="og:description" content="IT support, website, SEO, otomasi, bot, dan AI agent — dikerjakan jarak jauh oleh satu tim.">
  <meta property="og:image" content="https://newall.network/img/og-v6.png">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="id_ID">
  <meta property="og:locale:alternate" content="en_US">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#0F1013">
  <link rel="icon" href="/public/favicon.ico" sizes="any">
  <link rel="icon" href="/public/img/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="apple-touch-icon" href="/public/img/apple-touch-icon.png">
  <link rel="preload" href="/public/fonts/bricolage.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/public/fonts/geist.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/public/fonts/geist-mono.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/public/fonts/doto.woff2" as="font" type="font/woff2" crossorigin>
  
  <script>
    (function () {
      try {
        var d = document.documentElement;
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        d.classList.add('boot', 'boot-full', 'boot-cover');
        setTimeout(function () { if (!d.dataset.build) d.classList.remove('boot-cover'); }, 1600);
        setTimeout(function () { if (!d.dataset.build) d.classList.remove('boot', 'boot-full', 'boot-short', 'boot-cover'); }, 5600);
      } catch (e) {}
    })();
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/${mainJs}"></script>
</body>
</html>`;
  
  writeFileSync(resolve(outdir, 'index.html'), html);
  console.log(`✅ Generated index.html with ${mainJs}`);
}

console.log('✅ Build complete');
function listFiles(dir: string, prefix = '') {
  for (const file of readdirSync(dir)) {
    const fullPath = resolve(dir, file);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      console.log(`${prefix}📁 ${file}/`);
      listFiles(fullPath, prefix + '  ');
    } else {
      console.log(`${prefix}📄 ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
    }
  }
}
listFiles(outdir);