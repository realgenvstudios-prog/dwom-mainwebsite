import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "DWOM - Fresh Local Ingredients, Faster than a text",
  description: "Buy Ghanaian market items using English, Twi, or shorthand. From Koobi to Ayoyo, we understand your list and deliver it instantly.",
  keywords: ["grocery", "Ghana", "delivery", "fresh", "local", "ingredients", "market"],
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
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
