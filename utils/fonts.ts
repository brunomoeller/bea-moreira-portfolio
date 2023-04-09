import { Quicksand, Poppins } from "next/font/google";

export const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
