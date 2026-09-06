import type { Metadata } from "next";
import "./globals.css";

import { Manrope } from "next/font/google";



const manrope = Manrope({

  variable: "--font-manrope",

  weight: ["400", "500", "600", "700", "800"],

  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Harvest Global",
  description: "Harvest Global",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} max-w-screen h-full antialiased`}
    >
      <body className="min-h-full bg-black  w-full overflow-x-hidden">



        {children}


      </body>
    </html>
  );
}
