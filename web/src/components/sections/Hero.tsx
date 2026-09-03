"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const LINES = [
  ["Gestão de ativos"],
  ["com ", { em: true, text: "rigor" }, " e"],
  [{ thin: true, text: "visão" }, " de futuro."],
] as const;

export function Hero() {
  const markRef = useRef<HTMLImageElement | null>(null);
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- dispara a animação só após hidratação
    setMounted(true);
  }, []);

  useEffect(() => {
    if (reduced) return;
    function onScroll() {
      const y = window.pageYOffset;
      if (markRef.current) {
        markRef.current.style.transform = `translateY(calc(-50% + ${y * 0.12}px)) rotate(${y * 0.01}deg)`;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [reduced]);

  return (
    <section className="hero" id="top">
      <div className="hero-photo" aria-hidden="true">
        <Image
          src="/images/photo-hero-bg-2000.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <svg className="hero-chart" viewBox="0 0 1200 500" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" style={{ stopColor: "var(--accent-a)" }} />
            <stop offset="100%" style={{ stopColor: "var(--accent-b)" }} />
          </linearGradient>
        </defs>
        <path
          className="chart-line chart-line-1"
          d="M0,360 C150,300 250,340 350,280 C450,220 550,260 650,200 C750,140 850,180 950,120 C1050,70 1150,110 1200,60"
        />
        <path
          className="chart-line chart-line-2"
          d="M0,420 C150,400 250,410 350,360 C450,320 550,340 650,290 C750,250 850,270 950,220 C1050,190 1150,210 1200,170"
        />
        <path
          className="chart-line chart-line-3"
          d="M0,460 C150,455 250,445 350,430 C450,415 550,400 650,380 C750,360 850,340 950,315 C1050,295 1150,280 1200,260"
        />
      </svg>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="hero-mark" ref={markRef} src="/images/mark.png" alt="" aria-hidden="true" />

      <div className="wrap hero-inner">
        <Reveal className="hero-top">
          <span className="status-pill">
            <span className="dot" />
            Gestão de ativos com rigor
          </span>
        </Reveal>

        <h1>
          {LINES.map((line, i) => (
            <span className={`line-mask ${mounted ? "in" : ""}`} key={i}>
              <span>
                {line.map((part, j) =>
                  typeof part === "string" ? (
                    part
                  ) : "em" in part ? (
                    <em className="grad" key={j}>
                      {part.text}
                    </em>
                  ) : (
                    <span className="thin" key={j}>
                      {part.text}
                    </span>
                  )
                )}
              </span>
            </span>
          ))}
        </h1>

        <Reveal as="p" className="hero-sub">
          A SENTINELA100ERRO gere carteiras de ações e participações sociais com
          disciplina e uma perspetiva orientada para o valor de longo prazo.
        </Reveal>

        <Reveal className="hero-actions">
          <Link href="/contactos" className="btn btn-primary" data-cursor>
            <span className="lbl">Fale connosco</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
          <a href={site.phoneHref} className="btn btn-ghost" data-cursor>
            <span className="lbl">Ligar agora</span>
          </a>
        </Reveal>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </section>
  );
}
