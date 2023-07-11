/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [import("tw-elements/dist/plugin.cjs")],
  darkMode: "className"
};

