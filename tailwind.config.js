/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // Image by <a href="https://www.freepik.com/free-photo/friends-enjoying-their-life-offline_23369393.htm#query=friends%20photos%20i%20can%20use%20for%20hero%20section%20for%20my%20website&position=13&from_view=search&track=ais&uuid=39fbe5f8-7280-48bc-8c37-a56db5279e42">Freepik</a>
        "hero-pattern": "url('/images/hero-section.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  plugins: [],
};
