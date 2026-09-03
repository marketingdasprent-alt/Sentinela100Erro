"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hide, setHide] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      const y = window.pageYOffset || document.documentElement.scrollTop;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setHide(y > lastY.current && y > 500);
      setProgress(docH > 0 ? (y / docH) * 100 : 0);
      lastY.current = y;
      ticking.current = false;
    }
    function onScrollThrottled() {
      if (!ticking.current) {
        window.requestAnimationFrame(onScroll);
        ticking.current = true;
      }
    }
    window.addEventListener("scroll", onScrollThrottled, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScrollThrottled);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fecha o menu ao navegar
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${hide ? "hide" : ""}`}>
        <div className="wrap header-inner">
          <Link href="/" className="brand-link" data-cursor aria-label="SENTINELA100ERRO — início">
            <Image src="/images/logo.png" alt="SENTINELA100ERRO" width={1067} height={480} priority />
          </Link>
          <nav className="nav" aria-label="Navegação principal">
            <div className="nav-links">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} data-cursor data-active={pathname === item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/contactos" className="cta" data-cursor>
              Contactar
            </Link>
          </nav>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileNav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className="scroll-progress" style={{ width: `${progress}%` }} />
      </header>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`} id="mobileNav">
        <button className="mobile-nav-close" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
          <span />
          <span />
        </button>
        <nav aria-label="Navegação móvel">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contactos" className="mobile-cta">
            Contactar
          </Link>
        </nav>
      </div>
    </>
  );
}
