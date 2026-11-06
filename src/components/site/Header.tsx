import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { NAV, WHATSAPP_URL, EMAIL, EMAIL_URL, WHATSAPP_DISPLAY } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label="MRS MOREIRA — Início" className="shrink-0">
          <Logo className="w-[112px] sm:w-[128px]" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline pb-1 text-[15px] font-semibold text-foreground"
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-[length:100%_1px]" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="ink" size="pill" className="hidden sm:inline-flex">
            <Link to="/servicos">
              Ver soluções <ArrowUpRight />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 bg-background transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav aria-label="Menu mobile" className="flex h-full flex-col justify-between px-5 pb-10 pt-6 sm:px-8">
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <li key={item.to} className="border-b border-line">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="text-display text-5xl uppercase sm:text-6xl">{item.label}</span>
                  <span className="text-label text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Button asChild variant="ink" size="xl">
              <Link to="/servicos" onClick={() => setOpen(false)}>
                Ver soluções <ArrowUpRight />
              </Link>
            </Button>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="link-underline w-fit">
                {WHATSAPP_DISPLAY}
              </a>
              <a href={EMAIL_URL} className="link-underline w-fit">
                {EMAIL}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
