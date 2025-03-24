import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Work {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export const works: Work[] = [
  {
    id: "work1",
    title: "ブランディングプロジェクト",
    description:
      "企業のブランド価値を高める包括的なブランディングプロジェクト。",
    category: "ブランディング",
    image: "/images/works/work1.jpg",
  },
  {
    id: "work2",
    title: "Webサイトリニューアル",
    description: "モダンで使いやすいWebサイトのデザインと実装。",
    category: "Webデザイン",
    image: "/images/works/work2.jpg",
  },
  {
    id: "work3",
    title: "パンフレットデザイン",
    description: "商品の魅力を伝えるパンフレットのデザイン。",
    category: "グラフィックデザイン",
    image: "/images/works/work3.jpg",
  },
  {
    id: "work4",
    title: "パッケージデザイン",
    description: "商品の価値を高めるパッケージデザイン。",
    category: "パッケージデザイン",
    image: "/images/works/work4.jpg",
  },
  {
    id: "work5",
    title: "広告デザイン",
    description: "目を引く広告デザインの制作。",
    category: "グラフィックデザイン",
    image: "/images/works/work5.jpg",
  },
  {
    id: "work6",
    title: "ロゴデザイン",
    description: "企業の顔となるロゴのデザイン。",
    category: "ブランディング",
    image: "/images/works/work6.jpg",
  },
];

export function WorksSection() {
  return (
    <section className="py-24 bg-white dark:bg-brand-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-12 text-center">
          実績
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div
              key={work.id}
              className="bg-white dark:bg-brand-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-video bg-brand-100 dark:bg-brand-800 flex items-center justify-center">
                <span className="text-brand-600 dark:text-brand-300">
                  {work.title}の画像
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">
                  {work.title}
                </h3>
                <p className="text-brand-600 dark:text-brand-300 mb-4">
                  {work.description}
                </p>
                <div className="p-6 text-white">
                  <Link
                    href={`/works/${work.id}/`}
                    className="inline-flex items-center text-white"
                  >
                    詳細を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
