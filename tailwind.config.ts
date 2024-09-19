import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { PluginAPI } from 'tailwindcss/types/config'

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
        white: {
          light: '#F3F3F3',
          default: '#FDFDFD'
        },
        black: {
          light: '#303031',
          dark: '#0C0C0C'
        },
        purple: '#CA83FA',
        grey: {
          default: '#3C3C3D',
          light: '#D9D9D9',
          dark: '#474747'
        }
      },
      boxShadow: {
        'moon': '0 0 10px 5px rgba(56, 3, 92, 0.5)',
        'sun' : '0 0 10px 5px rgba(255, 167, 59, 0.5)'
      },
      animation: {
        'blink': 'blink 0.5s step-end infinite alternate'
      },
      keyframes: {
        'blink': {
          '50%': {borderColor: 'transparent'}
        }
      }
    }
  },
  darkMode: 'class',
  plugins: [
    plugin(function (api: PluginAPI) {
      const newUtilities = {
        '.text-shadow-light': {
          textShadow: '1px 1px 1px rgba(12, 12, 12, 0.3), 1px 2px 1px rgba(12, 12, 12, 0.3), 1px 3px 1px rgba(12, 12, 12, 0.3)'
        },
        '.text-shadow-dark': {
          textShadow: '1px 1px 1px rgba(253, 253, 253, 0.3), 1px 2px 1px rgba(253, 253, 253, 0.3), 1px 3px 1px rgba(253, 253, 253, 0.3)'
        }
      }

      api.addUtilities(newUtilities)
    })
  ]
};
export default config
