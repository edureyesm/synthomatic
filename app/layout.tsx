import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Synthomatic UI",
  description:
    "Your Playground for Crafting Dynamic, Customizable, and Accessible UI Components. Explore a rich collection of responsive design elements, powered by React Aria, Radix UI, Framer Motion and Tailwind CSS. Elevate your design journey with animations, seamless responsiveness, and top-tier accessibility for both web and mobile experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
