import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";

const poppins = localFont({
  src: [
    {
      path: "./font/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/Poppins-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./font/Poppins-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./font/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "ExtraBold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Obito | Online Course",
  description: "The Best Online Course All Of Time In The World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins} antialiased `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
