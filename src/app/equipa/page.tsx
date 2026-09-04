import type { Metadata } from "next";
import { Team } from "@/components/sections/Team";

export const metadata: Metadata = {
  title: "Equipa",
  description: "Conheça a equipa da SENTINELA100ERRO.",
  alternates: { canonical: "/equipa" },
};

export default function EquipaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow">Quem lidera</p>
          <h1 className="h-sec" style={{ marginTop: "1rem" }}>
            Uma equipa <em>experiente</em>.
          </h1>
        </div>
      </section>
      <Team variant="full" />
    </>
  );
}
