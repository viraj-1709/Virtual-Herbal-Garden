const fs = require('fs');
const path = require('path');

const baseDir = __dirname;

function write(relPath, content) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Written:', relPath);
}

write('package.json', JSON.stringify({
  name: 'virtual-herbal-garden',
  private: true,
  version: '1.0.0',
  type: 'module',
  scripts: {
    dev: 'vite',
    build: 'vite build',
    preview: 'vite preview'
  },
  dependencies: {
    'canvas-confetti': '^1.9.4',
    'clsx': '^2.1.1',
    'lucide-react': '^1.16.0',
    'react': '^18.3.1',
    'react-dom': '^18.3.1',
    'tailwind-merge': '^3.5.0',
    'three': '^0.170.0'
  },
  devDependencies: {
    '@types/canvas-confetti': '^1.9.0',
    '@types/react': '^18.3.18',
    '@types/react-dom': '^18.3.5',
    '@types/three': '^0.170.0',
    '@vitejs/plugin-react': '^4.3.4',
    'autoprefixer': '^10.4.20',
    'postcss': '^8.4.49',
    'tailwindcss': '^3.4.17',
    'vite': '^6.0.7'
  }
}, null, 2));

write('vite.config.js', `
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
`);

write('postcss.config.js', `
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`);

write('tailwind.config.js', `
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ayush: {
          ayurveda: '#15803d',
          yoga: '#d97706',
          unani: '#7c3aed',
          siddha: '#ea580c',
          homeopathy: '#0284c7',
        },
        garden: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        herbal: {
          cream: '#f8faf7',
          surface: '#ffffff',
          gold: '#cda851',
          bark: '#4a3525',
          sage: '#8a9a86',
          leaf: '#2d6a4f',
          darkBg: '#09120c',
          darkCard: '#102217',
          darkBorder: '#1c3d29',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'leaf-sway': 'leafSway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.15)' },
        },
        leafSway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
};
`);

write('index.html', `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2316a34a'%3E%3Cpath d='M12 2C7.5 2 4 6 4 11c0 4.5 3 8.5 8 11 5-2.5 8-6.5 8-11 0-5-3.5-9-8-9zm0 18c-3.8-2-6-5.4-6-9 0-3.5 2.5-6.8 6-7 3.5.2 6 3.5 6 7 0 3.6-2.2 7-6 9z'/%3E%3C/svg%3E" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Virtual Herbal Garden | SIH 2026 AYUSH Platform</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-herbal-cream dark:bg-herbal-darkBg text-slate-800 dark:text-slate-100 antialiased transition-colors duration-300 min-h-screen selection:bg-garden-500 selection:text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`);

write('src/index.css', `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  
  h1, h2, h3, .font-heading {
    font-family: 'Outfit', sans-serif;
  }
}

/* Custom Glassmorphism */
.glass-panel {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.dark .glass-panel {
  background: rgba(16, 34, 23, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(28, 61, 41, 0.7);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 9999px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #1c3d29;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #2d6a4f;
}
`);
console.log('Configs successfully created!');
