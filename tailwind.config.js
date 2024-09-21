import defaultTheme from "tailwindcss/defaultTheme";

// tailwind.config.mjs

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["josefinSans"],
      sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
