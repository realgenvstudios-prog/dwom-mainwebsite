import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DWOM - Fresh Local Ingredients, Faster than a text",
  description: "Buy Ghanaian market items using English, Twi, or shorthand. From Koobi to Ayoyo, we understand your list and deliver it instantly.",
  keywords: ["grocery", "Ghana", "delivery", "fresh", "local", "ingredients", "market"],
  icons: {
    icon: [
      { url: "/images/icon.png", type: "image/png", sizes: "1024x1024" }
    ],
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },
  openGraph: {
    title: "DWOM - Fresh Local Ingredients",
    description: "Buy Ghanaian market items using English, Twi, or shorthand.",
    type: "website",
    locale: "en_GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
