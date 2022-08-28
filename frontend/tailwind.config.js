/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        iphone: '375px', // iPhone 6(s), 7, 8, SE2
      },
      spacing: {
        1.25: '0.3125rem',
        3.75: '0.9375rem',
        6.25: '1.5625rem',
        7.5: '1.875rem',
        8.75: '2.1875rem',
        11.25: '2.8125rem',
        12.5: '3.125rem',
        13.75: '3.4375rem',
        15: '3.75rem',
        16.25: '4.0625rem',
        17.5: '4.375rem',
        18.75: '4.6875rem',
        21.25: '5.3125rem',
        22.5: '5.625rem',
        23.75: '5.9375rem',
        25: '6.25rem',
        26.25: '6.5625rem',
        27.5: '6.875rem',
        28.75: '7.1875rem',
        30: '7.5rem',
        31.25: '7.8125rem',
        32.5: '8.125rem',
        33.75: '8.4375rem',
        35: '8.75rem',
        36.25: '9.0625rem',
        37.5: '9.375rem',
        38.75: '9.6875rem',
        41.25: '10.3125rem',
        42.5: '10.625rem',
        43.75: '10.9375rem',
        45: '11.25rem',
        46.25: '11.5625rem',
        47.5: '11.875rem',
        48.75: '12.1875rem',
        50: '12.5rem',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
