import { Inter, Roboto } from "next/font/google";

const inter_init = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
  variable: "--font-inter",
});

const roboto_init = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const inter = inter_init.variable;
export const roboto = roboto_init.variable;
