import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";

export function ContactBand() {
  return (
    <section className="cta-band" id="contactos">
      <div className="cta-photo" aria-hidden="true">
        <Image
          src="/images/photo-belem-2000.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="bgmark" src="/images/mark-white.png" alt="" aria-hidden="true" />
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow" style={{ color: "var(--muted-2-dark)" }}>
            Fale connosco
          </p>
          <h2>
            Vamos falar sobre a sua <em>carteira</em>.
          </h2>
          <p>
            Marque uma conversa inicial sem compromisso para perceber como a
            SENTINELA100ERRO pode enquadrar-se nos seus objetivos de longo prazo.
          </p>
          <a href={site.phoneHref} className="cta-phone" data-cursor>
            <span className="pre">Tel</span> {site.phone}
          </a>
        </Reveal>

        <Reveal className="contact-card glass-dark">
          <div className="contact-row">
            <span className="contact-label">Morada</span>
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" data-cursor>
              {site.address.street}
              <br />
              {site.address.postal} {site.address.city}
            </a>
          </div>
          <div className="contact-row">
            <span className="contact-label">Telemóvel</span>
            <a href={site.phoneHref} data-cursor>
              {site.phone}
            </a>
          </div>
          <Link href="/contactos" className="contact-map-link" data-cursor>
            <span>Formulário de contacto</span>
            <span className="arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
