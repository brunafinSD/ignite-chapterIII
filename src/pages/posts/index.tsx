import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprenda os superpoderes so Sass</strong>
            <p>As melhores práticas e funcionalidades dessa ferramenta superpoderosa</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprenda os superpoderes so Sass</strong>
            <p>As melhores práticas e funcionalidades dessa ferramenta superpoderosa</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Aprenda os superpoderes so Sass</strong>
            <p>As melhores práticas e funcionalidades dessa ferramenta superpoderosa</p>
          </a>
        </div>
      </main>
    </>
  );
}
//como a página vai ser estática vamos gerar o conteúdo estático recarregando a cada tempo
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}