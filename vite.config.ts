import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/zariya_ecommerce/', // Configured for GitHub Pages deployment
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});
