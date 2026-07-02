import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshi-portfolio.vercel.app"), // Replace with the actual deployed URL

  title: {
    default: "Priyanshi | Cybersecurity Portfolio",
    template: "%s | Priyanshi",
  },

  description:
    "Official portfolio of Priyanshi, a Cybersecurity Engineer and AI Security enthusiast. Explore projects in cybersecurity, AI-powered security, network security, OSINT, and secure software development.",
  
  verification: {
     google: "VXy7TAJ4f-4Kgyvo_nKoSYDyBt0J-DSaa9TjJonkXZs",
},
  keywords: [
    "Priyanshi",
    "Priyanshi Portfolio",
    "Cybersecurity",
    "Cyber Security Engineer",
    "Ethical Hacking",
    "Network Security",
    "OSINT",
    "Kali Linux",
    "Nmap",
    "Python",
    "AI Security",
    "Cryptography",
    "MongoDB",
    "SQL",
    "JavaScript",
    "React",
    "Next.js",
    "Portfolio",
    "Cybersecurity Projects",
    "Silver Oak University",
    "IIT Madras",
  ],

  authors: [
    {
      name: "Priyanshi",
    },
  ],

  creator: "Priyanshi",
  publisher: "Priyanshi",

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  openGraph: {
    title: "Priyanshi | Cybersecurity Portfolio",
    description:
      "Explore Priyanshi's cybersecurity projects, AI-powered security tools, and professional portfolio.",

    url: "https://priyanshi-portfolio.vercel.app", // Replace with actual URL

    siteName: "Priyanshi Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Priyanshi Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyanshi | Cybersecurity Portfolio",
    description:
      "Official cybersecurity portfolio of Priyanshi.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}