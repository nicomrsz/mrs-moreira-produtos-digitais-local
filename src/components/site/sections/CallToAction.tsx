import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Container } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 text-ink-foreground sm:py-40">
      <Container className="relative">
        <Reveal>
          <p className="text-label text-grey">(06) — Próximo passo</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-display mt-10 text-[14vw] uppercase sm:text-[10vw] lg:text-[9rem]">
            Seu próximo projeto{" "}
            <span className="text-editorial normal-case italic tracking-[-0.03em] text-grey">
              começa aqui.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={200} className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-xl leading-snug text-grey sm:text-2xl">
            Conheça nossas soluções e escolha o serviço ideal para o próximo passo da sua marca.
          </p>
          <Button asChild variant="inverse" size="xl" className="h-16 px-10 text-sm">
            <Link to="/servicos">
              Ver soluções <ArrowUpRight className="!size-5" />
            </Link>
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
