import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/content/insights";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/perspetivas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/perspetivas/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function InsightPage(props: PageProps<"/perspetivas/[slug]">) {
  const { slug } = await props.params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article>
      <section className="article-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap">
          <Link href="/perspetivas" className="article-back" data-cursor>
            ← Perspetivas
          </Link>
          <span className="insight-tag">{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>
              {new Date(post.date).toLocaleDateString("pt-PT", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="article-body">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
