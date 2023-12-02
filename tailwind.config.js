/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'gray-50': '#FAFAFA',
      'gray-100': '#F5F5F5',
      'gray-200': '#EEEEEE',
      'gray-900': '#212121',
    },
    fontFamily: {
      openSans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      H1: '72px',
      H2: '48px',
      H3: '32px',
      H4: '24px',
      H5: '20px',
      H1Mobile: '40px',
      H2Mobile: '32px',
      H3Mobile: '24px',
      H4Mobile: '20px',
      H5Mobile: '16px',
      body: '16px',
      bodySmall: '14px',
    },
    lineHeight: {
      130: '130%',
      140: '140%',
      150: '150%',
    },
    letterSpacing: {
      zero: '0',
      minus: '-1%',
    },
    screens: {
      tablet: '769px',
      desktop: '1201px',
      xlDesktop: '2560px',
    },
    extend: {
      boxShadow: {
        lightShadow: '0px 3px 8px 0px #E0E0E0',
      },
    },
  },
  plugins: [],
};
