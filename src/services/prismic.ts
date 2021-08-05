import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown){
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      req: req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    }
  )
  return prismic;
}

//  segundo a documentação:
// cada vez que for consumir os dados, instanciar o cliente do prismic novamente em vez de reaproveitá-lo