import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        extend: {},
        light: {
          primary: {
            50: '#ecffff',
            100: '#cefeff',
            200: '#a3fbfe',
            300: '#63f5fd',
            400: '#3de9f5',
            500: '#01c9d9',
            600: '#04a0b6',
            700: '#0b7f93',
            800: '#126678',
            900: '#145465',
            950: '#063846',
            foreground: '#FFFFFF',
            DEFAULT: '#01c9d9'
          }

        }
      },
      dark: {
      // ...
        colors: {}
      }
    })
  ]
}
