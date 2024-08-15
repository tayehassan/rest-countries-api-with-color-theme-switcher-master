// "use client";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "@/app/style/globals.css";
import Header from "./components/header";
import { useState } from "react";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: `Where in the world`,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-foreground bg-background- min-h-screen w-screen ${nunito.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
