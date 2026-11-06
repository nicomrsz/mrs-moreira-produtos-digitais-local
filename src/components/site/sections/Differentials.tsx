import { Gem, Code2, MonitorSmartphone, ScanEye, MessagesSquare, BadgeCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "./SectionHeading";

const ITEMS = [
  { icon: Gem, title: "Design exclusivo" },
  { icon: Code2, title: "Desenvolvimento personalizado" },
  { icon: MonitorSmartphone, title: "Experiência responsiva" },
  { icon: ScanEye, title: "Atenção aos detalhes" },
  { icon: MessagesSquare, title: "Comunicação transparente" },
  { icon: BadgeCheck, title: "Compromisso com qualidade" },
];

export function Differentials() {
  return (
    <section className="bg-crosses py-24 sm:py-32">
      <Container>
        <SectionHeading index="05" label="Diferenciais">
          Feito com{" "}
          <span className="text-editorial normal-case italic tracking-[-0.03em]">cuidado,</span> do
          início ao fim.
        </SectionHeading>

        <ul className="grid border-t border-l border-foreground sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 100} className="group border-r border-b border-foreground bg-background">
              <div className="flex min-h-[200px] flex-col justify-between gap-10 p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-foreground group-hover:text-background">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-label text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-[1.7rem]">{title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
