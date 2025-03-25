import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Membres Haven Spa",
  description:
    "Discover tranquility at Membres Haven Spa. Our luxury treatments will leave you refreshed and renewed.",
  keywords: [
    "Membres Haven Spa",
    "barbershop",
    "spa",
    "wellness",
    "sauna",
    "steam bath",
    "body massage",
    "body scrubbing",
    "waxing",
    "facial treatments",
    "pedicure",
    "manicure",
    "relaxation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
