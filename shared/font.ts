import localFont from "@next/font/local";
import { Noto_Sans_KR } from "@next/font/google";

export const Futura = localFont({
  src: [
    {
      path: "../public/fonts/futura/FuturaCyrillicLight.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicBook.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicMedium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicDemi.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicHeavy.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/futura/FuturaCyrillicExtraBold.ttf",
      weight: "900",
    },
  ],
  variable: "--font-futura",
});

export const NotoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
});
