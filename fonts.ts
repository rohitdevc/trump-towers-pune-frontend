import localFont from "next/font/local";
import { Slabo_27px } from "next/font/google";

export const slabo = Slabo_27px({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-slabo",
});

export const athelasRegular = localFont({
  src: "./public/fonts/Athelas-Regular.woff",
  variable: "--font-athelas-regular",
});

export const galaxiePolarisLight = localFont({
  src: "./public/fonts/GalaxiePolaris-Light.woff",
  variable: "--font-galaxie-polaris-light",
});

export const galaxiePolarisMedium = localFont({
  src: "./public/fonts/GalaxiePolarisMedium.woff",
  variable: "--font-galaxie-polaris-medium",
});

export const galaxiePolarisBold = localFont({
  src: "./public/fonts/GalaxiePolarisBold.woff",
  variable: "--font-galaxie-polaris-bold",
});