/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: {
          950: '#0a1442',
          900: '#101e5e',
          700: '#1c3199',
          600: '#2540c2',
          500: '#3450e0',
        },
        route: {
          400: '#ff9d3d',
          500: '#f5811f',
          600: '#dd6a0d',
        },
        ink: '#0d1220',
      },
      fontFamily: {
        display: ['"Archivo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
