/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      secondary: "#FFA27C",
      primary: "#2A2A2A",
      paragraph: "#6F7975",
      accent: "#376058",
      accent_700: "#503760",
      yellow: "FFB905",
    },
  },
  plugins: [],
};
