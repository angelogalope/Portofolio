/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    sreens: {
      sm: "320px",
      md: "766px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        custom: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: {
          100: "#333",
          200: "#444",
          // Add other dark mode color variants here...
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["dark"],
      backgroundColor: ["dark"],
    },
  },
  plugins: [],
}

