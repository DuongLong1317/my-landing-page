import type { Metadata } from "next";
import { Manrope, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "vietnamese"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "vietnamese"] });
const plusJakartaSans = Plus_Jakarta_Sans({ variable: "--font-plus-jakarta-sans", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "SHOKUNIN | Premium Kids' F&B Specialist",
  description: "Trang chủ - Chuyên gia F&B Trẻ em",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${manrope.variable} ${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--color-surface)] text-[var(--color-on-surface)] font-body">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
