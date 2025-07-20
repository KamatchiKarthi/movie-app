import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: './tailwind.config.js',
      apply: 'build',
      important: true


    }),
  ],
  server: {
    port: 8000, // Set the port to 8000
    open: true, // Automatically open the browser
  },
});


