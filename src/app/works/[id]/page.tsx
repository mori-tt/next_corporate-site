import { works } from "@/components/works-section";
import ImageWithFallback from "@/components/ImageWithFallback";

// 静的生成設定
export const dynamic = "force-static";
export const revalidate = false;

// 動的ルートの静的パラメータを生成
export function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

export default function WorkDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-brand-900 dark:text-white mb-4">
            実績が見つかりませんでした
          </h1>
          <p className="text-brand-600 dark:text-brand-300">
            お探しの実績は存在しないか、移動または削除された可能性があります。
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-brand-900 dark:text-white mb-8">
          {work.title}
        </h1>
        <div className="mb-8">
          <ImageWithFallback
            src={work.image}
            alt={`${work.title}の画像`}
            width={800}
            height={450}
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
        <div className="prose prose-brand dark:prose-invert max-w-none">
          <p>{work.description}</p>
        </div>
      </div>
    </div>
  );
}
