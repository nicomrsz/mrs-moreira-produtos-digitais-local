import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, LockKeyhole } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/lib/products";
import { Container } from "@/components/site/sections/SectionHeading";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.product.name ?? "Produto"} — MRS MOREIRA®` }] }),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  return (
    <>
      <section className="pb-24 pt-36 sm:pb-32 sm:pt-44">
        <Container>
          <Link to="/servicos" className="mb-10 inline-flex items-center gap-2 text-label text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> TODAS AS SOLUÇÕES</Link>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <div className="overflow-hidden bg-muted"><img src={product.image} alt={product.name} className="aspect-[4/5] w-full object-cover grayscale" /></div>
            <div className="flex flex-col justify-center">
              <p className="text-label text-muted-foreground">{product.number} — {product.category}</p>
              <h1 className="text-display mt-7 text-[clamp(3rem,7vw,6.5rem)] uppercase">{product.name}</h1>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-10 border-y border-foreground py-7">
                <p className="text-label text-muted-foreground">Investimento</p>
                <p className="mt-3 text-3xl font-semibold">{formatPrice(product.priceCents)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{product.delivery}</p>
              </div>
              {product.available && product.priceCents !== null ? (
                <Button asChild variant="ink" size="xl" className="mt-8 h-16"><Link to="/checkout" search={{ product: product.slug }}>COMPRAR AGORA <ArrowUpRight /></Link></Button>
              ) : (
                <div className="mt-8 border border-line p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold"><LockKeyhole className="size-4" /> Compra ainda não habilitada</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Este produto será liberado assim que o preço e a integração segura de pagamento forem configurados.</p>
                </div>
              )}
              <p className="mt-5 text-xs text-muted-foreground">Pagamento seguro será disponibilizado após a configuração do provedor de pagamento.</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-t border-line py-24 sm:py-32"><Container><div className="grid gap-16 md:grid-cols-2">
        <div><p className="text-label text-muted-foreground">O que você recebe</p><h2 className="text-display mt-6 text-5xl uppercase">Incluído no serviço.</h2><ul className="mt-10 space-y-4">{product.includes.map((item) => <li key={item} className="flex gap-3 border-b border-line pb-4 text-sm"><Check className="size-4 shrink-0" />{item}</li>)}</ul></div>
        <div><p className="text-label text-muted-foreground">Por que escolher</p><h2 className="text-display mt-6 text-5xl uppercase">Feito para avançar.</h2><ul className="mt-10 space-y-4">{product.benefits.map((item) => <li key={item} className="flex gap-3 border-b border-line pb-4 text-sm"><Check className="size-4 shrink-0" />{item}</li>)}</ul></div>
      </div></Container></section>
    </>
  );
}
