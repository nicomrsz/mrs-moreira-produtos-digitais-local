import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/lib/products";
import { Container } from "@/components/site/sections/SectionHeading";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>) => ({ product: typeof search.product === "string" ? search.product : "" }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { product: slug } = Route.useSearch();
  const product = PRODUCTS.find((item) => item.slug === slug);
  return <section className="min-h-[75vh] pb-24 pt-36 sm:pt-44"><Container>
    {product ? <Link to="/produto/$slug" params={{ slug: product.slug }} className="inline-flex items-center gap-2 text-label text-muted-foreground"><ArrowLeft className="size-4" /> VOLTAR</Link> : <Link to="/servicos" className="inline-flex items-center gap-2 text-label text-muted-foreground"><ArrowLeft className="size-4" /> VOLTAR</Link>}
    <div className="mx-auto mt-12 max-w-3xl">
      <p className="text-label text-muted-foreground">Finalização de compra</p>
      <h1 className="text-display mt-5 text-6xl uppercase sm:text-8xl">Checkout.</h1>
      {product ? <div className="mt-12 border border-foreground p-7 sm:p-10">
        <p className="text-label text-muted-foreground">Resumo do pedido</p><div className="mt-5 flex items-center justify-between gap-4"><h2 className="text-2xl font-semibold">{product.name}</h2><p className="font-semibold">{formatPrice(product.priceCents)}</p></div>
        <div className="mt-8 border-t border-line pt-7"><p className="flex items-center gap-2 font-semibold"><LockKeyhole className="size-4" /> Checkout temporariamente indisponível</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">A MRS MOREIRA ainda precisa conectar o gateway de pagamento e o banco de dados seguro antes de receber pedidos. Nenhum pagamento será solicitado ou simulado nesta etapa.</p></div>
      </div> : <p className="mt-10 text-muted-foreground">Selecione um produto para continuar.</p>}
      <div className="mt-8 flex gap-3 text-xs leading-relaxed text-muted-foreground"><ShieldCheck className="size-5 shrink-0" /> Os dados de pagamento deverão ser processados diretamente pelo provedor. O site não armazenará dados completos de cartão.</div>
    </div>
  </Container></section>;
}
