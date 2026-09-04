const ITEMS = [
  "Equity Portfolio Management",
  "Participações Sociais",
  "Gestão de Risco",
  "Visão de Longo Prazo",
  "Rigor Analítico",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
