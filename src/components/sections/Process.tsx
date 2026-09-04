import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "FASE 01",
    title: "Análise",
    text: "Estudo aprofundado de cada oportunidade e do respetivo perfil de risco.",
  },
  {
    n: "FASE 02",
    title: "Alocação",
    text: "Decisões de investimento disciplinadas e alinhadas com objetivos claros.",
  },
  {
    n: "FASE 03",
    title: "Acompanhamento",
    text: "Monitorização contínua e ajustes orientados pelo valor de longo prazo.",
  },
];

export function Process() {
  return (
    <section id="processo" className="block">
      <div className="wrap">
        <div className="block-head">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="h-sec">
            Um processo <em>metódico</em>
          </h2>
        </div>
        <Reveal stagger className="steps">
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <span className="dot" />
              <span className="st-n">{s.n}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
