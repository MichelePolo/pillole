import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Pillole',
        short_name: 'Pillole',
        description: 'Idee atomiche dai tuoi articoli, una card alla volta',
        lang: 'it',
        theme_color: '#1c1917',
        background_color: '#fafaf9',
        display: 'standalone',
        start_url: '.',
        icons: [{ src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
      workbox: {
        // ideas.json è nel precache: l'app funziona offline con l'ultima libreria scaricata.
        globPatterns: ['**/*.{js,css,html,svg,json}'],
      },
    }),
  ],
});
