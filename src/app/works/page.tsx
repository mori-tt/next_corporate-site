"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
// 作品データ
const works = [
  {
    id: "work1",
    title: "NATURE BRAND",
    category: "Branding",
    description:
      "自然派化粧品ブランドのトータルブランディング。ロゴ、パッケージ、Webサイトまで一貫したデザインを提供。",
    image: "/images/works/work1.jpg",
  },
  {
    id: "work2",
    title: "TECH COMPANY",
    category: "Web",
    description:
      "最先端技術を提供するIT企業のコーポレートサイト。先進性と安定感を表現したデザイン。",
    image: "/images/works/work2.jpg",
  },
  {
    id: "work3",
    title: "MODERN CAFE",
    category: "Space & Tool",
    description:
      "都心のモダンカフェの空間デザイン。居心地の良さと洗練された雰囲気を両立。",
    image: "/images/works/work3.jpg",
  },
  {
    id: "work4",
    title: "CRAFT BEER",
    category: "Package",
    description:
      "クラフトビールのパッケージデザイン。商品の個性を引き立てるラベルデザイン。",
    image: "/images/works/work4.jpg",
  },
  {
    id: "work5",
    title: "ECO PROJECT",
    category: "Pamphlet",
    description:
      "環境プロジェクトの啓発パンフレット。情報を分かりやすく魅力的に伝えるデザイン。",
    image: "/images/works/work5.jpg",
  },
  {
    id: "work6",
    title: "FASHION BRAND",
    category: "AD",
    description:
      "ファッションブランドの広告キャンペーン。ブランドの世界観を表現した印象的なビジュアル。",
    image: "/images/works/work6.jpg",
  },
  {
    id: "work7",
    title: "ORGANIC FOOD",
    category: "Package",
    description:
      "オーガニック食品のパッケージシリーズ。自然の恵みを感じさせる素材感とデザイン。",
    image: "/images/works/work7.jpg",
  },
  {
    id: "work8",
    title: "MUSIC FESTIVAL",
    category: "DM・Flyer",
    description:
      "音楽フェスティバルのフライヤーとポスター。音楽の躍動感を表現したグラフィック。",
    image: "/images/works/work8.jpg",
  },
  {
    id: "work9",
    title: "HOTEL BRAND",
    category: "Branding",
    description:
      "ラグジュアリーホテルのブランディング。洗練された上質感を表現したロゴとVIデザイン。",
    image: "/images/works/work9.jpg",
  },
  {
    id: "work10",
    title: "MOBILE APP",
    category: "Web",
    description:
      "ライフスタイルアプリのUIデザイン。使いやすさを追求したユーザー体験設計。",
    image: "/images/works/work10.jpg",
  },
  {
    id: "work11",
    title: "PRODUCT MOVIE",
    category: "Movie",
    description:
      "新製品発表用プロモーションビデオ。製品の魅力を伝える映像制作。",
    image: "/images/works/work11.jpg",
  },
  {
    id: "work12",
    title: "POP-UP STORE",
    category: "Space & Tool",
    description:
      "期間限定ポップアップストアのデザイン。話題性を生む体験型空間の創出。",
    image: "/images/works/work12.jpg",
  },
];

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(works.map((work) => work.category))),
  ];
  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* ヒーローセクション */}
      <section className="relative bg-brand-50 dark:bg-brand-800 py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 dark:text-white mb-6">
              OUR WORKS
            </h1>
            <p className="text-xl text-brand-600 dark:text-brand-300">
              私たちが手掛けた様々なプロジェクトをご紹介します。
              クライアントと共に創り上げた作品の一部です。
            </p>
          </div>
        </div>
      </section>

      {/* フィルターセクション */}
      <section className="py-8 bg-white dark:bg-brand-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-900 text-xl "
                    : "bg-white text-brand-600 hover:bg-brand-100 dark:bg-brand-700 dark:text-brand-300 dark:hover:bg-brand-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 作品グリッド */}
      <section className="py-16 bg-white dark:bg-brand-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-brand-900 shadow-lg"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <Link
                        href={`/works/${work.id}`}
                        className="inline-flex items-center text-white"
                      >
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-brand-500 dark:text-brand-400 mb-2">
                    {work.category}
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 dark:text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-300">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-24 bg-brand-50 dark:bg-brand-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-900 dark:text-white mb-6">
              あなたのプロジェクトを始めましょう
            </h2>
            <p className="text-lg text-brand-600 dark:text-brand-300 mb-8">
              私たちと一緒に、次の素晴らしいデザインプロジェクトを創り上げませんか？
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
