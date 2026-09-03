import type { Metadata } from "next";
import { Insights } from "@/components/sections/Insights";

export const metadata: Metadata = {
  title: "Perspetivas",
  description: "Como a SENTINELA100ERRO pensa o mercado, a governação e a gestão de risco.",
  alternates: { canonical: "/perspetivas" },
};

export default function PerspetivasPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">Perspetivas</p>
          <h1 className="h-sec" style={{ marginTop: "1rem" }}>
            Como <em>pensamos</em> o mercado.
          </h1>
        </div>
      </section>
      <Insights variant="full" />
    </>
  );
}
