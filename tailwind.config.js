/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#248bdb",
        secondary: "#222a32",
        white: "#ffffff",
        black: "#000000",
        range: '#3ECF94',
        back: '#1A2026',
        back_2: '#212A33',
        back_3: '#2d353d',
        back_4: '#2F3842',
        back_close: '#232930',
        back_nav: '#12161A',
        button: '#238BDA',
        border: '#2d3038',
        text_color: '#fff',
        text_color_2: '#8694A1',
        text_color_3: '#A6B8CC',
        text_color_4: '#42ADF5',
      },
    },
  },
  plugins: [],
};
