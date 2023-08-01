import formsPlugin from '@tailwindcss/forms';
import typographyPlugin from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'bebas': ['Bebas Neue', 'sans-serif'],  
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'bold': 700,
      },
      fontStyle: {
        'italic': 'italic',
      },
    },
  },
  plugins: [formsPlugin, typographyPlugin],
};

export default config;
