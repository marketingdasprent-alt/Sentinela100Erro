import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";

const SERVICES = [
  {
    slug: "equity",
    title: "Carteiras de ações",
    text: "Construção e acompanhamento de carteiras de equity, com seleção criteriosa e gestão de risco contínua.",
    photo: "/images/services/equity-1000.jpg",
    photoAlt: "Painel de cotações de uma bolsa de valores",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 17l5-5 4 3 6-7" />
        <path d="M14 8h4v4" />
      </svg>
    ),
  },
  {
    slug: "social",
    title: "Participações sociais",
    text: "Gestão de participações não financeiras, com foco na valorização de longo prazo e numa governação sólida.",
    photo: "/images/services/social-1000.jpg",
    photoAlt: "Edifício de escritórios moderno em Lisboa",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    slug: "assets",
    title: "Gestão de ativos",
    text: "Alocação disciplinada e monitorização permanente, alinhando cada decisão com objetivos claros e mensuráveis.",
    photo: "/images/services/assets-1000.jpg",
    photoAlt: "Vista panorâmica de um centro financeiro",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="block-head">
          <p className="eyebrow">O que fazemos</p>
          <h2 className="h-sec">
            Áreas de <em>atuação</em>
          </h2>
        </div>

        <Reveal stagger className="cards">
          {SERVICES.map((s) => (
            <TiltCard className="card" key={s.slug}>
              <div className="card-photo">
                <Image src={s.photo} alt={s.photoAlt} fill sizes="(max-width: 920px) 100vw, 33vw" loading="lazy" />
              </div>
              <div className="card-body">
                <div className="ico" aria-hidden="true">
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </TiltCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
