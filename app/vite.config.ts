import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// La versione di release-please (package.json della radice) finisce nei dati esportati.
const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as { version: string };

export default defineConfig({
  define: { __APP_VERSION__: JSON.stringify(version) },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Nòus',
        short_name: 'Nòus',
        description: 'Idee atomiche dai tuoi articoli, una card alla volta',
        lang: 'it',
        theme_color: '#1c1917',
        background_color: '#fafaf9',
        display: 'standalone',
        start_url: '.',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          // Android ritaglia le maskable (cerchio, squircle): qui il disegno sta nel 78% centrale.
          { src: 'icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // ideas.json è nel precache: l'app funziona offline con l'ultima libreria scaricata.
        globPatterns: ['**/*.{js,css,html,svg,json}'],
      },
    }),
  ],
});
