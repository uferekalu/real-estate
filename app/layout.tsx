import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Neeps International | Luxury Real Estate in Nigeria",
    template: "%s | Neeps International",
  },
  description:
    "Discover exclusive luxury properties across Nigeria with Neeps International. Elevate your lifestyle with premium residences, oceanfront villas, and high-return investment opportunities in Lagos and beyond.",
  keywords: [
    "luxury real estate Nigeria",
    "properties for sale Lagos",
    "luxury homes Nigeria",
    "real estate investment Nigeria",
    "exclusive properties Lagos",
    "Neeps International",
  ],
  authors: [{ name: "Neeps International" }],
  openGraph: {
    title: "Neeps International | Premier Luxury Real Estate in Nigeria",
    description:
      "Redefining luxury living in Nigeria — exclusive listings, trusted expertise, and unparalleled elegance.",
    url: "https://www.neepsintl.com",
    siteName: "Neeps International",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neeps International | Luxury Real Estate Nigeria",
    description:
      "Exclusive luxury properties and investments in Nigeria. Experience elegance redefined.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.neepsintl.com",
  },
};

import 'leaflet/dist/leaflet.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}