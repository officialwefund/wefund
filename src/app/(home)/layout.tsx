import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import { SolanaWalletProvider } from "@/components/WalletProvider";
import Header from "@/components/Header";
import GlowingCursor from "@/components/GlowingCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wefund",
  description: "The paper trading playground for meme traders. Trade. Shill. Compete — with demo money.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SolanaWalletProvider>
          <GlowingCursor />
      <Header />
        {children}
        <Footer />
        </SolanaWalletProvider>
      </body>
    </html>
  );
}
