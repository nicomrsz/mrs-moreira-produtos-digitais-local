import type { ReactNode } from "react";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  label,
  children,
  className,
  tone = "dark",
}: {
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className={cn("mb-14 sm:mb-20", className)}>
      <Reveal>
        <p
          className={cn(
            "text-label flex items-center gap-4 border-b pb-4",
            tone === "dark" ? "border-foreground text-foreground" : "border-line-dark text-grey",
          )}
        >
          <span>({index})</span>
          <span>{label}</span>
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="text-display mt-10 text-[12vw] uppercase sm:text-[8vw] lg:text-[6.5rem]">
          {children}
        </h2>
      </Reveal>
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}
