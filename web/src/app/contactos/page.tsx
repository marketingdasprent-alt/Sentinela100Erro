import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contactos",
  description: `Fale com a ${site.name}. ${site.address.full} · ${site.phone}`,
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  return (
    <section className="page-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="wrap">
        <p className="eyebrow">Contactos</p>
        <h1 className="h-sec" style={{ marginTop: "1rem", marginBottom: "2.4rem" }}>
          Vamos <em>conversar</em>.
        </h1>

        <div className="about-grid" style={{ alignItems: "start", gridTemplateColumns: "1.15fr .85fr" }}>
          <ContactForm />

          <div className="about-aside">
            <div className="kv">
              <span>Morada</span>
              <span style={{ textAlign: "right" }}>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" data-cursor>
                  {site.address.street}, {site.address.postal} {site.address.city}
                </a>
              </span>
            </div>
            <div className="kv">
              <span>Telemóvel</span>
              <span style={{ textAlign: "right" }}>
                <a href={site.phoneHref} data-cursor>
                  {site.phone}
                </a>
              </span>
            </div>
            <div className="kv">
              <span>E-mail</span>
              <span style={{ textAlign: "right" }}>
                <a href={`mailto:${site.email}`} data-cursor>
                  {site.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
