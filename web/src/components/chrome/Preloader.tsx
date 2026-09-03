"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Preloader() {
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onLoad = () => {
      const t = setTimeout(() => setDone(true), reduced ? 0 : 650);
      return () => clearTimeout(t);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, [reduced]);

  return (
    <div id="preloader" className={done ? "done" : ""} aria-hidden="true">
      <div className="pl-box">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/mark.png" alt="" />
        <div className="pl-bar">
          <span />
        </div>
        <div className="pl-tag">SENTINELA100ERRO</div>
      </div>
    </div>
  );
}
