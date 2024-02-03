/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/images/hero-section.jpg')",
      }),
      colors: {
        beige: '#efeae7', // Replace with the exact shade of beige you want to use
        beigeBG: "#c39d99"
      },
    },
  },
  plugins: [],
};