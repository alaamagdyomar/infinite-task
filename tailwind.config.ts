import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // small mobile
        smMobile: { min: "320px", max: "376px" },
        // mobiles
        mobile: { min: "377px", max: "639px" }, // Max-width: 639px
        // Tablet devices (640px to 1023px)
        tablet: { min: "640px", max: "1023px" }, // Min-width: 640px, Max-width: 1023px
        // laptops devices (1024px to 1535px)
        laptop: { min: "1024px", max: "1280px" }, // Min-width: 1024px, Max-width: 1535px
        // laptops devices (1024px to 1535px)
        Desktop: { min: "1281px", max: "1535px" },
        // large views
        lview: { min: "1536px" },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["Roboto", "sans-serif"], // Add Roboto to the font family
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-gold": "#DCC794",
        "gold-dark": "#F3BA2F",
      },
      transitionProperty: {
        width: "width",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #FFFFFF 0%, #F7C891 8.5%, #F3AC59 12.75%, #EC6615 77%, #944617 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
