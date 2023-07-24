/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:
      {
        primary:"#0E2FAA",
        myGreen:"#1DD8FF",
        myGreen2:"#005A70",
        bg:"#F3F6FF",
        myBlue:"#0042A3",
        myYellow:"#FFE001",
        myRed:"#AA0F03",
      },
      screens:
      {
        'navbar':{'max':'1385px'},
        'navbar1':{'max':'763px'},
        'hero':{'max':'1277px'},
        'hero1':{'max':'716px'},
        '700px':{'max':'700px'}
      }
    },
  },
  plugins: [],
}
