import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre" className="block">
      <div className="wrap">
        <p className="eyebrow">Quem somos</p>
        <Reveal as="p" className="statement" style={{ marginTop: "1.4rem" }}>
          Uma gestora dedicada a <span className="hl">participações sociais</span> e a{" "}
          <span className="hl">carteiras de ações</span>, com disciplina e foco no valor.
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-photo">
            <Image
              src="/images/photo-about-1100.jpg"
              alt="Pormenor arquitetónico em Lisboa"
              fill
              sizes="(max-width: 900px) 90vw, 480px"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </Reveal>
          <Reveal className="about-aside">
            <p style={{ marginBottom: "1.4rem" }}>
              A SENTINELA100ERRO é uma sociedade gestora de participações sociais, orientada
              para a valorização criteriosa e sustentável dos ativos que gere.
            </p>
            <div className="kv">
              <span>Setor</span>
              <span>Gestão de ativos</span>
            </div>
            <div className="kv">
              <span>Tipologia</span>
              <span>SGPS</span>
            </div>
            <div className="kv">
              <span>Sede</span>
              <span>Lisboa, PT</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
