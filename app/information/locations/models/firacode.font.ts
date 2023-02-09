import localFont from "@next/font/local";

export const firaCode = localFont({
  src: [
    {
      path: "../../../fonts/FiraCode-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/FiraCode-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
