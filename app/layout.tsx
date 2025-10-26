import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shureprint.com'),
  title: {
    default: 'Shureprint | Custom Print & Packaging for Hospitality Brands',
    template: '%s | Shureprint'
  },
  description: "LA-based custom print and packaging company specializing in hospitality, food service, and retail. Premium custom boxes, bags, cups, and containers with unlimited design revisions.",
  keywords: ['custom packaging', 'print packaging Los Angeles', 'hospitality packaging', 'restaurant packaging', 'custom boxes', 'custom bags', 'food service packaging', 'retail packaging', 'custom cups', 'branded packaging'],
  openGraph: {
    title: "Shureprint | Custom Print & Packaging for Hospitality",
    description: "Premium custom packaging for restaurants, hotels, and retail brands. Warehousing, fulfillment, and design services from LA.",
    type: "website",
    locale: 'en_US',
    siteName: 'Shureprint',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Shureprint Custom Packaging'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shureprint | Custom Print & Packaging",
    description: "Premium custom packaging for hospitality brands. LA-based with warehousing, fulfillment, and unlimited design revisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shureprint",
    "url": "https://shureprint.com",
    "logo": "https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/625762e6d10a111af9c654bb_Shureprint.png",
    "description": "LA-based custom print and packaging company specializing in hospitality, food service, and retail.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2215 S Santa Fe Ave",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90058",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-323-526-9500",
      "email": "info@shureprint.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://shureprint.b2bwave.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link href="https://assets.website-files.com/622fa56ecc9274a545158f70/css/shureprint2022.1058f7a4e.css" rel="stylesheet" type="text/css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`body ${montserrat.variable} ${lato.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
