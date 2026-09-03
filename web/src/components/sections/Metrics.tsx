import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";

export function Metrics() {
  return (
    <section id="numeros" className="block" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="block-head">
          <p className="eyebrow">Em números</p>
          <h2 className="h-sec">
            Disciplina que se <em>reflete</em> nos resultados.
          </h2>
        </div>
        <Reveal className="metrics-panel glass">
          <svg className="area-chart" viewBox="0 0 800 220" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" style={{ stopColor: "var(--accent-a)", stopOpacity: 0.32 }} />
                <stop offset="100%" style={{ stopColor: "var(--accent-b)", stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <path
              className="area-fill"
              d="M0,180 C80,165 120,120 200,130 C280,140 320,90 400,80 C480,70 520,45 600,38 C680,32 720,14 800,8 L800,220 L0,220 Z"
            />
            <path
              className="area-line"
              d="M0,180 C80,165 120,120 200,130 C280,140 320,90 400,80 C480,70 520,45 600,38 C680,32 720,14 800,8"
            />
          </svg>
          <Reveal stagger className="metrics-row">
            <div className="metric">
              <span className="metric-num grad">
                <Counter to={12} />
              </span>
              <span className="metric-cap">Anos de experiência combinada</span>
            </div>
            <div className="metric">
              <span className="metric-num grad">
                <Counter to={30} suffix="+" />
              </span>
              <span className="metric-cap">Posições analisadas por trimestre</span>
            </div>
            <div className="metric">
              <span className="metric-num grad">
                <Counter to={100} suffix="%" />
              </span>
              <span className="metric-cap">Capital próprio alinhado</span>
            </div>
          </Reveal>
          <p className="section-note">
            Ilustrativo — dados de demonstração, não constituem histórico de performance real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
