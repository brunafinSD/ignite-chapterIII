import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps{
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JJhSmAshZICbeBT23sg2RaE', {
    expand: ['product'] // mostra mais informações do produto
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100)
  }

  return{
    props: {
      product,
    },
    // quando tempo em segundos eu quero que a página se mantenha sem precisar ser revalidada
    // se passarmos 1min e em 1min 1000 pessoas acessarem a ´página, todas elas verão o mesmo html
    // após o 1min ele gera novamente o html com as mudanças
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
