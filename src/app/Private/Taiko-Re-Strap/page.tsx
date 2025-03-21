import articleData from "public/Article/trs.json";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ImageWithAlt } from "@/components/image-with-alt";

export const metadata: Metadata = {
  title: "Taiko-Re-Strap｜ryota-space",
  description: "Taiko-Re-Strapの概要ページ",
  appleWebApp: true,
};

export default function ProjectPage() {
  return (
    <div className="px-5 py-8">
      <div className="w-full max-w-5xl justify-center mx-auto">
        <ImageWithAlt
          className="rounded-2xl w-full"
          src="/Taiko-Re-Strap.webp"
          alt="Taiko-Re-Strap"
          width={1920}
          height={1080}
        />
        <article className="mt-7 mb-7 pb-2 border-b-2 border-slate-500/30">
          <h1 className="font-bold sm:text-4xl sd:text-3xl text-2xl">
            {articleData.title}
          </h1>

          <div className="flex flex-row mt-1 gap-1 leading-7 text-gray-500">
            <CalendarDays width={20} hanging={20} />
            <p>{articleData.date}</p>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            <Badge
              variant="outline"
              className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              C#
            </Badge>
            <Badge
              variant="outline"
              className="bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 shadow-sm"
            >
              .NET Framework
            </Badge>
          </div>
        </article>

        {Object.entries(articleData.content).map(
          ([sectionTitle, sectionContent]) => (
            <article key={sectionTitle}>
              <div className="border-l-4 border-indigo-500">
                <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">
                  {sectionTitle}
                </h3>
              </div>
              <p className="leading-7">{sectionContent}</p>
            </article>
          )
        )}

        <article>
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">デモ動画</h3>
          </div>
          <div className="px-5">
            <iframe
              className="aspect-video w-full rounded-2xl"
              src="https://www.youtube.com/embed/lHob7eKV1a8"
            ></iframe>
          </div>
        </article>

        <article>
          <div className="border-l-4 border-indigo-500">
            <h3 className="font-bold text-2xl mt-5 mb-5 ps-2">参考リンク</h3>
          </div>
          <ul className="leading-8">
            {Object.entries(articleData.links).map(([text, url]) => (
              <li key={url}>
                <a
                  className="font-mono text-indigo-400 font-bold after:content-['_↗'] hover:underline decoration-indigo-500"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
