import { Resend } from "resend";
import { site } from "@/content/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limite de tamanho generoso o suficiente para uma mensagem de contacto real,
// pequeno o suficiente para não servir de vetor de abuso.
const MAX_LEN = { name: 120, email: 200, message: 4000 };

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }
  if (name.length > MAX_LEN.name || email.length > MAX_LEN.email || message.length > MAX_LEN.message) {
    return Response.json({ error: "too_long" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;

  if (!apiKey) {
    // Sem chave configurada (ambiente de desenvolvimento ou deploy ainda por
    // completar) — não quebra a UI, mas deixa claro nos logs do servidor que
    // nenhum e-mail foi de facto enviado. Ver .env.example.
    console.warn(
      "[contact] RESEND_API_KEY não definido — mensagem recebida mas NÃO enviada:",
      { name, email }
    );
    return Response.json({ ok: true, delivered: false });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || `SENTINELA100ERRO <contacto@${site.domain}>`,
    to,
    replyTo: email,
    subject: `Novo contacto do site — ${name}`,
    text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
  });

  if (error) {
    console.error("[contact] falha ao enviar via Resend:", error);
    return Response.json({ error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true, delivered: true });
}
