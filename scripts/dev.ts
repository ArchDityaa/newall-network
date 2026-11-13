// scripts/dev.ts - Development server using Bun's bundler (no watch in this version)
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Build function for development
async function buildDev() {
  await Bun.build({
    entrypoints: [resolve(__dirname, '../src/main.tsx')],
    outdir: resolve(__dirname, '../dist-dev'),
    target: 'browser',
    minify: false,
    splitting: true,
    sourcemap: 'inline',
    define: {
      'import.meta.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
      'import.meta.env.VITE_SITE_URL': '"http://localhost:3000"',
      'import.meta.env.DEV': 'true',
      'import.meta.env.PROD': 'false',
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
    plugins: [],
  });
}

// Initial build
await buildDev();
console.log('✅ Initial build complete');
console.log('👀 For hot reload, run "bun run dev" again after changes');

// HTTP server
const server = Bun.serve({
  port: 3000,
  hostname: '0.0.0.0',
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;
    
    // API routes
    if (pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({ error: 'Not implemented' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    // Static files from dist-dev (built assets)
    if (pathname.startsWith('/assets/') || pathname.startsWith('/fonts/') || pathname.startsWith('/img/')) {
      const filePath = resolve(__dirname, '../dist-dev', pathname.slice(1));
      try {
        const file = Bun.file(filePath);
        if (await file.exists()) {
          return new Response(file);
        }
      } catch {}
    }
    
    // Static files from public
    if (pathname.startsWith('/public/')) {
      const filePath = resolve(__dirname, '..', pathname.slice(1));
      try {
        const file = Bun.file(filePath);
        if (await file.exists()) {
          return new Response(file);
        }
      } catch {}
    }
    
    // Serve HTML for all other routes (SPA fallback)
    const htmlPath = resolve(__dirname, '../index.html');
    let html = await Bun.file(htmlPath).text();
    
    // Find the main JS file
    const fs = await import('fs/promises');
    const files = await fs.readdir(resolve(__dirname, '../dist-dev'));
    const mainJs = files.find(f => f.startsWith('main-') && f.endsWith('.js'));
    
    if (mainJs) {
      html = html.replace(
        /<script type="module" src="\/src\/main\.tsx"><\/script>/,
        `<script type="module" src="/assets/${mainJs}"></script>`
      );
    }
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    });
  },
});

console.log(`🚀 Development server running at http://${server.hostname}:${server.port}`);