import arquitetura from "@/assets/projeto-arquitetura.jpg";
import identidade from "@/assets/projeto-identidade.jpg";
import landing from "@/assets/projeto-landing.jpg";
import ecommerce from "@/assets/projeto-ecommerce.jpg";

export const WHATSAPP_NUMBER = "5541996304654";
export const WHATSAPP_DISPLAY = "+55 41 99630-4654";
export const WHATSAPP_MESSAGE =
  "Olá! Preciso de suporte sobre um serviço ou pedido da MRS MOREIRA.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const EMAIL = "nicolasmoraes1508@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}`;

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Soluções" },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export const SERVICES = [
  {
    n: "01",
    title: "Criação de Sites",
    text: "Desenvolvimento de sites modernos, responsivos e personalizados.",
  },
  {
    n: "02",
    title: "Landing Pages",
    text: "Páginas estratégicas desenvolvidas para apresentar produtos e serviços e gerar oportunidades comerciais.",
  },
  {
    n: "03",
    title: "Identidade Visual",
    text: "Criação de identidades visuais que transmitem personalidade e profissionalismo.",
  },
  { n: "04", title: "Design Digital", text: "Interfaces e experiências visuais modernas." },
  {
    n: "05",
    title: "Desenvolvimento Web",
    text: "Soluções digitais personalizadas para diferentes necessidades.",
  },
  {
    n: "06",
    title: "Presença Digital",
    text: "Projetos para fortalecer o posicionamento de marcas na internet.",
  },
] as const;

export const PROCESS = [
  { n: "01", title: "Planejamento", text: "Entendimento das necessidades e objetivos do cliente." },
  { n: "02", title: "Estratégia", text: "Definição da estrutura e identidade do projeto." },
  { n: "03", title: "Desenvolvimento", text: "Construção e implementação da solução digital." },
  { n: "04", title: "Entrega", text: "Finalização, revisão e publicação do projeto." },
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

/** Demonstrative projects — clearly labeled as examples until real work is added. */
export const PROJECTS: Project[] = [
  {
    slug: "vera-arquitetura",
    name: "Véra Arquitetura",
    category: "Criação de Sites",
    description:
      "Exemplo de site institucional para um estúdio de arquitetura, com tipografia forte, grid editorial e foco total nas imagens.",
    image: arquitetura,
  },
  {
    slug: "nexa-studios",
    name: "Nexa Studios",
    category: "Identidade Visual",
    description:
      "Exemplo de identidade visual completa: símbolo, tipografia, papelaria e aplicações em preto e branco.",
    image: identidade,
  },
  {
    slug: "norrs-cafe",
    name: "Nørrs Café",
    category: "Landing Page",
    description:
      "Exemplo de landing page mobile-first para uma marca de cafés especiais, pensada para conversão.",
    image: landing,
  },
  {
    slug: "avant-store",
    name: "Avant Store",
    category: "Desenvolvimento Web",
    description:
      "Exemplo de loja virtual de moda com navegação fluida, vitrines amplas e experiência premium.",
    image: ecommerce,
  },
];

export const PROJECT_TYPES = [
  "Criação de Site",
  "Landing Page",
  "Identidade Visual",
  "Design Digital",
  "Desenvolvimento Web",
  "Presença Digital",
  "Outro",
] as const;
