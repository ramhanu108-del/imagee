import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [tailwindcss()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          contact: path.resolve(__dirname, 'contact-us.html'),
          disclaimer: path.resolve(__dirname, 'disclaimer.html'),
          privacy: path.resolve(__dirname, 'privacy-policy.html'),
          terms: path.resolve(__dirname, 'terms-of-service.html')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
