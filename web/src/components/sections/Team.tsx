import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/content/team";

export function Team({ variant = "home" }: { variant?: "home" | "full" }) {
  return (
    <section id="equipa" className="block" style={{ paddingTop: variant === "home" ? 0 : undefined }}>
      <div className="wrap">
        {variant === "home" && (
          <div className="block-head">
            <p className="eyebrow">Quem lidera</p>
            <h2 className="h-sec">
              Uma equipa <em>experiente</em>.
            </h2>
          </div>
        )}
        <Reveal stagger className="team-grid">
          {team.map((m) =>
            variant === "full" ? (
              <article className={`team-card lg`} key={m.slug} data-cursor>
                <div className="team-avatar">
                  <span>{m.initials}</span>
                </div>
                <h4>{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bioLong}</p>
              </article>
            ) : (
              <article className="team-card" key={m.slug} data-cursor>
                <div className="team-avatar">
                  <span>{m.initials}</span>
                </div>
                <h4>{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bioShort}</p>
              </article>
            )
          )}
        </Reveal>
        {variant === "home" ? (
          <p className="section-note">
            <Link href="/equipa" data-cursor style={{ textDecoration: "underline" }}>
              Conhecer a equipa completa →
            </Link>
          </p>
        ) : (
          <p className="section-note">
            Equipa ilustrativa — a apresentação final será atualizada brevemente.
          </p>
        )}
      </div>
    </section>
  );
}
