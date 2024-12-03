import type { Config } from 'tailwindcss'
import daisyUi from "daisyui"
import daisyui from 'daisyui'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    custom:{
      "pause":{animation:"pause"}
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "body":"url(\"/public/img/3957944.jpg\");"
      },
      animation:{
        "slideinright": 'slideinright 2s linear infinite',
        "fadeIn":"fadeIn 700ms ease-in-out  ",
        "slideIn":"slideIn 700ms ease"
      },
      keyframes: {
        slideinright:{
          "0%":{transform: "translateX(-20vw)"},
          "100":{transform: "translateX(-20vw)"}
        },
        fadeIn:{
          "from":{opacity:"0"},
          "to":{opacity:"1"}
          },
          slideIn:{
            "from":{transform:"translateX(100%)"},
            "to":{transform:"translateX(0px)"}
            }
      },
      blur:{
        "xs":"2px"
      },
      colors:{
        "primary":"#3188fa",
        "secondary":"#cb31fa"
      },
      transitionProperty:{
        "display":"display"
      },
      
/* end config restaurancy */

    },
  },
  plugins: [daisyui],
  darkMode:"class"
}
export default config
