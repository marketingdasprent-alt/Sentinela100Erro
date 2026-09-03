"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || reduced) return;
    if (!window.matchMedia("(hover:hover)").matches) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    };
    document.addEventListener("mousemove", onMove);

    function loop() {
      if (!document.hidden) {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        if (ring) ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    // delegação de eventos (em vez de listeners por elemento) — assim continua a
    // funcionar depois de navegação client-side, quando novos [data-cursor]
    // aparecem sem este efeito voltar a correr (o layout não remonta)
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.("[data-cursor]")) ring.classList.add("hot");
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.closest?.("[data-cursor]")) ring.classList.remove("hot");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <>
      <div id="cursor-ring" ref={ringRef} />
      <div id="cursor" ref={dotRef} />
    </>
  );
}
