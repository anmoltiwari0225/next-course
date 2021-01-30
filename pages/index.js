import Head from 'next/head';
import ArticleList from '../components/ArticleList';

export default function Home({articles}) {
  return (
    <div className='container'>
      <Head>
        <title>WebDev Newz</title>
        <meta charSet="UTF-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts? _limit=6`)
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
