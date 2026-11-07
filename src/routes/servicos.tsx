import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/sections/PageIntro";
import { Services } from "@/components/site/sections/Services";
import { DigitalProducts } from "@/components/site/sections/DigitalProducts";
import { Process } from "@/components/site/sections/Process";
import { CallToAction } from "@/components/site/sections/CallToAction";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — MRS MOREIRA® Agência Digital" },
      {
        name: "description",
        content:
          "Criação de sites, landing pages, identidade visual, design digital, desenvolvimento web e presença digital.",
      },
      { property: "og:title", content: "Serviços — MRS MOREIRA®" },
      {
        property: "og:description",
        content: "Soluções digitais completas para fortalecer a presença da sua marca.",
      },
    ],
  }),
  component: ServicosPage,
});

function ServicosPage() {
  return (
    <>
      <PageIntro
        label="Serviços"
        title={
          <>
            Soluções{" "}
            <span className="text-editorial normal-case italic tracking-[-0.03em]">digitais.</span>
          </>
        }
        text="Do conceito ao código: tudo o que sua marca precisa para se destacar no ambiente digital."
      />
      <Services />
      <DigitalProducts />
      <Process />
      <CallToAction />
    </>
  );
}
