import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "./SectionHeading";
import { PRODUCTS } from "@/lib/products";

const WHATSAPP_NUMBER = "5541996304654";

function getServiceWhatsAppUrl(serviceName: string) {
  const message = `Olá! Tenho interesse no serviço de ${serviceName} da MRS MOREIRA. Gostaria de conversar sobre meu projeto e negociar o valor.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function Services() {
  return (
    <section className="py-24 sm:py-32" id="solucoes">
      <Container>
        <SectionHeading index="02" label="Nossas soluções">
          Nossas{" "}
          <span className="text-editorial normal-case italic tracking-[-0.03em]">soluções.</span>
        </SectionHeading>
        <div className="-mt-8 mb-14 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            Explore nossos serviços personalizados ou conheça os produtos digitais para aprender a criar sites com IA.
          </p>
          <a
            href="#produtos-digitais"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-bold uppercase tracking-wide text-background transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Ver produtos digitais <ArrowUpRight className="size-4" />
          </a>
        </div>
        <div className="grid border-t border-l border-foreground sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 100} className="border-r border-b border-foreground">
              <a href={getServiceWhatsAppUrl(product.name)} target="_blank" rel="noopener noreferrer" className="group flex h-full min-h-[440px] flex-col">
                <div className="relative overflow-hidden bg-muted">
                  <img src={product.image} alt={product.name} loading="lazy" className="aspect-[5/3] w-full object-cover grayscale transition-transform duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-5 top-5 text-label bg-background px-3 py-2">{product.number} / 06</span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <p className="text-label text-muted-foreground">{product.category}</p>
                    <h3 className="text-display mt-4 text-3xl uppercase">{product.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                  </div>
                  <div className="mt-8 flex items-end justify-between gap-3 border-t border-line pt-5">
                    <div>
                      <p className="text-label text-muted-foreground">Investimento</p>
                      <p className="mt-2 text-sm font-semibold">Preço negociável</p>
                    </div>
                    <span className="flex items-center gap-2 text-label transition-transform group-hover:translate-x-1">NEGOCIAR NO WHATSAPP <ArrowUpRight className="size-4" /></span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
