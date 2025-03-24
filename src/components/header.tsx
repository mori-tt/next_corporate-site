"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white/80 dark:bg-brand-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-brand-900 dark:text-white"
          >
            DESIGN STUDIO
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
            >
              会社概要
            </Link>
            <Link
              href="/works"
              className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
            >
              実績
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a
                  href={process.env.GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせ
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="tel:03-1234-5678">03-1234-5678</a>
              </Button>
            </div>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden text-brand-600 dark:text-brand-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white dark:bg-brand-900 z-[1100] absolute left-0 right-0 top-20 shadow-lg">
            <nav className="flex flex-col space-y-4 text-center">
              <Link
                href="/"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
              >
                ホーム
              </Link>
              <Link
                href="/about"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
              >
                会社概要
              </Link>
              <Link
                href="/works"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white"
              >
                実績
              </Link>
              <Button variant="outline" className="w-full" asChild>
                <a
                  href={process.env.GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  お問い合わせ
                </a>
              </Button>
              <Button variant="secondary" className="w-full" asChild>
                <a href="tel:03-1234-5678">03-1234-5678</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
