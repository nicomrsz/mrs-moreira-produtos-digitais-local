import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "./SectionHeading";

const PILLARS = [
  { word: "Criatividade", note: "Ideias com personalidade" },
  { word: "Estratégia", note: "Decisões com propósito" },
  { word: "Tecnologia", note: "Execução precisa" },
];

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading index="01" label="Sobre a agência">
          Muito mais que um site.{" "}
          <span className="text-editorial normal-case italic tracking-[-0.03em]">
            Uma experiência digital.
          </span>
        </SectionHeading>

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6 lg:col-start-1">
            <p className="text-2xl leading-snug font-medium tracking-tight sm:text-[2rem] sm:leading-[1.25]">
              A MRS MOREIRA nasceu com o propósito de transformar ideias em experiências digitais
              únicas.
            </p>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Unimos criatividade, estratégia e tecnologia para desenvolver projetos que valorizam
              marcas e fortalecem sua presença no ambiente digital.
            </p>
            {showLink && (
              <Link
                to="/sobre"
                className="link-underline mt-10 inline-flex items-center gap-2 pb-1 text-sm font-semibold tracking-[0.12em] uppercase"
              >
                Conheça a agência <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <ul className="border-t border-foreground">
              {PILLARS.map((p, i) => (
                <Reveal as="li" key={p.word} delay={i * 120} className="group border-b border-foreground">
                  <div className="flex items-baseline justify-between gap-6 py-7 transition-all duration-500 group-hover:pl-4">
                    <span className="text-label text-muted-foreground">0{i + 1}</span>
                    <span className="flex-1 text-display text-4xl uppercase sm:text-5xl">{p.word}</span>
                    <span className="text-editorial hidden text-lg italic text-muted-foreground sm:block">
                      {p.note}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
