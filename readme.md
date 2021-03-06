![ScreenShot](https://github.com/brunafinSD/ignite-chapterIII/blob/main/public/images/ignews.png?raw=true})

configuração do stripe:
- criar conta no stripe.com
- criar produto subscription com preço recorrente de 9.90
- salvar produto
- copiar chave secreta e colocar no arquivo .env.local
- customizar aparencia colocando as cores da aplicação

configurações OAuth:
- conta no github
- developer settings
- criar novo produto e preencher os campos
    importante: em autorizarion callback url: http://localhost:3000/api/auth/callback
- colocar as novas chaves em .env.local:  GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET


configurações faunaDB
- criar database
- criar key e colocá-la em .env.local
- criar collection users
- criar index user_by_email
  terms: data.email
- criar index user_by_stripe_customer_id em collection users
  terms: data.stripe_customer_id
- criar collection subscriptions
- criar index subscription_by_id na collection subscriptions
  terms: data.id
- criar index subscription_by_user_ref na collection subscriptions
  terms: data.userId
- criar index subscription_by_status na collection subscriptions
  terms: data.status


instalar Stripe CLI
- no terminar:
- stripe login
- stripe listen --forward-to localhost:3000/api/webhooks
- cartão teste: 4242 4242 4242 4242

webhook stripe
- rodar webhook:
  - stripe login
  - stripe listen --forward-to localhost:3000/api/webhooks
- criar variável de ambiente com código secreto do webhook da aplicação terceira

Prismic
- criar conta
- criar tipo de documento
- criar posts
- colocar conteudo como privado
- gerar código token
- criar variável de ambiente PRISMIC_ACCESS_TOKEN com código gerado pelo Prismic
- criar variável de ambiente PRISMIC_ENDPOINT com endereço da aplicação no prismic
