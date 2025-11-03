import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";




export const metadata: Metadata = {
  title: "Xyra – Portfolio",
  description: "Modern, minimal, sleek design portfolio for Xyra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/pp-neue-montreal" rel="stylesheet"></link>
      </head>
      <body className= "PP">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
