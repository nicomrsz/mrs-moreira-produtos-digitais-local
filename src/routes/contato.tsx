import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/sections/PageIntro";
import { Contact } from "@/components/site/sections/Contact";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e suporte — MRS MOREIRA®" },
      {
        name: "description",
        content:
          "Entre em contato com a MRS MOREIRA para suporte e dúvidas sobre os serviços.",
      },
      { property: "og:title", content: "Contato — MRS MOREIRA®" },
      { property: "og:description", content: "Seu próximo projeto começa aqui." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <PageIntro
        label="Contato"
        title={
          <>
            Vamos{" "}
            <span className="text-editorial normal-case italic tracking-[-0.03em]">conversar.</span>
          </>
        }
        text="Precisa de ajuda ou tem dúvidas sobre um pedido? Estamos disponíveis para suporte."
      />
      <Contact />
    </>
  );
}
