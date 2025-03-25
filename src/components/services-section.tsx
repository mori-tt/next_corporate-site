"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Palette,
  Globe,
  FileText,
  Package,
  PenTool,
  Brush,
  LucideIcon,
  Feather,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "ブランディング",
    description: "企業の価値を高めるブランド戦略とデザインを提供します。",
    icon: Palette,
  },
  {
    title: "Webデザイン",
    description: "ユーザー体験を重視した、魅力的なWebサイトを制作します。",
    icon: Globe,
  },
  {
    title: "パンフレット制作",
    description: "効果的な情報伝達を実現するパンフレットをデザインします。",
    icon: FileText,
  },
  {
    title: "ロゴデザイン",
    description: "企業の顔となる、印象的なロゴを制作します。",
    icon: Feather,
  },
  {
    title: "パッケージデザイン",
    description: "商品の価値を高めるパッケージデザインを提供します。",
    icon: Package,
  },
  {
    title: "グラフィックデザイン",
    description: "広告やポスターなど、様々な媒体のデザインを手がけます。",
    icon: PenTool,
  },
  {
    title: "イラストレーション",
    description: "オリジナリティあふれるイラストレーションを制作します。",
    icon: Brush,
  },
];

export function ServicesSection() {
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
      className={`py-24 bg-white dark:bg-brand-950 relative overflow-hidden transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      id="services"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-brand-50/80 dark:bg-brand-900/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-100/50 dark:bg-brand-800/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* セクション見出し */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white mb-6 transition-transform duration-700 ease-out ${
              isVisible ? "translate-y-0" : "translate-y-10"
            }`}
          >
            SERVICES
          </h2>
          <p
            className={`text-lg text-brand-600 dark:text-brand-300 transition-transform duration-700 delay-100 ease-out ${
              isVisible ? "translate-y-0" : "translate-y-10"
            }`}
          >
            私たちは多様なデザインサービスを通じて、クライアントのビジネスの成長をサポートします。
            <br />
            ブランディングからWebデザイン、印刷物、空間デザインまで、あらゆるニーズにお応えします。
          </p>
        </div>

        {/* サービスグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-white dark:bg-brand-900 shadow-md hover:shadow-xl p-6 rounded-xl flex flex-col items-center text-center transform hover:-translate-y-1 transition-transform duration-700 delay-${
                index * 100 + 200
              } ease-out ${isVisible ? "translate-y-0" : "translate-y-10"}`}
            >
              <div className="w-16 h-16 mb-4">
                {React.createElement(service.icon, {
                  size: 45,
                  className: "text-brand-600 dark:text-brand-400",
                })}
              </div>
              <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-brand-600 dark:text-brand-300 mb-4 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
