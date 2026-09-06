import type { Metadata } from "next";
import "./globals.css";

import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hgsystems.in"),

  title: "Harvest Global | Unified GeoAI Stack for Earth, Weather, and SpaceAI",

  description:
    "Sovereign GeoAI, Private AI Cloud, and Edge Intelligence for Earth Observation.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Harvest Global | Unified GeoAI Stack for Earth, Weather, and SpaceAI",
    description:
      "Sovereign GeoAI, Private AI Cloud, and Edge Intelligence for Earth Observation.",
    url: "https://www.hgsystems.in/",
    siteName: "Harvest Global",
    type: "website",
    images: [
      {
        url: "https://www.hgsystems.in/og-image.png",
        width: 1200,
        height: 627,
        alt: "Harvest Global — Geo Foundational AI for Earth Observation",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Harvest Global | Geo Foundational AI for Earth Observation",
    description:
      "Sovereign GeoAI, Private AI Cloud, and Edge Intelligence for Earth Observation.",
    images: ["https://www.hgsystems.in/og-image.png"],
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} max-w-screen h-full antialiased`}
    >
      <body className="min-h-full w-full overflow-x-hidden bg-black">
        {children}
      </body>
    </html>
  );
}
