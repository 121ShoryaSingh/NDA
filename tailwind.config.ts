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
        offwhite: '#F0FBF3',
        darkoffwhite: '#a8b0aa',
        darkblue: '#161C2D',
        greentext: '#68D585'
       },
      backgroundImage: {
        
      },
      boxShadow: {
        '3xl': '-50px 40px 0px 0px rgba(32, 38, 54, 0.9)',
      }
    },
  },
  plugins: [],
};
export default config;
