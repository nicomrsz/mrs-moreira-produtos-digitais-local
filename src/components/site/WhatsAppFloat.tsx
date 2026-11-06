import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-ink-foreground shadow-[var(--shadow-soft)] ring-4 ring-background transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-semibold tracking-wider uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Fale conosco
      </span>
    </a>
  );
}
