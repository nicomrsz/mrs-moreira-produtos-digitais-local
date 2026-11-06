import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/sections/PageIntro";
import { About } from "@/components/site/sections/About";
import { Differentials } from "@/components/site/sections/Differentials";
import { Process } from "@/components/site/sections/Process";
import { CallToAction } from "@/components/site/sections/CallToAction";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — MRS MOREIRA® Agência Digital" },
      {
        name: "description",
        content:
          "A MRS MOREIRA une criatividade, estratégia e tecnologia para criar experiências digitais únicas.",
      },
      { property: "og:title", content: "Sobre a MRS MOREIRA®" },
      {
        property: "og:description",
        content: "Muito mais que um site. Uma experiência digital.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <PageIntro
        label="Sobre"
        title={
          <>
            Criatividade,{" "}
            <span className="text-editorial normal-case italic tracking-[-0.03em]">tecnologia</span> e
            propósito.
          </>
        }
      />
      <About showLink={false} />
      <Differentials />
      <Process />
      <CallToAction />
    </>
  );
}
