/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "320px",
      md: "766px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
          300: "#000000",
          // Add other dark mode color variants here...
        },
      },
      opacity: {
        '0': '0',
        '100': '1',
      },
      transitionProperty: {
        'opacity': 'opacity',
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

