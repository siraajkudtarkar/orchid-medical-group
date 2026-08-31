import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Orchid Medical Group | Family & Pediatric Medicine — Redlands, CA",
  description:
    "Orchid Medical Group provides compassionate family and pediatric healthcare in Redlands, CA. Led by Dr. Sanjay Kudtarkar and Dr. Swapna Kudtarkar. IEHP accepted. Accepting new patients — book an appointment today.",
  keywords: [
    "family medicine Redlands",
    "pediatrician Redlands CA",
    "IEHP doctor",
    "Orchid Medical Group",
    "Dr. Sanjay Kudtarkar",
    "Dr. Swapna Kudtarkar",
    "general practitioner Redlands",
    "pediatric care Inland Empire",
  ],
  openGraph: {
    title: "Orchid Medical Group | Family & Pediatric Medicine",
    description:
      "Expert family and pediatric care in Redlands, CA. IEHP accepted. Accepting new patients — book your appointment today.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-gray-900">
        {children}
      </body>
    </html>
  );
}
