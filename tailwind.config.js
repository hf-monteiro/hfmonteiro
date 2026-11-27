const { night, accent, highlight, success } = require("./lib/palette");

module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: { extend: { colors: { night, accent, highlight, success } } },
  plugins: []
};
