import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use '/' on Vercel or local development, and '/zariya_ecommerce/' on GitHub Pages
  base: process.env.VERCEL || process.env.NODE_ENV !== 'production'
    ? '/' 
    : '/zariya_ecommerce/',
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  }
});
