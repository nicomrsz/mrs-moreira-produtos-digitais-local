import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/sections/PageIntro";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { CallToAction } from "@/components/site/sections/CallToAction";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — MRS MOREIRA® Agência Digital" },
      {
        name: "description",
        content:
          "Portfólio da MRS MOREIRA: exemplos demonstrativos de sites, landing pages e identidades visuais.",
      },
      { property: "og:title", content: "Projetos — MRS MOREIRA®" },
      { property: "og:description", content: "Ideias que ganham vida." },
    ],
  }),
  component: ProjetosPage,
});

function ProjetosPage() {
  return (
    <>
      <PageIntro
        label="Projetos"
        title={
          <>
            Ideias que{" "}
            <span className="text-editorial normal-case italic tracking-[-0.03em]">ganham vida.</span>
          </>
        }
        text="Uma amostra do nosso olhar para design e tecnologia. Os projetos abaixo são exemplos demonstrativos."
      />
      <Portfolio showLink={false} />
      <CallToAction />
    </>
  );
}
