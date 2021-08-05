import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
  return(
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