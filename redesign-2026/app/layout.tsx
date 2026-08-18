import type { Metadata, Viewport } from "next";
import { Sora, Inter, Noto_Sans_Devanagari } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voicetechnepal.online"),
  title: {
    default: "Voice Tech Nepal — Public Speaking & Communication Academy",
    template: "%s | Voice Tech Nepal",
  },
  description:
    "A 2-week public speaking bootcamp in Kathmandu. Stage confidence, voice projection, storytelling and leadership presence — live in Jadibuti or online. New batch every Sunday.",
  keywords: [
    "public speaking Nepal",
    "public speaking course Kathmandu",
    "communication training Nepal",
    "Voice Tech Nepal",
    "stage confidence training",
    "IELTS speaking Nepal",
  ],
  openGraph: {
    title: "Voice Tech Nepal — Public Speaking & Communication Academy",
    description:
      "2-week bootcamp: stage confidence, voice projection, storytelling and leadership presence. Live in Jadibuti, Kathmandu or online.",
    siteName: "Voice Tech Nepal",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18141a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
