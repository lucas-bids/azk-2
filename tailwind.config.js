module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['Ubuntu', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "liquid": "url('../src/assets/images/login-screen.jpg')",
        "liquid-2": "url(../src/assets/images/liquid-02.jpg)"
      },
    },
  },
  plugins: [],
};
