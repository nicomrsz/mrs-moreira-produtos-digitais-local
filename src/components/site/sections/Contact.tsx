import { useState } from "react";
import { ArrowUpRight, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../Reveal";
import { Container } from "./SectionHeading";
import { WhatsAppIcon } from "../WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { contactSchema, sendContact, type ContactInput } from "@/lib/contact";
import {
  EMAIL,
  EMAIL_URL,
  PROJECT_TYPES,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const empty: ContactInput = { name: "", email: "", phone: "", projectType: "", description: "" };

const fieldClass =
  "w-full border-0 border-b border-foreground bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-grey focus:border-b-2 focus:ring-0";

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honey = (form.elements.namedItem("_honey") as HTMLInputElement | null)?.value;
    if (honey) return;

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fe: Partial<Record<keyof ContactInput, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof ContactInput;
        if (!fe[k]) fe[k] = i.message;
      });
      setErrors(fe);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const { ok, message } = await sendContact(parsed.data);
      if (ok) {
        setSent(true);
        setValues(empty);
        toast.success("Solicitação enviada! Retornaremos em breve.");
      } else if (/activat/i.test(message)) {
        toast.message("Formulário em ativação", {
          description: "Confirme o e-mail de ativação na caixa da agência para começar a receber mensagens.",
        });
      } else {
        toast.error("Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail.");
      }
    } catch {
      toast.error("Falha de conexão. Tente novamente ou fale pelo WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const Err = ({ k }: { k: keyof ContactInput }) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="min-w-0 lg:col-span-4">
            <p className="text-label text-muted-foreground">Fale direto com a gente</p>
            <div className="mt-8 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border border-foreground p-6 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground"
              >
                <span className="flex items-center gap-4">
                  <WhatsAppIcon className="h-6 w-6" />
                  <span>
                    <span className="text-label block text-muted-foreground group-hover:text-grey">WhatsApp</span>
                    <span className="mt-1 block text-lg font-semibold">{WHATSAPP_DISPLAY}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
              </a>
              <a
                href={EMAIL_URL}
                className="group flex items-center justify-between border border-foreground p-6 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Mail className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                  <span className="min-w-0">
                    <span className="text-label block text-muted-foreground group-hover:text-grey">E-mail</span>
                    <span className="mt-1 block truncate text-lg font-semibold">{EMAIL}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0 lg:col-span-7 lg:col-start-6">
            {sent ? (
              <div className="flex min-h-[420px] flex-col justify-center border border-foreground p-10">
                <p className="text-label text-muted-foreground">Solicitação recebida</p>
                <h2 className="text-display mt-6 text-5xl uppercase sm:text-6xl">
                  Obrigado!{" "}
                  <span className="text-editorial normal-case italic tracking-[-0.03em]">Falamos em breve.</span>
                </h2>
                <Button variant="line" size="pill" className="mt-10 w-fit" onClick={() => setSent(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-8" aria-label="Formulário de contato e suporte">
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-label text-muted-foreground">Nome</label>
                    <input id="name" autoComplete="name" value={values.name} onChange={set("name")} placeholder="Seu nome" className={fieldClass} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} maxLength={100} />
                    <Err k="name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-label text-muted-foreground">E-mail</label>
                    <input id="email" type="email" autoComplete="email" value={values.email} onChange={set("email")} placeholder="voce@email.com" className={fieldClass} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} maxLength={255} />
                    <Err k="email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-label text-muted-foreground">Telefone</label>
                    <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} placeholder="(00) 00000-0000" className={fieldClass} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} maxLength={30} />
                    <Err k="phone" />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="text-label text-muted-foreground">Assunto</label>
                    <select id="projectType" value={values.projectType} onChange={set("projectType")} className={cn(fieldClass, "cursor-pointer appearance-none", !values.projectType && "text-grey")} aria-invalid={!!errors.projectType} aria-describedby={errors.projectType ? "projectType-error" : undefined}>
                      <option value="" disabled>Selecione…</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="text-foreground">{t}</option>
                      ))}
                    </select>
                    <Err k="projectType" />
                  </div>
                </div>
                <div>
                  <label htmlFor="description" className="text-label text-muted-foreground">Como podemos ajudar?</label>
                  <textarea id="description" rows={5} value={values.description} onChange={set("description")} placeholder="Conte sobre sua marca, objetivos e prazos…" className={cn(fieldClass, "resize-none")} aria-invalid={!!errors.description} aria-describedby={errors.description ? "description-error" : undefined} maxLength={2000} />
                  <Err k="description" />
                </div>
                <Button type="submit" variant="ink" size="xl" disabled={loading} className="w-full sm:w-auto">
                  {loading ? <Loader2 className="animate-spin" /> : null}
                  {loading ? "Enviando…" : "Enviar mensagem"}
                  {!loading && <ArrowUpRight />}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
