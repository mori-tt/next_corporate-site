"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export function CompanySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // スクロールアニメーション
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-brand-50 dark:bg-brand-900 relative overflow-hidden transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="company"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-brand-100/50 dark:bg-brand-800/20"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] rounded-full bg-brand-100/30 dark:bg-brand-800/10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* テキストコンテンツ */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white mb-6 transition-transform duration-700 ease-out ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              ABOUT US
            </h2>
            <p
              className={`text-lg text-brand-600 dark:text-brand-300 mb-8 transition-transform duration-700 delay-100 ease-out ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              2015年の設立以来、私たちは「デザインの力で社会をより良くする」という理念のもと、
              ブランディングからWebデザイン、印刷物、パッケージまで幅広いデザインサービスを提供してきました。
              <br />
              <br />
              クライアントの課題に真摯に向き合い、最適なデザインソリューションを提供することで、
              ビジネスの成長と成功をサポートしています。
            </p>

            {/* 会社概要 */}
            <dl
              className={`grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-x-6 gap-y-4 mb-10 transition-transform duration-700 delay-200 ease-out ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              <dt className="font-bold text-brand-900 dark:text-white">
                会社名
              </dt>
              <dd className="text-brand-600 dark:text-brand-300">
                株式会社デザインスタジオ
              </dd>

              <dt className="font-bold text-brand-900 dark:text-white">設立</dt>
              <dd className="text-brand-600 dark:text-brand-300">2015年4月</dd>

              <dt className="font-bold text-brand-900 dark:text-white">代表</dt>
              <dd className="text-brand-600 dark:text-brand-300">＊＊ ＊＊</dd>

              <dt className="font-bold text-brand-900 dark:text-white">
                所在地
              </dt>
              <dd className="text-brand-600 dark:text-brand-300">
                東京都港区＊＊＊＊＊＊
              </dd>

              <dt className="font-bold text-brand-900 dark:text-white">
                事業内容
              </dt>
              <dd className="text-brand-600 dark:text-brand-300">
                ブランディング、Webデザイン、グラフィックデザイン、パッケージデザイン、空間デザイン
              </dd>
            </dl>

            {/* 詳細リンク */}
            <div
              className={`transition-transform duration-700 delay-300 ease-out ${
                isVisible ? "translate-y-0" : "translate-y-10"
              }`}
            >
              <Link
                href="/about"
                className="inline-flex items-center text-brand-900 dark:text-brand-100 hover:text-brand-700 dark:hover:text-white font-medium"
              >
                会社情報の詳細を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* 画像セクション */}
          <div
            className={`relative h-[500px] transition-transform duration-1000 delay-400 ${
              isVisible ? "translate-x-0" : "translate-x-20"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-100/80 to-brand-200/50 dark:from-brand-800/50 dark:to-brand-700/30 rounded-2xl"></div>
              <ImageWithFallback
                src="/images/company/office-image.jpg"
                alt="デザインスタジオのオフィス"
                className="w-full h-full object-cover object-center rounded-2xl"
                width={800}
                height={600}
              />
            </div>

            {/* 装飾要素 */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-900 dark:bg-brand-100 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
