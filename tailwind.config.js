/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        xl: "rgba(213, 217, 217, .5) 0 2px 5px 0;",
      },
    },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   darkBlack: "#202326",
    //   black: "#343A40",
    //   white: "#FFFFFF",
    // },
  },
  plugins: [],
};
