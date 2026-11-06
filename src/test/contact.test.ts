import { describe, expect, it } from "vitest";
import { contactSchema, CONTACT_ENDPOINT } from "@/lib/contact";
import { WHATSAPP_URL, EMAIL_URL } from "@/lib/site";

const valid = {
  name: "Maria",
  email: "maria@exemplo.com",
  phone: "(41) 99999-0000",
  projectType: "Landing Page",
  description: "Quero uma landing page para meu produto.",
};

describe("contato", () => {
  it("aceita uma solicitação completa", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejeita e-mail inválido", () => {
    expect(contactSchema.safeParse({ ...valid, email: "maria" }).success).toBe(false);
  });

  it("exige tipo de projeto", () => {
    expect(contactSchema.safeParse({ ...valid, projectType: "" }).success).toBe(false);
  });

  it("envia as solicitações para o e-mail oficial", () => {
    expect(CONTACT_ENDPOINT).toBe("https://formsubmit.co/ajax/nicolasmoraes1508@gmail.com");
    expect(EMAIL_URL).toBe("mailto:nicolasmoraes1508@gmail.com");
  });

  it("abre o WhatsApp comercial com a mensagem automática", () => {
    expect(WHATSAPP_URL.startsWith("https://wa.me/5541996304654?text=")).toBe(true);
    expect(decodeURIComponent(WHATSAPP_URL.split("text=")[1] ?? "")).toBe(
      "Olá! Conheci a MRS MOREIRA pelo site e gostaria de conversar sobre um projeto.",
    );
  });
});
