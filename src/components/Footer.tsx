import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt={site.name} width={1067} height={480} />
            <p>
              Sociedade gestora de participações sociais. Gestão de carteiras de ações e de
              ativos, com rigor e visão de longo prazo.
            </p>
          </div>
          <div className="footer-col">
            <h5>Contactos</h5>
            <ul>
              <li>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" data-cursor>
                  <address>
                    <span className="strong">Morada</span>
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.postal} {site.address.city}
                  </address>
                </a>
              </li>
              <li style={{ marginTop: "1rem" }}>
                <span className="strong">Telemóvel</span>
                <br />
                <a href={site.phoneHref} data-cursor>
                  {site.phone}
                </a>
              </li>
              <li style={{ marginTop: "1rem" }}>
                <span className="strong">E-mail</span>
                <br />
                <a href={`mailto:${site.email}`} data-cursor>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Navegação</h5>
            <ul className="nav-cols">
              <li>
                <Link href="/#sobre" data-cursor>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/equipa" data-cursor>
                  Equipa
                </Link>
              </li>
              <li>
                <Link href="/#servicos" data-cursor>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#abordagem" data-cursor>
                  Abordagem
                </Link>
              </li>
              <li>
                <Link href="/#processo" data-cursor>
                  Processo
                </Link>
              </li>
              <li>
                <Link href="/perspetivas" data-cursor>
                  Perspetivas
                </Link>
              </li>
              <li>
                <Link href="/contactos" data-cursor>
                  Contactar
                </Link>
              </li>
              <li>
                <Link href="/privacidade" data-cursor>
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="photo-credits">
          Fotografia:{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Bay_of_Lisbon_(aerial_view).jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zinneke
          </a>
          ,{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Baixa_de_Lisboa_-_decora%C3%A7%C3%A3o.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jaime Silva
          </a>{" "}
          ,{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Lisbon_Torre_de_Bel%C3%A9m_BW_2018-10-03_16-33-21.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Berthold Werner
          </a>
          ,{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Frankfurt_Stock_Exchange_(Ank_Kumar)_05.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ank Kumar
          </a>
          ,{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Cloudflare_and_EY_Office_Complex_%E2%80%93_Modern_Architecture_in_Alc%C3%A2ntara,_Lisbon_(54708346011).jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dale Cruse
          </a>{" "}
          e{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Cityscape_Frankfurt_2010_panorama_crop.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thomas Wolf
          </a>
          , via Wikimedia Commons (CC BY-SA / CC BY).
        </p>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} {site.legalName}. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
