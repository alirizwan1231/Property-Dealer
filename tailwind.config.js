/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E2A38',
          50: '#F1F3F5',
          100: '#D8DFE6',
          200: '#B1BFD0',
          300: '#899FB9',
          400: '#627FA3',
          500: '#3B5F8D',
          600: '#1E2A38',
          700: '#192330',
          800: '#131C28',
          900: '#0E1520'
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#DADADA',
          400: '#CCCCCC',
          500: '#BFBFBF',
          600: '#A1A1A1',
          700: '#828282',
          800: '#636363',
          900: '#454545'
        },
        accent: {
          DEFAULT: '#DAA520',
          50: '#FCF6E6',
          100: '#F9ECCC',
          200: '#F3D999',
          300: '#EEC666',
          400: '#E4B333',
          500: '#DAA520',
          600: '#AE841A',
          700: '#826313',
          800: '#55420D',
          900: '#292106'
        },
        success: {
          DEFAULT: '#10B981',
          100: '#ECFDF5',
          500: '#10B981',
          900: '#064E3B'
        },
        warning: {
          DEFAULT: '#F59E0B',
          100: '#FFFBEB',
          500: '#F59E0B',
          900: '#78350F'
        },
        error: {
          DEFAULT: '#EF4444',
          100: '#FEF2F2',
          500: '#EF4444',
          900: '#7F1D1D'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif']
      },
      boxShadow: {
        'property': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'hero': 'calc(100vh - 80px)',
        'hero-mobile': 'calc(100vh - 64px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};