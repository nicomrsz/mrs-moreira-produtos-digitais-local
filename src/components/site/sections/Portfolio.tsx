import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye } from "lucide-react";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "./SectionHeading";
import { PROJECTS, WHATSAPP_URL, type Project } from "@/lib/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Portfolio({ showLink = true, limit }: { showLink?: boolean; limit?: number }) {
  const [active, setActive] = useState<Project | null>(null);
  const list = limit ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading index="04" label="Portfólio">
          Ideias que{" "}
          <span className="text-editorial normal-case italic tracking-[-0.03em]">ganham vida.</span>
        </SectionHeading>

        <Reveal>
          <p className="text-label -mt-8 mb-14 text-muted-foreground">
            * Projetos demonstrativos — exemplos ilustrativos do nosso estilo de trabalho.
          </p>
        </Reveal>

        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 140} className={cn("min-w-0", i % 2 === 1 && "md:mt-32")}>
              <article className="group">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="relative block w-full overflow-hidden bg-muted text-left"
                  aria-label={`Visualizar ${p.name}`}
                >
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.category} (projeto demonstrativo)`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="text-label absolute top-4 left-4 rounded-full bg-background px-3 py-1.5 text-[10px] text-foreground">
                    Projeto demonstrativo
                  </span>
                  <span className="absolute right-4 bottom-4 flex h-14 w-14 scale-75 items-center justify-center rounded-full bg-ink text-ink-foreground opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </button>
                <div className="mt-6 flex flex-col items-start justify-between gap-6 border-b border-foreground pb-6 sm:flex-row">
                  <div className="min-w-0">
                    <p className="text-label text-muted-foreground">
                      0{i + 1} / {p.category}
                    </p>
                    <h3 className="text-display mt-3 text-4xl uppercase sm:text-5xl">{p.name}</h3>
                    <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                  </div>
                  <Button variant="line" size="pill" onClick={() => setActive(p)} className="shrink-0">
                    <Eye /> Visualizar
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showLink && (
          <Reveal className="mt-20 flex justify-center">
            <Button asChild variant="ink" size="xl">
              <Link to="/projetos">
                Ver todos os projetos <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        )}
      </Container>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl gap-0 overflow-hidden rounded-none border-foreground p-0">
          {active && (
            <>
              <img
                src={active.image}
                alt={`${active.name} — projeto demonstrativo`}
                width={1280}
                height={960}
                className="aspect-[16/10] w-full object-cover grayscale"
              />
              <div className="p-8">
                <p className="text-label text-muted-foreground">
                  {active.category} — Projeto demonstrativo
                </p>
                <DialogTitle className="text-display mt-3 text-4xl uppercase">{active.name}</DialogTitle>
                <DialogDescription className="mt-4 text-[15px] leading-relaxed">
                  {active.description} Este é um exemplo ilustrativo e não representa um cliente real.
                </DialogDescription>
                <Button asChild variant="ink" size="pill" className="mt-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                    Quero um projeto assim <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
