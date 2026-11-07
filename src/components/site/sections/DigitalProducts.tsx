import { ArrowUpRight, BookOpen, Check, GraduationCap, Layers3, Sparkles, Video } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const ebookBenefits = [
  "Introdução à criação de sites com IA.",
  "Orientação para iniciantes.",
  "Estruturação de páginas profissionais.",
  "Adaptação para diferentes nichos.",
  "Como apresentar sites aos negócios locais.",
  "Fundamentos para comercializar projetos.",
  "Orientações para colocar o conhecimento em prática.",
];

const promptBenefits = [
  "Prompts organizados por segmento.",
  "Modelos adaptáveis.",
  "Estruturas para diferentes tipos de negócios.",
  "Mais praticidade durante a criação.",
  "Material de apoio para ferramentas de IA.",
];

const mentoringBenefits = [
  "Orientação sobre criação de sites com IA.",
  "Acompanhamento do processo de desenvolvimento.",
  "Orientações para estruturar sites profissionais.",
  "Aplicação prática em diferentes nichos.",
  "Ajuda para melhorar prompts e resultados.",
  "Orientações para desenvolver projetos próprios.",
];

function formatConfiguredPrice(value?: string) {
  if (!value?.trim()) return "A definir";
  const normalized = value.replace(/[^0-9,.-]/g, "").replace(/\./g, "").replace(",", ".");
  const amount = Number(normalized);
  if (!Number.isFinite(amount)) return value;
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(amount);
}

const niches = [
  "Barbearias",
  "Clínicas",
  "Restaurantes",
  "Academias",
  "Salões de beleza",
  "Oficinas mecânicas",
  "Lojas",
  "Outros negócios locais",
];

function PurchaseLink({ href, children }: { href?: string; children: string }) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        title="Adicione o link de checkout da Cakto no arquivo .env para ativar este botão."
        className="inline-flex min-h-14 cursor-not-allowed items-center justify-center gap-3 rounded-xl border border-blue-400/20 bg-blue-500/40 px-6 text-sm font-bold tracking-wide text-white/65"
      >
        {children} <ArrowUpRight className="h-4 w-4" />
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#3B82F6] px-6 text-sm font-bold tracking-wide text-white shadow-[0_12px_32px_-14px_rgba(59,130,246,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#60A5FA] hover:shadow-[0_16px_38px_-12px_rgba(59,130,246,0.65)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  );
}

export function DigitalProducts() {
  const ebookCheckout = (import.meta.env.VITE_CAKTO_EBOOK_URL as string | undefined) || "https://pay.cakto.com.br/hks9rws_1292690";
  const promptsCheckout = (import.meta.env.VITE_CAKTO_PROMPTS_URL as string | undefined) || "https://pay.cakto.com.br/z94aeov_1283690";
  const mentoringCheckout = (import.meta.env.VITE_CAKTO_MENTORIA_URL as string | undefined) || "https://pay.cakto.com.br/k48vpwz_1292667";
  const mentoringImage = import.meta.env.VITE_MENTORIA_IMAGE_URL as string | undefined;
  const mentoringOriginalPrice = import.meta.env.VITE_MENTORIA_PRECO_ORIGINAL as string | undefined;
  const mentoringPromoPrice = import.meta.env.VITE_MENTORIA_PRECO_PROMOCIONAL as string | undefined;

  return (
    <section id="produtos-digitais" className="relative overflow-hidden bg-[#080B12] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[34rem] w-[55rem] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.08] px-4 py-2 text-[11px] font-semibold tracking-[0.2em] text-blue-300 uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Loja digital MRS MOREIRA
          </div>
          <p className="mb-4 font-mono text-xs tracking-[0.24em] text-blue-400 uppercase">Conhecimento que vira projeto</p>
          <h2 className="text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Produtos digitais<span className="text-blue-400">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Materiais práticos para criar com inteligência artificial, desenvolver ideias e levar seus projetos para o próximo nível.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-7">
          <Reveal delay={80} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#26364D] bg-[#101827] p-6 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_34px_90px_-42px_rgba(37,99,235,0.22)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-70" />
              <div className="grid gap-7 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
                <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-300/25 bg-[radial-gradient(circle_at_75%_18%,rgba(59,130,246,0.55),transparent_38%),linear-gradient(145deg,#172B49,#080D18_72%)] p-5 shadow-2xl transition-transform duration-500 group-hover:rotate-[-1deg] group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.22em] text-blue-200 uppercase">
                    <span>MRS MOREIRA®</span><BookOpen className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="mb-3 h-1 w-10 rounded-full bg-blue-400" />
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-200 uppercase">Guia prático</p>
                    <h3 className="mt-2 text-2xl leading-[1.05] font-bold tracking-[-0.05em] text-white">Criação e venda de sites <span className="text-blue-300">com IA.</span></h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-[9px] tracking-[0.18em] text-slate-400 uppercase">E-book · PDF</span>
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200"><Sparkles className="h-5 w-5" /></div>
                  </div>
                </div>

                <div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-blue-300 uppercase">Produto 01 · E-book</span>
                  <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">Guia Completo: Criação e Venda de Sites com IA.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Aprenda do zero como utilizar ferramentas de inteligência artificial para criar sites profissionais e desenvolver projetos para empresas e comércios locais.</p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-3">
                    <span className="text-sm text-slate-500 line-through">R$ 29,90</span>
                    <span className="text-3xl font-bold tracking-[-0.05em] text-white">R$ 19,90</span>
                    <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-bold tracking-wide text-blue-300">33% OFF</span>
                  </div>
                </div>
              </div>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#33445D] to-transparent" />
              <div className="grid flex-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {ebookBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-[#26364D] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-slate-500">Acesso digital · Formato PDF</span>
                <PurchaseLink href={ebookCheckout}>QUERO ACESSAR O GUIA</PurchaseLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={160} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#26364D] bg-[#101827] p-6 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_34px_90px_-42px_rgba(37,99,235,0.22)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-70" />
              <div className="grid gap-7 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
                <div className="relative mx-auto flex aspect-[4/5] w-full max-w-[230px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-300/25 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.45),transparent_36%),linear-gradient(145deg,#14233B,#080D18_72%)] p-5 shadow-2xl transition-transform duration-500 group-hover:rotate-[1deg] group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.22em] text-blue-200 uppercase">
                    <span>MRS MOREIRA®</span><Layers3 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="mb-3 h-1 w-10 rounded-full bg-blue-400" />
                    <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-200 uppercase">Biblioteca criativa</p>
                    <h3 className="mt-2 text-3xl leading-[1.05] font-bold tracking-[-0.05em] text-white">Prompts <span className="text-blue-300">para sites.</span></h3>
                    <p className="mt-3 text-[10px] leading-relaxed text-slate-400">Modelos inteligentes por nicho e segmento.</p>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-[9px] tracking-[0.18em] text-slate-400 uppercase">Pack digital</span>
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200"><Layers3 className="h-5 w-5" /></div>
                  </div>
                </div>

                <div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-blue-300 uppercase">Produto 02 · Pack digital</span>
                  <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">Pack de Prompts para Sites Profissionais.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Tenha modelos de prompts organizados por nichos para facilitar a criação de sites com inteligência artificial e acelerar o desenvolvimento dos seus projetos.</p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-3">
                    <span className="text-sm text-slate-500 line-through">R$ 19,90</span>
                    <span className="text-3xl font-bold tracking-[-0.05em] text-white">R$ 9,90</span>
                    <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-bold tracking-wide text-blue-300">50% OFF</span>
                  </div>
                </div>
              </div>

              <div className="my-7 rounded-2xl border border-[#26364D] bg-[#0B1220] p-4 sm:p-5">
                <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase">Exemplos de nichos</p>
                <div className="flex flex-wrap gap-2">
                  {niches.map((niche) => (
                    <span key={niche} className="rounded-lg border border-[#2B3D57] bg-[#152238] px-3 py-2 text-xs text-slate-300 transition-colors duration-300 hover:border-blue-400/50 hover:text-blue-200">{niche}</span>
                  ))}
                </div>
              </div>
              <div className="grid flex-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {promptBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-[#26364D] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-slate-500">Material digital · Acesso online</span>
                <PurchaseLink href={promptsCheckout}>QUERO MEU PACK DE PROMPTS</PurchaseLink>
              </div>
            </article>
          </Reveal>

          <Reveal delay={240} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#26364D] bg-[#101827] p-6 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.9)] transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/50 hover:shadow-[0_34px_90px_-42px_rgba(37,99,235,0.22)] sm:p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent opacity-70" />
              <div className="grid gap-7 sm:grid-cols-[0.78fr_1.22fr] sm:items-center">
                <div className="relative mx-auto flex aspect-video w-full max-w-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-blue-300/25 bg-[#080D18] p-2 shadow-2xl transition-transform duration-500 group-hover:rotate-[-1deg] group-hover:scale-[1.02]">
                  {mentoringImage ? (
                    <img src={mentoringImage} alt="Imagem oficial da Mentoria: Criação de Sites com IA" className="absolute inset-0 h-full w-full object-contain" />
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.22em] text-blue-200 uppercase">
                        <span>MRS MOREIRA®</span><GraduationCap className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="mb-3 h-1 w-10 rounded-full bg-blue-400" />
                        <p className="text-[10px] font-semibold tracking-[0.2em] text-blue-200 uppercase">Mentoria online</p>
                        <h3 className="mt-2 text-2xl leading-[1.05] font-bold tracking-[-0.05em] text-white">Crie sites <span className="text-blue-300">com IA.</span></h3>
                      </div>
                      <div className="flex items-end justify-between">
                        <span className="text-[9px] tracking-[0.18em] text-slate-400 uppercase">Acompanhamento</span>
                        <div className="grid h-10 w-10 place-items-center rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-200"><Video className="h-5 w-5" /></div>
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <span className="inline-flex rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-blue-300 uppercase">Acompanhamento e aprendizado</span>
                  <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-[1.75rem]">Mentoria: Criação de Sites com IA.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">Aprenda a desenvolver sites profissionais utilizando inteligência artificial com uma orientação mais direcionada e organizada. Aprofunde seus conhecimentos, entenda o processo e desenvolva projetos para diferentes tipos de negócios.</p>
                  <div className="mt-5 flex flex-wrap items-baseline gap-3">
                    {mentoringOriginalPrice?.trim() && <span className="text-sm text-slate-500 line-through">{formatConfiguredPrice(mentoringOriginalPrice)}</span>}
                    <span className="text-3xl font-bold tracking-[-0.05em] text-white">{formatConfiguredPrice(mentoringPromoPrice)}</span>
                    {mentoringOriginalPrice?.trim() && mentoringPromoPrice?.trim() && <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-bold tracking-wide text-blue-300">OFERTA</span>}
                  </div>
                </div>
              </div>
              <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#33445D] to-transparent" />
              <div className="grid flex-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {mentoringBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" strokeWidth={2.5} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 border-t border-[#26364D] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-slate-500">Mentoria online · Acompanhamento</span>
                <PurchaseLink href={mentoringCheckout}>QUERO PARTICIPAR DA MENTORIA</PurchaseLink>
              </div>
            </article>
          </Reveal>
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-slate-500">Pagamento e entrega realizados pela plataforma de compra vinculada a cada produto.</p>
      </div>
    </section>
  );
}
