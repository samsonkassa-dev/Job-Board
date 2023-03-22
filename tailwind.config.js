module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/bg-header-desktop.svg"
      },
      colors: {
        'blue': '#5CA5A5',
        'black': '#2B3939',
        'grey': '#7C8F8F'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        'extra-bold': 800,
        black: 900,
      }

    },
  },
  plugins: [],
}
