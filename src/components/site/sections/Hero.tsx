import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

function Barcode() {
  const bars = [3, 1, 2, 1, 4, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 4, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1];
  return (
    <div aria-hidden="true" className="flex flex-col items-end gap-[3px]">
      {bars.map((h, i) => (
        <span key={i} className="block bg-foreground" style={{ height: `${h}px`, width: i % 3 === 0 ? 44 : 34 }} />
      ))}
      <span className="text-label mt-2 text-[10px] text-muted-foreground">MRS®—2026</span>
    </div>
  );
}

function RotatingBadge() {
  return (
    <a
      href="/servicos"
      aria-label="Conheça as soluções disponíveis"
      className="group relative flex h-36 w-36 items-center justify-center rounded-full border border-foreground bg-background transition-colors duration-500 hover:bg-foreground hover:text-background sm:h-44 sm:w-44"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="circlePath" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current text-label" style={{ fontSize: 13, letterSpacing: "0.32em" }}>
          <textPath href="#circlePath">ESCOLHA SUA SOLUÇÃO • COMPRE ONLINE • </textPath>
        </text>
      </svg>
      <ArrowUpRight className="h-8 w-8 transition-transform duration-500 group-hover:rotate-45" />
    </a>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="bg-crosses relative flex min-h-[100svh] flex-col overflow-hidden pt-20"
    >
      <div aria-hidden="true" className="bg-glow pointer-events-none absolute inset-0" />

      <div className="absolute top-28 right-5 hidden sm:right-8 md:block lg:right-12">
        <Barcode />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 sm:px-8 lg:px-12">
        <p className="text-label animate-rise mt-6 mb-8 flex items-center gap-3 text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          Agência digital — Brasil
        </p>

        <h1 className="text-display text-[12.5vw] uppercase sm:text-[9vw] lg:text-[clamp(4.5rem,8.2vw,9.5rem)]">
          <span className="animate-rise block" style={{ "--delay": "80ms" } as React.CSSProperties}>
            Sua marca merece
          </span>
          <span className="animate-rise block" style={{ "--delay": "180ms" } as React.CSSProperties}>
            uma presença digital
          </span>
          <span
            className="text-editorial animate-rise block pt-1 normal-case italic tracking-[-0.03em] text-foreground"
            style={{ "--delay": "380ms" } as React.CSSProperties}
          >
            extraordinária.
          </span>
        </h1>

        <div
          className="animate-rise mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          style={{ "--delay": "520ms" } as React.CSSProperties}
        >
          <div className="max-w-xl">
            <p className="text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
              Criamos experiências digitais{" "}
              <span className="text-editorial font-normal italic">que conectam marcas, pessoas e resultados.</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="ink" size="xl">
                <Link to="/servicos">
                  Conheça nossos serviços <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="line" size="xl">
                <Link to="/servicos">
                  Comprar agora
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden self-end lg:block">
            <RotatingBadge />
          </div>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-8 sm:px-8 lg:px-12">
        <span className="text-label text-muted-foreground">MRS MOREIRA®</span>
        <span className="text-editorial flex items-center gap-2 text-xl sm:text-2xl">
          Role para explorar <span className="animate-blink">_</span>
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}
