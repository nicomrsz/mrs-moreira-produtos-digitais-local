import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { NAV, WHATSAPP_URL, WHATSAPP_DISPLAY, EMAIL, EMAIL_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1440px] px-5 pt-20 pb-10 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" className="w-[180px]" />
            <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-grey">
              Agência digital especializada em criação de sites, landing pages, identidade visual e
              soluções digitais sob medida para marcas que querem se destacar.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-label text-grey">Navegação</h3>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline text-[15px]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-label text-grey">Serviços</h3>
            <ul className="mt-6 space-y-3">
              {PRODUCTS.map((s) => (
                <li key={s.slug}>
                  <Link to="/produto/$slug" params={{ slug: s.slug }} className="link-underline text-[15px]">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-label text-grey">Contato</h3>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="link-underline">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={EMAIL_URL} className="link-underline break-all">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-line-dark pt-10">
          <p className="text-display text-[11vw] uppercase leading-none lg:text-[7.5rem]">
            Criatividade, <span className="text-editorial normal-case italic tracking-normal text-grey">tecnologia</span> e propósito.
          </p>
          <div className="mt-10 flex flex-col justify-between gap-3 pr-16 text-xs text-grey sm:flex-row sm:pr-24">
            <p>MRS MOREIRA® — CRIATIVIDADE, TECNOLOGIA E PROPÓSITO.</p>
            <p>© {year} MRS MOREIRA®. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
