import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    server: {
      host: true,                 // listen on all interfaces
      allowedHosts: ['.replit.dev'] // allow ANY sub-domain of replit.dev
    },
  },
});
