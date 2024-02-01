/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        YellowBg: "hsl(47, 88%, 63%)",
        WhiteNeutral: "hsl(0, 0%, 100%)",
        GreyNeutral: "hsl(0, 0%, 50%)",
        BlackNeutral: "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        custom: ["Figtree", "sans"],
      },
    },
  },
  plugins: [],
};
