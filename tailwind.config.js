/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pastel color system from the provided palette
        pastel: {
          // Baby Pink shades
          pink: {
            50: '#FCD1F5',
            100: '#FED8EC',
            200: '#FFB1D3',
            300: '#F8B1D3',
            400: '#FF8ECC',
            500: '#F770E5',
          },
          // Baby Blue shades
          blue: {
            50: '#F0F4FF',
            100: '#EEF1FF',
            200: '#D6E4FF',
            300: '#B4DAF9',
            400: '#9ED0FF',
            500: '#72DDF7',
            600: '#9B8FFF',
            700: '#8093F1',
          },
          // Baby Teal/Mint shades
          teal: {
            50: '#EFFFFD',
            100: '#CEFFC4',
            200: '#B5FFFC',
            300: '#9DFFF9',
          },
          // Pastel Purple/Lavender shades
          purple: {
            50: '#F5E6FF',
            100: '#EBCAF5',
            200: '#D8CAF5',
            300: '#C2A9EF',
            400: '#AC98E8',
            500: '#9667E0',
            600: '#8795E4',
            700: '#B795E4',
          },
          // Pastel Peach/Cream shades
          peach: {
            50: '#FFFDE7',
            100: '#FFF1C2',
            200: '#FFE791',
            300: '#FFC897',
            400: '#FFAE80',
            500: '#FFADAD',
          },
          // Soft dark mode backgrounds
          dark: {
            100: '#1a1a2e',
            200: '#16213e',
            300: '#0f3460',
          }
        },
        // Category-specific colors
        category: {
          technology: '#72DDF7',      // Baby Blue
          techInsights: '#AC98E8',    // Pastel Purple
          learning: '#B5FFFC',        // Baby Teal
          food: '#FFC897',            // Pastel Peach
          travel: '#FF8ECC',          // Baby Pink
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
