"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "ok" | "err";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot: se um bot preencher este campo invisível, finge sucesso e não envia
    if (data.get("company")) {
      setStatus("ok");
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("err");
      setErrorMsg("Preencha nome, e-mail e mensagem.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
      setErrorMsg("Não foi possível enviar a mensagem. Tente novamente ou ligue-nos diretamente.");
    }
  }

  return (
    <form className="form-panel glass" onSubmit={onSubmit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="field">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required />
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        <span className="lbl">{status === "sending" ? "A enviar…" : "Enviar mensagem"}</span>
        <span className="arrow" aria-hidden="true">
          →
        </span>
      </button>

      {status === "ok" && (
        <p className="form-status ok" role="status">
          Mensagem enviada. Entraremos em contacto brevemente.
        </p>
      )}
      {status === "err" && (
        <p className="form-status err" role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
