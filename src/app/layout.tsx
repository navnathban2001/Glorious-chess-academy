import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Glorious Chess Academy | Professional Online Chess Training",
  description: "Nurturing excellence through precision and strategic discipline. Join the elite circle of chess players with FIDE rated coaches. Online lessons for all skill levels.",
  icons: {
    icon: "/logo.png", // favicon
  },
};
import WhatsAppButton from "@/components/whatsapp-button";
import SplashScreen from "@/components/splash-screen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
