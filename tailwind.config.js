/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        contrastYellow: "#fafe11",
      },
      backgroundColor: {
        customBackground1: "#252525",
        customBackground2: "#262626",
        customBackground3: "#242422",
        customBackground4: "#212236",
      },
    },
  },
  plugins: [],
};
