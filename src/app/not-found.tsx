import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <div className="code">404</div>
        <p>Página não encontrada.</p>
        <Link href="/" className="btn btn-primary">
          <span className="lbl">Voltar ao início</span>
        </Link>
      </div>
    </div>
  );
}
