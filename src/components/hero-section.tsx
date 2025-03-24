"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-brand-950">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-96 -right-96 w-[800px] h-[800px] rounded-full bg-brand-50 dark:bg-brand-900/50 blur-3xl transition-all duration-1000 ${
            isLoaded ? "opacity-80" : "opacity-0"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-brand-100/80 dark:bg-brand-800/30 blur-3xl transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-70 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-brand-900 dark:text-white mb-6 transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              デザインの力で
              <br />
              ビジネスを変革する
            </h1>
            <p
              className={`text-xl text-brand-600 dark:text-brand-300 mb-10 max-w-xl transition-all duration-700 delay-150 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              私たちは、ブランディングからWebデザイン、パッケージデザインまで、
              クライアントのビジネス課題を解決する包括的なデザインソリューションを提供しています。
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-900 hover:bg-brand-800 text-white font-medium transition-colors dark:bg-brand-100 dark:text-brand-900 dark:hover:bg-white"
              >
                お問い合わせ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-brand-300 hover:bg-brand-50 text-brand-900 font-medium transition-colors dark:border-brand-700 dark:text-white dark:hover:bg-brand-800"
              >
                制作実績を見る
              </Link>
            </div>
          </div>

          {/* 画像とアクセント要素 */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            <div
              className={`relative transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-brand-100 dark:bg-brand-800 rounded-2xl transform rotate-6 shadow-lg"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <ImageWithFallback
                  src="/images/hero/hero-image.jpg"
                  alt="デザインの力でビジネスを変革する"
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-brand-900 dark:bg-brand-100 rounded-full transform shadow-lg"></div>
            </div>

            {/* 装飾テキスト要素 */}
            <div
              className={`absolute bottom-8 left-0 dark:bg-brand-900 px-6 py-4 rounded-lg shadow-lg z-20 max-w-xs transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <p className="text-white font-medium italic">
                We solve problems through design <br />
                and support business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
