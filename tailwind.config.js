/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary) / <alpha-value>)",
        outerBackground: "hsl(var(--outer-background) / <alpha-value>)",
        textDark: "hsl(var(--text-dark) / <alpha-value>)",
        textLight: "hsl(var(--text-light) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
