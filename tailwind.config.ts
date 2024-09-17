import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'md': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        'tablet': '2rem'
      }
    },
    extend: {
      colors: {
        white: '#FDFDFD',
        black: {
          light: '#303031',
          dark: '#0C0C0C'
        },
        purple: '#CA83FA'
      },
      boxShadow: {
        'moon': '0 0 10px 5px rgba(56, 3, 92, 0.5)',
        'sun' : '0 0 10px 5px rgba(255, 167, 59, 0.5)'
      }
    }
  },
  darkMode: 'class'
};
export default config
