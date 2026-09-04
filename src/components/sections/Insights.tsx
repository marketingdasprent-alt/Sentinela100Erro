import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { insights } from "@/content/insights";

const GRAPHICS = [
  "M0,45 C30,40 40,20 70,25 C100,30 110,10 140,12 C160,13 180,5 200,3",
  "M0,20 C25,35 45,45 70,38 C95,31 110,15 140,22 C165,28 180,18 200,30",
  "M0,10 C20,10 30,40 55,42 C80,44 90,18 115,20 C140,22 155,48 200,50",
];

export function Insights({ variant = "home" }: { variant?: "home" | "full" }) {
  const items = variant === "home" ? insights.slice(0, 3) : insights;

  return (
    <section id="insights" className="block" style={{ paddingTop: variant === "home" ? 0 : undefined }}>
      <div className="wrap">
        {variant === "home" && (
          <div className="block-head">
            <p className="eyebrow">Perspetivas</p>
            <h2 className="h-sec">
              Como <em>pensamos</em> o mercado.
            </h2>
          </div>
        )}
        <Reveal stagger className="insight-grid">
          {items.map((post, i) => (
            <Link href={`/perspetivas/${post.slug}`} className="insight-card" key={post.slug} data-cursor>
              <div className="insight-graphic">
                <svg viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path d={GRAPHICS[i % GRAPHICS.length]} />
                </svg>
              </div>
              <span className="insight-tag">{post.tag}</span>
              <h4>{post.title}</h4>
              <p>{post.excerpt}</p>
              <span className="insight-meta">
                {new Date(post.date).toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric" })}
                {" · "}
                {post.readTime}
              </span>
            </Link>
          ))}
        </Reveal>
        {variant === "home" && (
          <p className="section-note">
            <Link href="/perspetivas" data-cursor style={{ textDecoration: "underline" }}>
              Ver todas as perspetivas →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
