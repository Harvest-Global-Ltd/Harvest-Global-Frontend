import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hgsystems.in"),

  title: "Harvest Global | Unified GeoAI Stack for Earth, Weather, and SpaceAI",

  description:
    "Sovereign GeoAI, Private AI Cloud, and Edge Intelligence for Earth Observation. Enterprise-grade GeoAI infrastructure, foundation models and sovereign AI environments for satellite intelligence, climate analytics and geospatial AI.",

  alternates: {
    canonical: "https://www.hgsystems.in/",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Harvest Global | Unified GeoAI Stack for Earth, Weather, and SpaceAI",
    description:
      "Harvest Global SSP Pvt Ltd (HG Systems) pioneering Earth Intelligence integrates satellite imagery, climate and weather data, ground observations and geospatial intelligence into an enterprise-grade GeoAI stack, enabling governments and industries to move from fragmented data to predictive, actionable intelligence",
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
    site: "@HarvestG_Ssp",
    title: "Harvest Global | Geo Foundational AI for Earth Observation",
    description:
      "Harvest Global SSP Pvt Ltd (HG Systems) pioneering Earth Intelligence integrates satellite imagery, climate and weather data, ground observations and geospatial intelligence into an enterprise-grade GeoAI stack, enabling governments and industries to move from fragmented data to predictive, actionable intelligence",
    images: ["https://www.hgsystems.in/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Harvest Global SSP Pvt Ltd",
  alternateName: "HG Systems",
  url: "https://www.hgsystems.in",
  logo: "https://www.hgsystems.in/logo.png",
  description:
    "Enterprise-grade GeoAI infrastructure, foundation models and sovereign AI environments for Earth Observation, climate intelligence and geospatial analytics.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NASSCOM/HARTRON, Udyog Vihar Phase 1",
    addressLocality: "Gurgaon",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@hgsystems.in",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.linkedin.com/company/harvest-global-ssp-ltd/",
    "https://www.instagram.com/harvestglobalssp",
    "https://x.com/HarvestG_Ssp",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harvest Global",
  url: "https://www.hgsystems.in",
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
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
