// tailwind.config.js
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3A5F",
        accent: "#F36F21",
        muted: "#8A8A8A",
        background: "#F5F5F5",

        darkBg: "#0F172A",
        darkCard: "#1E293B",
        darkText: "#F9FAFB",
      },

      backgroundImage: {
                'heroPattern': "url('/src/assets/18c1270c05243d892bfe6641147454cb.jpg')",
                'footerTexture': "url('/img/footer-texture.png')",
      },

      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
