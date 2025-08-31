import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rami Atallah | Full Stack Developer",
  description:
    "Rami Atallah's personal website showcasing projects, experience, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} ${GeistMono.className} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
