/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#343434",
        bg: "#F8E367",
        pink: "#FE956F",
      },
      boxShadow: {
        shadow1: "0px 13px 48px -1px rgba(0, 0, 0, 0.25)",
        shadow2: "0px 13px 46px rgba(0, 0, 0, 0.13)",
      },
    },
  },
  plugins: [],
}

