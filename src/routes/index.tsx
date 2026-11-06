import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/sections/Hero";
import { Marquee } from "@/components/site/sections/Marquee";
import { About } from "@/components/site/sections/About";
import { Services } from "@/components/site/sections/Services";
import { Process } from "@/components/site/sections/Process";
import { Portfolio } from "@/components/site/sections/Portfolio";
import { Differentials } from "@/components/site/sections/Differentials";
import { CallToAction } from "@/components/site/sections/CallToAction";
import { DigitalProducts } from "@/components/site/sections/DigitalProducts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MRS MOREIRA® — Agência Digital | Sites, Landing Pages e Identidade Visual" },
      {
        name: "description",
        content:
          "Criamos experiências digitais que conectam marcas, pessoas e resultados. Sites, landing pages, identidade visual e desenvolvimento web.",
      },
      { property: "og:title", content: "MRS MOREIRA® — Agência Digital" },
      {
        property: "og:description",
        content: "Sua marca merece uma presença digital extraordinária.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <DigitalProducts />
      <Process />
      <Portfolio limit={4} />
      <Differentials />
      <CallToAction />
    </>
  );
}
