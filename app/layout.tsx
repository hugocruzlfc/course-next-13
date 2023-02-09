import "./tailwind-global.css";
import StyledComponentRegistry from "./lib/registry";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "optional", // (swap),carga font por defecto si tarda en cargar la font, tambien esta opcional
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head lang="es" className={roboto.className} />
      <body>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
