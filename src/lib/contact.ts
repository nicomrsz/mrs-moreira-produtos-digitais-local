import { z } from "zod";
import { EMAIL } from "./site";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100, "Nome muito longo"),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido")
    .max(30, "Telefone muito longo")
    .regex(/^[0-9()+\-\s]+$/, "Use apenas números, espaços, ( ) + -"),
  projectType: z.string().trim().min(1, "Selecione o tipo de projeto").max(60),
  description: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o projeto")
    .max(2000, "Máximo de 2000 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** FormSubmit delivers the submission straight to the agency inbox. */
export const CONTACT_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

export async function sendContact(data: ContactInput) {
  const res = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      Nome: data.name,
      "E-mail": data.email,
      Telefone: data.phone,
      "Tipo de projeto": data.projectType,
      "Descrição do projeto": data.description,
      _subject: `Nova solicitação pelo site — ${data.projectType}`,
      _replyto: data.email,
      _template: "table",
    }),
  });
  const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  const ok = res.ok && (json.success === true || json.success === "true");
  return { ok, message: json.message ?? "" };
}
