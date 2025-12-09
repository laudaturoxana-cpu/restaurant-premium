import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Restaurant Color Palette
        primary: {
          DEFAULT: '#1A1A1A', // Negru profund elegant
          light: '#2A2A2A',
        },
        secondary: {
          DEFAULT: '#B8956A', // Auriu/Bronz elegant
          light: '#C9A876',
          dark: '#A67C52',
        },
        accent: {
          green: '#2C5F2D', // Verde elegant pentru fresh/organic
          white: '#FFFFFF',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
        },
        background: {
          DEFAULT: '#FAFAF8', // Off-white cald
          card: '#F8F8F6',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scroll-indicator': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
