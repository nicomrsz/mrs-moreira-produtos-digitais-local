import type { ReactNode } from "react";
import { Container } from "./SectionHeading";

export function PageIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <section className="bg-crosses pt-40 pb-16 sm:pt-48 sm:pb-24">
      <Container>
        <p className="text-label animate-rise flex items-center gap-3 text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          {label}
        </p>
        <h1
          className="text-display animate-rise mt-8 text-[15vw] uppercase sm:text-[11vw] lg:text-[10rem]"
          style={{ "--delay": "120ms" } as React.CSSProperties}
        >
          {title}
        </h1>
        {text && (
          <p
            className="animate-rise mt-10 max-w-2xl text-xl leading-snug text-muted-foreground sm:text-2xl"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            {text}
          </p>
        )}
      </Container>
    </section>
  );
}
