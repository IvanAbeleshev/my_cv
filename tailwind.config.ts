import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#000000',
        'light-primary': '#ffffff',
        'yellow-md': '#e3f700',
        'orange-md': '#ff6600',
        background: "#bbbbbb",
        foreground: "#ededed",
      },
      backgroundImage: {
        'white-yellow-white': 'linear-gradient(90deg, rgba(255,255,255,1) 20%, rgba(255,102,0,1) 50%, rgba(255,255,255,1) 80%);',
        'one-piece': 'url(/img/backgrounds/one-piece.webp)',
        'anime-landscape': 'url(/img/backgrounds/landscape.webp)',
        'dr-stone': 'url(/img/backgrounds/dr-stone.webp)',
        'hidden-leaf-village': 'url(/img/backgrounds/hidden-leaf-village.webp)',
        'radial-orange': 'radial-gradient(circle, rgba(255,255,255,0.5) 40%, rgba(255,102,0,0.44723827030812324) 120%)'
      },
      backgroundSize:{
        '400': '400%'
      },
      boxShadow: {
        'special-orange': '0px 0px 25px 0px rgba(255,102,0,0.8)'
      }
    },
  },
  plugins: [],
} satisfies Config;
