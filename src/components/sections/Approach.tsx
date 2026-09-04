"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type Principle = {
  key: string;
  title: string;
  text: string;
  textLong: string;
  icon: ReactNode;
};

function PrincipleItem({
  p,
  isOpen,
  onToggle,
}: {
  p: Principle;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    if (!isOpen || !bodyRef.current) return;
    const el = bodyRef.current;
    const measure = () => setMaxHeight(el.scrollHeight);
    measure();
    // recalcula se o texto reflui por causa de um resize da janela
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isOpen]);

  return (
    <li className={isOpen ? "open" : ""}>
      <button
        className="principle-head"
        aria-expanded={isOpen}
        aria-controls={`principle-${p.key}`}
        onClick={onToggle}
      >
        <span className="principle-ico" aria-hidden="true">
          <svg viewBox="0 0 24 24">{p.icon}</svg>
        </span>
        <h4>{p.title}</h4>
        <span className="principle-toggle" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className="principle-body-wrap"
        id={`principle-${p.key}`}
        style={{ maxHeight: isOpen ? maxHeight : 0 }}
      >
        <div className="principle-body" ref={bodyRef}>
          <p>{p.textLong}</p>
        </div>
      </div>
    </li>
  );
}

const PRINCIPLES: Principle[] = [
  {
    key: "rigor",
    title: "Rigor analítico",
    text: "Decisões fundamentadas em análise profunda e critérios consistentes.",
    textLong:
      "Cada decisão de investimento nasce de uma análise fundamentada, não de intuição ou de tendência de mercado. Aplicamos critérios consistentes e documentados a cada oportunidade, para que a convicção numa posição resista ao escrutínio — incluindo o nosso próprio, passado o entusiasmo inicial.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    key: "transparencia",
    title: "Transparência",
    text: "Comunicação clara e uma relação de confiança em todas as fases.",
    textLong:
      "Mantemos uma comunicação clara sobre o que fazemos, porque o fazemos, e como isso se reflete nos resultados — mesmo quando esses resultados não são os esperados. A confiança constrói-se ao longo do tempo, não com uma única boa notícia.",
    icon: (
      <>
        <path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    key: "visao",
    title: "Visão de longo prazo",
    text: "Valor sustentável acima do ruído de curto prazo do mercado.",
    textLong:
      "Medimos sucesso em anos, não em trimestres. Isso permite-nos atravessar ciclos de volatilidade sem sacrificar posições com fundamentais sólidos só porque o mercado, no curto prazo, discorda de nós.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2.2 5.2-5.2 2.2 2.2-5.2z" />
      </>
    ),
  },
  {
    key: "risco",
    title: "Gestão de risco",
    text: "Proteção do capital através de disciplina e monitorização contínua.",
    textLong:
      "Antes de perguntar quanto se pode ganhar, perguntamos quanto se pode perder — e em que condições. Essa disciplina protege o capital que sustenta todas as decisões seguintes, e é o que nos permite manter posições convictas durante mais tempo.",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

const GAUGES = [
  { key: "rigor", label: "Rigor", cls: "gauge-arc-1" },
  { key: "transparencia", label: "Transparência", cls: "gauge-arc-2" },
  { key: "visao", label: "Visão", cls: "gauge-arc-3" },
  { key: "risco", label: "Risco", cls: "gauge-arc-4" },
] as const;

export function Approach() {
  const [open, setOpen] = useState<string | null>("rigor");

  return (
    <section id="abordagem" className="block approach">
      <div className="wrap split">
        <Reveal>
          <p className="eyebrow">A nossa abordagem</p>
          <h2 className="h-sec">
            Princípios que orientam cada <em>decisão</em>.
          </h2>
          <ul className="principles">
            {PRINCIPLES.map((p) => (
              <PrincipleItem
                key={p.key}
                p={p}
                isOpen={open === p.key}
                onToggle={() => setOpen(open === p.key ? null : p.key)}
              />
            ))}
          </ul>
        </Reveal>
        <Reveal className="approach-visual" aria-hidden="true">
          <div className="dash-head">
            <span className="dash-dot" />
            <span>Ecossistema de decisão</span>
          </div>
          <Reveal stagger className="gauges">
            {GAUGES.map((g) => {
              const principle = PRINCIPLES.find((p) => p.key === g.key)!;
              return (
                <div className="gauge" key={g.key}>
                  <div className="gauge-ring">
                    <svg viewBox="0 0 80 80">
                      <circle className="gauge-trail" cx="40" cy="40" r="34" />
                      <circle className={`gauge-arc ${g.cls}`} cx="40" cy="40" r="34" />
                    </svg>
                    <div className="gauge-ico">
                      <svg viewBox="0 0 24 24">{principle.icon}</svg>
                    </div>
                  </div>
                  <span>{g.label}</span>
                </div>
              );
            })}
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
