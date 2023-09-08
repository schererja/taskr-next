import { type Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,jsx, ts,tsx}",],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
