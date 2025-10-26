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
  title: "SHUREPRINT",
  description: "SHUREPRINT - LA-based print and packaging company devoted to branding, hospitality, and design",
  openGraph: {
    title: "SHUREPRINT",
    description: "SHUREPRINT - LA-based print and packaging company",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHUREPRINT",
    description: "SHUREPRINT - LA-based print and packaging company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link href="https://assets.website-files.com/622fa56ecc9274a545158f70/css/shureprint2022.1058f7a4e.css" rel="stylesheet" type="text/css" />
      </head>
      <body className={`body ${montserrat.variable} ${lato.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
