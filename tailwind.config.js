/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(var(--marine-blue) / <alpha-value>)",
        "outer-background": "hsl(var(--outer-background) / <alpha-value>)",
        "purplish-blue": "hsl(var(--purplish-blue) / <alpha-value>)",
        "pastel-blue": "hsl(var(--pastel-blue) / <alpha-value>)",
        "light-blue": "hsl(var(--light-blue) / <alpha-value>)",
        "strawberry-red": "hsl(var(--strawberry-red) / <alpha-value>)",
        "cool-gray": "hsl(var(--cool-gray) / <alpha-value>)",
        "light-gray": "hsl(var(--light-gray) / <alpha-value>)",
        magnolia: "hsl(var(--magnolia) / <alpha-value>)",
        alabaster: "hsl(var(--alabaster) / <alpha-value>)",
        white: "hsl(var(--white) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
