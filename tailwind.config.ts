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
      'ss': '390px',
      'sm': '480px',
      'tablet': '640px',
      'md': '768px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    container: {
      center: true,
      screens: {
        DEFAULT: '100%',
        xl: '1280px',
        '2xl': '1440px'
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
          dark: '#474747',
          border: '#8E8B8B'
        }
      },
      boxShadow: {
        'moon': '0 0 10px 5px rgba(56, 3, 92, 0.5)',
        'sun' : '0 0 10px 5px rgba(255, 167, 59, 0.5)'
      },
      dropShadow: {
        'swiper': [
          '1px 1px rgba(163, 84, 217, 0.4)',
          '2px 2px rgba(163, 84, 217, 0.3)',
          '3px 3px rgba(163, 84, 217, 0.2)',
          '4px 4px rgba(163, 84, 217, 0.1)'
        ],
        'swiper-dark': [
          '1px 1px rgba(200, 131, 248, 0.4)',
          '2px 2px rgba(200, 131, 248, 0.3)',
          '3px 3px rgba(200, 131, 248, 0.2)',
          '4px 4px rgba(200, 131, 248, 0.1)'
        ],
        'link': [
          '3px 3px 5px rgba(12, 12, 12, 0.8)'
        ],
        'link-dark': [
          '3px 3px 5px rgba(217, 217, 217, 0.8)'
        ],
        'contact': [
          '5px 0px 3px rgba(213, 121, 226, 0.7)',
          '-5px 0px 3px rgba(213, 121, 226, 0.7)',
          '0px 5px 3px rgba(213, 121, 226, 0.7)',
          '0px -5px 3px rgba(213, 121, 226, 0.7)'
        ],
        'contact-dark': [
          '5px 0px 3px rgba(213, 121, 226, 0.4)',
          '-5px 0px 3px rgba(213, 121, 226, 0.4)',
          '0px 5px 3px rgba(213, 121, 226, 0.4)',
          '0px -5px 3px rgba(213, 121, 226, 0.4)'
        ]
      },
      animation: {
        'blink': 'blink 0.5s step-end infinite alternate'
      },
      keyframes: {
        'blink': {
          '50%': {borderColor: 'transparent'}
        }
      },
      transitionProperty: {
        'filter': 'filter'
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
