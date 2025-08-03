import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/e-plantShopping/', // This must match your repo name
  build: {
    outDir: 'docs' // GitHub Pages will serve from /docs folder on main
  }
});
