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
      'laptop': '1024px',
      'desktop': '1280px'
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
    }
  },
  darkMode: 'class'
};
export default config
