import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Stats() {
  return (
    <section className="stats" aria-label="Em síntese">
      <div className="wrap">
        <Reveal as="div" className="stat">
          <div className="num grad">
            <Counter to={100} suffix="%" />
          </div>
          <div className="cap">Foco em equity</div>
        </Reveal>
        <Reveal as="div" className="stat">
          <div className="num">
            <em>∞</em>
          </div>
          <div className="cap">Horizonte de longo prazo</div>
        </Reveal>
        <Reveal as="div" className="stat">
          <div className="num">
            <Counter to={1} />
          </div>
          <div className="cap">Foco. Uma só missão</div>
        </Reveal>
        <Reveal as="div" className="stat">
          <div className="num">LX</div>
          <div className="cap">Sede em Lisboa</div>
        </Reveal>
      </div>
    </section>
  );
}
