import localfont from "next/font/local";

export const kazimir = localfont({
  src: [
    { path: "../app/fonts/kazimirtext-regular.ttf", weight: "400", style: "normal" },
    { path: "../app/fonts/kazimirtext-bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-kazimir",
  display: "swap",
});

export const fontspring = localfont({
  src: [
    { path: "../app/fonts/proximanova_bold.otf", weight: "400", style: "normal" },
    { path: "../app/fonts/proximanova_regular.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-fontspring",
  display: "swap",
});
