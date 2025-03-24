import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 動的データを取得してメタディスクリプションおよびfaviconを設定
export async function generateMetadata(): Promise<Metadata> {
  // ここで外部APIやファイルからmeta descriptionを取得することも可能です。
  const dynamicDescription =
    "ブランディング、Web、パンフレット、パッケージ、広告など幅広いデザインサービスを提供する東京のデザインスタジオです。";
  return {
    title: "DESIGN STUDIO | モダンなデザインで未来を創造する",
    description: dynamicDescription,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
