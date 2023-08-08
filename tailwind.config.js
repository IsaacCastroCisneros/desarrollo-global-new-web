/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
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
        myGreen3:"#0DBCFD",
        myGreen4:"#4DC115",
        myGreen5:"#22b457",
        myGreen6:"#229500",
        myGray:"#7C7C7C",
        myGray2:"#EDEEF3",
        myGray3:"#707070",
        myGray4:"#F6F6F6",
        myGray5:"#F5F5F5",
        myGray6:"#FAFAFA",
        bg:"#F3F6FF",
        bg2:"#f8f9fa",
        bg3:"#1E228D",
        myBlue:"#0042A3",
        myBlue2:"#0D30A7",
        myBlue3:"#031E7F",
        myBlue4:"#2B4EFF",
        myBlue4:"#2646B1",
        myBlue5:"#0074FF",
        myBlue5:"#3F8DFD",
        myYellow:"#FFE001",
        myRed:"#AA0F03",
        myOrange:"#E86B2A",
        border:"#919191",
        border2:"#D7D8E0",
        border3:"#e1e1e1",
      },
      screens:
      {
        'navbar':{'max':'1385px'},
        'navbar1':{'max':'763px'},
        'hero-response':{'max':'1305px'},
        'hero':{'max':'1277px'},
        'hero1':{'max':'716px'},
        '1736px':{'max':'1736px'},
        '1500px':{'max':'1500px'},
        '1450px':{'max':'1450px'},
        '1362px':{'max':'1362px'},
        '1300px':{'max':'1300px'},
        '1000px':{'max':'1000px'},
        '800px':{'max':'800px'},
        '840px':{'max':'840px'},
        '700px':{'max':'700px'},
        '500px':{'max':'500px'},
      }
    },
  },
  plugins: [],
}
