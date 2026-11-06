# MRS MOREIRA® — configuração da loja

## Estado atual

A interface comercial foi integrada ao projeto existente: catálogo com seis soluções, páginas individuais, resumo de checkout e preços editáveis. Nenhum pagamento é simulado. Os seis itens começam com `priceCents: null` e `available: false` em `src/lib/products.ts`, portanto não podem ser comprados enquanto não houver preço cadastrado e gateway ativo.

## Editar preços e produtos

Edite `src/lib/products.ts`:

- `priceCents`: valor em centavos (R$ 1.250,00 = `125000`). Use `null` enquanto não houver preço definido.
- `available`: mantenha `false` até que a integração de pagamento esteja implantada e testada.
- `name`, `description`, `summary`, `includes`, `benefits`, `delivery` e `image`: conteúdo exibido no catálogo e na página do produto.

## O que falta para vender em produção

O repositório recebido não contém banco de dados, autenticação administrativa, credenciais ou conta de gateway. Para atender aos requisitos de segurança, a etapa de produção precisa de:

1. Banco PostgreSQL gerenciado (recomendado: Supabase) com tabelas `products`, `orders` e `payments` e políticas RLS.
2. Autenticação Supabase Auth com conta administrativa allowlisted. Nunca proteger o painel apenas com uma senha ou variável enviada ao navegador.
3. Endpoint server-side que leia o produto e o preço diretamente do banco, crie o pedido pendente e gere a preferência de pagamento no Mercado Pago (ou Checkout Session no Stripe).
4. Webhook server-side que valide assinatura/autenticidade, idempotência e estado da transação antes de marcar o pedido como pago.
5. Página de sucesso que consulte o pedido no servidor e mostre o estado persistido — nunca confiar apenas nos parâmetros de retorno do navegador.
6. Painel administrativo server-side para CRUD de produtos e consulta de pedidos/pagamentos.

As chaves privadas do gateway e `service_role` do banco devem existir somente no ambiente do servidor/deploy, nunca em variáveis `VITE_*`, código frontend, Git ou arquivos públicos. Use credenciais de teste primeiro. Não solicite nem envie dados completos de cartão para o site; utilize os componentes hospedados/tokenizados do provedor.

## Credenciais necessárias para a próxima etapa

Configure no ambiente de hospedagem, usando o painel de secrets do provedor:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (somente servidor)
- `MERCADOPAGO_ACCESS_TOKEN` (somente servidor)
- `MERCADOPAGO_WEBHOOK_SECRET` (somente servidor)
- `APP_URL` (domínio público HTTPS)

Não coloque valores reais neste arquivo. Após configurar banco e credenciais, a integração server-side, webhook, login administrativo e painel poderão ser habilitados e testados no ambiente de homologação.
