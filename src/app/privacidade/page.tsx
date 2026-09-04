import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Política de privacidade do site da ${site.name}.`,
  alternates: { canonical: "/privacidade" },
  robots: { index: false, follow: true },
};

export default function PrivacidadePage() {
  return (
    <section className="block legal wrap" style={{ maxWidth: "74ch", paddingTop: "calc(120px + 2rem)" }}>
      <h1 className="h-sec">Política de Privacidade</h1>
      <p className="section-note" style={{ textAlign: "left", marginBottom: "2.5rem" }}>
        Última atualização: setembro de 2026
      </p>

      <p style={{ marginBottom: "1.4rem" }}>
        A {site.legalName} (&quot;{site.name}&quot;, &quot;nós&quot;) respeita a privacidade de
        quem visita este site e cumpre o Regulamento Geral sobre a Proteção de Dados (RGPD).
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        1. Responsável pelo tratamento
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>
        {site.legalName}, com sede na {site.address.full}. Contacto:{" "}
        <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>
          {site.email}
        </a>
        .
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        2. Dados recolhidos
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>
        Recolhemos os dados que preencher voluntariamente no formulário de contacto
        (nome, e-mail e o teor da mensagem), com a finalidade exclusiva de responder ao
        seu pedido. Não recolhemos dados através de cookies de rastreamento.
      </p>
      <p style={{ marginBottom: "1.4rem" }}>
        Utilizamos um serviço de analítica sem cookies e sem recolha de dados
        pessoais (Plausible), que não identifica visitantes individuais e não
        requer consentimento sob o RGPD/ePrivacy.
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        3. Base legal e finalidade
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>
        O tratamento de dados submetidos através do formulário de contacto assenta no
        seu consentimento explícito ao submeter o formulário, com a finalidade de
        responder ao seu pedido de informação.
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        4. Conservação dos dados
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>
        Os dados de contacto são conservados apenas durante o tempo necessário para
        dar resposta ao pedido, ou pelo prazo exigido por obrigações legais aplicáveis.
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        5. Partilha com terceiros
      </h2>
      <p style={{ marginBottom: "1.4rem" }}>
        Não vendemos nem partilhamos os seus dados pessoais com terceiros para fins de
        marketing. O envio do formulário de contacto é processado através de um
        prestador de serviços de envio de e-mail transacional (Resend), apenas como
        subcontratante técnico.
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        6. Os seus direitos
      </h2>
      <p style={{ marginBottom: ".6rem" }}>Nos termos do RGPD, tem direito a:</p>
      <ul style={{ paddingLeft: "1.3rem", marginBottom: "1.4rem" }}>
        <li style={{ marginBottom: ".4rem" }}>Aceder aos dados pessoais que detemos sobre si;</li>
        <li style={{ marginBottom: ".4rem" }}>Solicitar a retificação de dados incorretos ou incompletos;</li>
        <li style={{ marginBottom: ".4rem" }}>Solicitar o apagamento dos seus dados;</li>
        <li style={{ marginBottom: ".4rem" }}>Opor-se ao tratamento ou solicitar a sua limitação;</li>
        <li style={{ marginBottom: ".4rem" }}>
          Apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD).
        </li>
      </ul>
      <p style={{ marginBottom: "1.4rem" }}>
        Para exercer qualquer um destes direitos, contacte-nos através de{" "}
        <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>
          {site.email}
        </a>
        .
      </p>

      <h2 style={{ marginTop: "2.2rem", marginBottom: ".8rem", fontSize: "1.15rem", fontWeight: 800 }}>
        7. Alterações a esta política
      </h2>
      <p>
        Esta política pode ser atualizada à medida que o site e os serviços evoluem. A
        data da última atualização é indicada no topo desta página.
      </p>
    </section>
  );
}
