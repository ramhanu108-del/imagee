import tailwindcss from 'tailwindcss';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {defineConfig} from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(() => {
  return {
    base: '/',
    build: {

      outDir: 'dist',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          blog: path.resolve(__dirname, 'blog.html'),
          contact: path.resolve(__dirname, 'contact-us.html'),
          disclaimer: path.resolve(__dirname, 'disclaimer.html'),
          privacy: path.resolve(__dirname, 'privacy-policy.html'),
          terms: path.resolve(__dirname, 'terms-of-service.html'),
          "pdf-compressor-online": path.resolve(__dirname, 'pdf-compressor-online.html'),
          "pdf-maker-online": path.resolve(__dirname, 'pdf-maker-online.html'),
          "sip-calculator": path.resolve(__dirname, 'sip-calculator.html'),
          "emi-calculator": path.resolve(__dirname, 'emi-calculator.html'),
          "fd-calculator": path.resolve(__dirname, 'fd-calculator.html'),
          "credit-card-payoff-calculator": path.resolve(__dirname, 'credit-card-payoff-calculator.html'),
          "ads-roi-calculator": path.resolve(__dirname, 'ads-roi-calculator.html'),
          "crypto-profit-calculator": path.resolve(__dirname, 'crypto-profit-calculator.html'),
          "image-compressor": path.resolve(__dirname, 'image-compressor.html'),
          "word-counter": path.resolve(__dirname, 'word-counter.html'),
          "qr-code-generator": path.resolve(__dirname, 'qr-code-generator.html'),
          "password-generator": path.resolve(__dirname, 'password-generator.html'),
          "age-calculator": path.resolve(__dirname, 'age-calculator.html'),
          "unit-converter": path.resolve(__dirname, 'unit-converter.html')
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
