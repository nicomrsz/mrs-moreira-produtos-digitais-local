import arquitetura from "@/assets/projeto-arquitetura.jpg";
import identidade from "@/assets/projeto-identidade.jpg";
import landing from "@/assets/projeto-landing.jpg";
import ecommerce from "@/assets/projeto-ecommerce.jpg";

/**
 * Catálogo inicial. Edite os campos abaixo para publicar produtos e preços.
 * priceCents deve ser informado em centavos (ex.: R$ 1.250,00 = 125000).
 * Enquanto o preço estiver null, a compra permanece indisponível.
 */
export type StoreProduct = {
  slug: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  benefits: string[];
  includes: string[];
  delivery: string;
  priceCents: number | null;
  available: boolean;
};

export const PRODUCTS: StoreProduct[] = [
  {
    slug: "site-profissional",
    number: "01",
    name: "Site Profissional",
    category: "Desenvolvimento web",
    summary: "Uma presença digital estratégica, responsiva e alinhada à sua marca.",
    description: "Um site profissional desenvolvido para apresentar sua marca com clareza, transmitir confiança e transformar visitas em oportunidades. Estrutura personalizada, experiência fluida e adaptação para celulares, tablets e computadores.",
    image: arquitetura,
    benefits: ["Presença digital profissional", "Experiência responsiva em todos os dispositivos", "Estrutura pensada para seus objetivos"],
    includes: ["Layout personalizado", "Até 5 páginas institucionais", "Formulário de contato", "Configuração básica de SEO", "Publicação e orientação de uso"],
    delivery: "Prazo definido após a confirmação do briefing e dos materiais.",
    priceCents: null,
    available: false,
  },
  {
    slug: "landing-page",
    number: "02",
    name: "Landing Page",
    category: "Conversão e campanhas",
    summary: "Uma página objetiva para apresentar sua oferta e incentivar a ação.",
    description: "Landing page com narrativa visual e hierarquia de conteúdo para campanhas, lançamentos e captação de contatos. Cada seção é organizada para comunicar valor e conduzir o visitante à ação principal.",
    image: landing,
    benefits: ["Comunicação direta da oferta", "Navegação focada em uma ação", "Design otimizado para dispositivos móveis"],
    includes: ["Página única personalizada", "Seções estratégicas de conteúdo", "Botões de conversão", "Formulário ou integração indicada", "SEO técnico básico"],
    delivery: "Prazo definido após a confirmação do briefing e dos materiais.",
    priceCents: null,
    available: false,
  },
  {
    slug: "site-institucional",
    number: "03",
    name: "Site Institucional",
    category: "Presença de marca",
    summary: "Apresente sua empresa, seus diferenciais e suas soluções com consistência.",
    description: "Uma plataforma institucional que organiza informações essenciais da empresa em uma experiência visual coesa. Ideal para negócios que precisam fortalecer credibilidade e facilitar o acesso a serviços e informações.",
    image: ecommerce,
    benefits: ["Apresentação clara da empresa", "Conteúdo organizado e fácil de navegar", "Identidade visual consistente"],
    includes: ["Página inicial", "Páginas sobre, soluções e contato", "Layout responsivo", "Integração com canais de contato", "Configuração básica de SEO"],
    delivery: "Prazo definido após a confirmação do briefing e dos materiais.",
    priceCents: null,
    available: false,
  },
  {
    slug: "identidade-visual",
    number: "04",
    name: "Identidade Visual",
    category: "Branding",
    summary: "Uma linguagem visual consistente para tornar sua marca reconhecível.",
    description: "Desenvolvimento de um sistema visual que traduz o posicionamento da marca em elementos gráficos consistentes. O processo considera personalidade, público e aplicações prioritárias.",
    image: identidade,
    benefits: ["Mais consistência na comunicação", "Sistema visual reconhecível", "Direção estética para aplicações futuras"],
    includes: ["Direção criativa", "Logotipo e variações", "Paleta de cores", "Seleção tipográfica", "Manual básico de identidade"],
    delivery: "Prazo definido após a confirmação do briefing e dos materiais.",
    priceCents: null,
    available: false,
  },
  {
    slug: "design-digital",
    number: "05",
    name: "Design Digital",
    category: "Comunicação visual",
    summary: "Peças digitais com direção de arte e unidade visual.",
    description: "Criação de peças e materiais digitais para comunicar campanhas, produtos e conteúdos com uma linguagem visual alinhada à marca.",
    image: landing,
    benefits: ["Comunicação visual consistente", "Materiais alinhados à identidade", "Apresentação profissional"],
    includes: ["Direção de arte", "Peças digitais conforme escopo contratado", "Arquivos finais para uso digital", "Orientação de aplicação"],
    delivery: "Prazo definido conforme a quantidade e a complexidade das peças.",
    priceCents: null,
    available: false,
  },
  {
    slug: "solucoes-personalizadas",
    number: "06",
    name: "Soluções Personalizadas",
    category: "Projetos especiais",
    summary: "Uma solução digital construída para uma necessidade específica.",
    description: "Para demandas que combinam estratégia, design e desenvolvimento. O escopo é estruturado de acordo com a necessidade do negócio e apresentado como um produto específico antes da contratação.",
    image: arquitetura,
    benefits: ["Escopo adequado à necessidade", "Integração de diferentes disciplinas", "Solução orientada ao objetivo do negócio"],
    includes: ["Definição de escopo", "Planejamento da solução", "Design e implementação conforme produto cadastrado", "Entrega e orientações"],
    delivery: "Prazo informado na página do produto após definição do escopo.",
    priceCents: null,
    available: false,
  },
];

export function formatPrice(priceCents: number | null) {
  if (priceCents === null) return "Preço em configuração";
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(priceCents / 100);
}
