"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  stagger?: boolean;
  style?: React.CSSProperties;
  [key: `aria-${string}`]: unknown;
};

/**
 * Replica o comportamiento de [data-reveal] / [data-reveal-stagger] do site
 * estático original: observa a interseção com o viewport e adiciona a classe
 * "in", que o globals.css usa para animar a entrada. O CSS já trata
 * prefers-reduced-motion (mostra tudo sem animação), por isso aqui não é
 * preciso duplicar essa lógica.
 */
export function Reveal({ children, as, className = "", stagger = false, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- feature detection, só no cliente
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const attr = stagger ? { "data-reveal-stagger": "" } : { "data-reveal": "" };

  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? "in" : ""}`.trim()}
      style={style}
      {...attr}
      {...rest}
    >
      {children}
    </Tag>
  );
}
