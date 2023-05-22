/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkgray: '#495057',
        lightgray: '#e8e8e8',
        lightcyan: '#80bdff',
        green: '#28a745'
      }
    }
  },
  daisyui: {
    themes: [
      {
        rvWebLight: {
          primary: '#007f3a',
          secondary: '#ffcc00',
          'base-100': '#fff'
        }
      },
      {
        rvWebDark: {
          primary: '#007f3a',
          secondary: '#ccb400',
          'base-100': '#000'
        }
      }
    ],
    darkTheme: 'rvWebDark'
  },
  plugins: [require('daisyui')]
};
