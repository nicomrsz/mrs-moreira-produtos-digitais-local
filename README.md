# MRS MOREIRA® — Loja digital de serviços

Projeto original React + TypeScript + TanStack Start + Vite, atualizado sobre a identidade visual existente da MRS MOREIRA®.

## Desenvolvimento local

```sh
npm install
npm run dev
```

## Catálogo e preços

O catálogo inicial está em `src/lib/products.ts`. Os seis produtos estão cadastrados com preço `null` e `available: false` intencionalmente. Informe o preço em centavos (por exemplo, R$ 1.250,00 = `125000`) e só habilite a disponibilidade depois de configurar e testar a integração real de pagamento.

## Rotas adicionadas

- `/servicos` — catálogo de soluções.
- `/produto/:slug` — página individual do produto.
- `/checkout?product=:slug` — resumo do checkout, bloqueado até a integração de pagamento estar configurada.

## Backend e publicação

O ZIP original não incluía banco de dados, autenticação administrativa nem credenciais de gateway. Para não simular pagamentos nem expor segredos no navegador, a camada de pagamento e administração não foi falsamente ativada.

Veja `COMMERCE_SETUP.md`, `.env.example` e `supabase/migrations/001_store_schema.sql` para a preparação da infraestrutura segura (Supabase + Mercado Pago). Credenciais privadas devem ser adicionadas somente ao gerenciador de secrets do servidor/hospedagem.
