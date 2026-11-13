// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { cpus } from 'os';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@content': resolve(__dirname, 'src/content'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@lib': resolve(__dirname, 'src/lib'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
    },
  },
  build: {
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    target: 'es2022',
    modulePreload: { polyfill: true },
    rollupOptions: {
      maxParallelFileOps: cpus().length,
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@tanstack/react-router', 'i18next', 'react-i18next'],
          motion: ['motion'],
          utils: ['zod', 'lenis'],
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? '';
          const ext = name.split('.').pop() ?? '';
          if (/\.(woff2?|ttf|eot)$/.test(name)) return `fonts/[name]-[hash].${ext}`;
          if (/\.(png|jpg|jpeg|gif|svg|webp|avif)$/.test(name)) return `img/[name]-[hash].${ext}`;
          if (/\.css$/.test(name)) return `assets/[name]-[hash].${ext}`;
          return `assets/[name]-[hash].${ext}`;
        },
      },
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: { chrome: 120, firefox: 120, safari: 17, edge: 120 },
      drafts: { customMedia: true },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
  },
  envPrefix: 'VITE_',
  define: {
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
  },
});