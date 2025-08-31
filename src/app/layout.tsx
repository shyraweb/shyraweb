import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomStyles from "@/components/SharedComponents/CustomStyles";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShyRA Web - AI Website Builder",
  description: "Build stunning websites effortlessly with ShyRA Web, the AI-powered website builder that transforms your ideas into reality in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ShyRA Web - AI Website Builder</title>
        <Script src="https://cdn.tailwindcss.com"></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomStyles />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
