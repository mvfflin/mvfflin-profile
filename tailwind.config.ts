import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ubuntu_sans: ["Ubuntu_Sans"],
      helvetica: ["Helvetica"],
      typedry: ["TypeDry", "serif"],
      serif: ["serif"],
      poppins: ["Poppins"],
      typoslab: ["TypoSlab"],
      heycomic: ["HeyComic"],
      logo: ["Logos"],
    },
  },
  plugins: [],
};
export default config;
