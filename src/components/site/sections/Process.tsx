import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "./SectionHeading";
import { PROCESS } from "@/lib/site";

export function Process() {
  return (
    <section className="bg-ink-soft py-24 text-ink-foreground sm:py-32">
      <Container>
        <SectionHeading index="03" label="Processo de desenvolvimento" tone="light">
          Do primeiro{" "}
          <span className="text-editorial normal-case italic tracking-[-0.03em] text-grey">esboço</span>{" "}
          à entrega.
        </SectionHeading>

        <ol className="grid border-t border-l border-line-dark sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 120} className="group border-r border-b border-line-dark bg-ink-soft">
              <div className="flex h-full min-h-[340px] flex-col justify-between p-8 transition-colors duration-500 group-hover:bg-ink">
                <span className="text-editorial text-[6rem] leading-none italic text-grey transition-colors duration-500 group-hover:text-ink-foreground">
                  {p.n}.
                </span>
                <div>
                  <div className="mb-6 h-px w-10 bg-ink-foreground transition-all duration-500 group-hover:w-full" />
                  <h3 className="text-display text-3xl uppercase">{p.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-grey">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
