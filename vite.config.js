import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3D-Models/', // Add the base property here
  assetsInclude: ['**/*.glb'], // Include .glb files
});
