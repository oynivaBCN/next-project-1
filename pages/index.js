import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>NextProject WebDev News</title>
        <meta name='example name' content='next project, web development' />
      </Head>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async ()=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  console.log('log from index.js getStaticProps')
  // need to reload page to see changes to getStaticProps
  return {
    props: {
      articles
    }
  }
}

