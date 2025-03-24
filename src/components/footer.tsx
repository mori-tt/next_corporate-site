import Link from "next/link";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-50 dark:bg-brand-900 pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-6 text-brand-900 dark:text-white text-center">
              DESIGN STUDIO
            </h3>
            <p className="text-brand-600 dark:text-brand-300 mb-6 text-center">
              モダンなデザインで未来を創造する
              <br />
              デザインスタジオです。
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://instagram.com"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-brand-900 dark:text-white text-center">
              CONTACT
            </h3>
            <address className="not-italic text-brand-600 dark:text-brand-300 text-center">
              <p className="mb-4">
                〒106-0032
                <br />
                東京都港区＊＊＊＊＊＊＊＊＊
                <br />
                ＊＊＊ビル5F
              </p>
              <p className="mb-4 text-center">
                TEL: <a href="tel:03-1234-5678">03-1234-5678</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-brand-200 dark:border-brand-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
              >
                利用規約
              </Link>
              <Link
                href="/sitemap"
                className="text-brand-600 hover:text-brand-900 dark:text-brand-300 dark:hover:text-white transition-colors"
              >
                サイトマップ
              </Link>
            </div>
            <p className="text-brand-500 dark:text-brand-400 text-sm">
              &copy; {new Date().getFullYear()} DESIGN STUDIO. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
