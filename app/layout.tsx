import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import Providers from "@/components/providers";
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
  title: "Rahul Jha — Full Stack Software Engineer",
  description:
    "Portfolio of Rahul Jha, a Full Stack Software Engineer specializing in Spring Boot, React, React Native, and AI integration. Based in Bangalore, India.",
  keywords: [
    "Rahul Jha",
    "Full Stack Engineer",
    "Spring Boot",
    "React",
    "React Native",
    "Java",
    "Software Engineer",
    "Bangalore",
    "Portfolio",
    "AI Integration",
    "RAG",
  ],
  authors: [{ name: "Rahul Jha", url: "https://github.com/jharahul-28" }],
  creator: "Rahul Jha",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rahul Jha — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in Spring Boot, React, React Native, and AI integration.",
    siteName: "Rahul Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Jha — Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in Spring Boot, React, React Native, and AI integration.",
    creator: "@rahuljha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
