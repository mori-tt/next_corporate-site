import ImageWithFallback from "@/components/ImageWithFallback";
import React from "react";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* ヒーローセクション */}
      <section className="relative bg-brand-50 dark:bg-brand-800 py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-900 dark:text-white mb-6">
              ABOUT US
            </h1>
            <p className="text-xl text-brand-600 dark:text-brand-300">
              デザインの力で社会をより良くする。
              <br />
              私たちのストーリーをご紹介します。
            </p>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 bg-white dark:bg-brand-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-8">
                私たちについて
              </h2>
              <div className="space-y-6 text-lg text-brand-600 dark:text-brand-300">
                <p>
                  株式会社デザインスタジオは、「デザインの力で社会をより良くする」というミッションのもと、2015年に創業したデザイン会社です。
                </p>
                <p>
                  ブランディングからWebデザイン、印刷物、パッケージ、広告、空間デザインまで、幅広いデザインサービスを提供し、クライアントのビジネスを成功に導くデザインパートナーとして、数多くのプロジェクトを成功に導いてきました。
                </p>
                <p>
                  私たちは単にモノをデザインするのではなく、企業やブランドの本質を理解し、その価値を最大限に引き出すデザインを提供することを大切にしています。クライアントとの対話を通じて、ビジネス課題を深く理解し、創造的かつ戦略的なデザインソリューションを提案します。
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
              <ImageWithFallback
                src="/images/about/about-1.jpg"
                alt="株式会社デザインスタジオについて"
                className="w-full h-full object-cover rounded-xl"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ビジョン・ミッションセクション */}
      <section className="py-24 bg-brand-50 dark:bg-brand-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-6">
              ビジョン・ミッション
            </h2>
            <p className="text-lg text-brand-600 dark:text-brand-300">
              私たちが大切にしている価値観をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-brand-900 p-10 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-6">
                ビジョン
              </h3>
              <p className="text-lg text-brand-600 dark:text-brand-300 mb-6">
                デザインを通じて、人々の生活を豊かにし、社会に新たな価値を創造する
              </p>
              <ul className="space-y-4 text-brand-600 dark:text-brand-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>美しさと機能性を兼ね備えたデザインを提供する</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>常に新しい表現方法やテクノロジーを探求する</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>デザインの力でビジネスと社会の発展に貢献する</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-brand-900 p-10 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-brand-900 dark:text-white mb-6">
                ミッション
              </h3>
              <p className="text-lg text-brand-600 dark:text-brand-300 mb-6">
                クライアントとユーザーの架け橋となり、双方に価値をもたらすデザインを創造する
              </p>
              <ul className="space-y-4 text-brand-600 dark:text-brand-300">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    クライアントのビジネス目標を深く理解し、最適なデザインソリューションを提供する
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    ユーザー体験を最優先し、使いやすく魅力的なデザインを実現する
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>
                    持続可能な社会を意識し、環境に配慮したデザイン提案を心がける
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 会社沿革セクション */}
      <section className="py-24 bg-white dark:bg-brand-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-12 text-center">
              会社沿革
            </h2>

            <div className="space-y-12">
              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2015年4月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      株式会社デザインスタジオ設立。東京・渋谷にオフィスを開設。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block md:order-3"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900 md:order-2">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg md:order-1">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2017年9月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      事業拡大に伴い、東京・六本木に本社を移転。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2019年5月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      デザインアワードにて最優秀賞を受賞。全国的な知名度を獲得。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block md:order-3"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900 md:order-2">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg md:order-1">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2020年4月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      オンラインデザインサービスを開始。リモートワーク体制を確立。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 bottom-0 left-[calc(50%-1px)] w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2022年7月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      社員数30名を突破。大阪にサテライトオフィスを開設。
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute top-0 left-[calc(50%-1px)] h-1/2 w-0.5 bg-brand-200 dark:bg-brand-700"></div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4">
                  <div className="hidden md:block md:order-3"></div>
                  <div className="absolute left-0 md:static flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-800 border-4 border-white dark:border-brand-900 md:order-2">
                    <div className="w-2 h-2 rounded-full bg-brand-900 dark:bg-white"></div>
                  </div>
                  <div className="bg-brand-50 dark:bg-brand-800 p-6 rounded-lg md:order-1">
                    <div className="font-bold text-brand-900 dark:text-white text-xl mb-2">
                      2023年10月
                    </div>
                    <p className="text-brand-600 dark:text-brand-300">
                      六本木ヒルズ森タワーに本社を移転。デザイン教育プログラムを開始。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className="py-24 bg-brand-50 dark:bg-brand-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-900 dark:text-white mb-12 text-center">
              会社概要
            </h2>

            <div className="bg-white dark:bg-brand-900 rounded-xl p-8 shadow-sm">
              <dl className="divide-y divide-brand-200 dark:divide-brand-700">
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    会社名
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    株式会社デザインスタジオ
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    設立
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    2022年4月1日
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    代表者
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    代表取締役 ＊＊ ＊＊
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    資本金
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    1,000万円
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    所在地
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    〒106-0032
                    <br />
                    東京都港区＊＊＊＊＊＊＊＊＊
                    <br />
                    ＊＊＊ビル5F
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    連絡先
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    TEL: 03-1234-5678
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    事業内容
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>グラフィックデザイン</li>
                      <li>Webデザイン・開発</li>
                      <li>ブランディング</li>
                      <li>パッケージデザイン</li>
                      <li>広告制作</li>
                      <li>空間デザイン</li>
                      <li>デザインコンサルティング</li>
                    </ul>
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    従業員数
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    35名（2023年12月現在）
                  </dd>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] py-4">
                  <dt className="font-medium text-brand-900 dark:text-white">
                    主要取引先
                  </dt>
                  <dd className="text-brand-600 dark:text-brand-300 md:mt-0">
                    大手企業、中小企業、スタートアップ、官公庁、教育機関など
                    <br />
                    ※取引先企業の意向により個社名は非公開
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
