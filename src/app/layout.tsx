import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

import SmoothScroll from "@/components/providers/SmoothScroll";

export const metadata: Metadata = {
  title: "Mohammed Haris",

  description:
    "Frontend Developer & UI/UX Designer crafting premium digital experiences with modern frontend systems and immersive interfaces.",

  keywords: [
    "Mohammed Haris",
    "Frontend Developer",
    "UI UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Web Designer",
    "Portfolio Website",
  ],

  authors: [
    {
      name: "Mohammed Haris",
    },
  ],

  creator: "Mohammed Haris",

  openGraph: {
    title: "Mohammed Haris",

    description:
      "Frontend Developer & UI/UX Designer crafting premium digital experiences.",

    url: "https://yourdomain.com",

    siteName: "Mohammed Haris",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Mohammed Haris",

    description:
      "Frontend Developer & UI/UX Designer crafting premium digital experiences.",
  },

  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased overflow-x-hidden">
      <SmoothScroll>
  {children}
</SmoothScroll>
      </body>
    </html>
  );
}