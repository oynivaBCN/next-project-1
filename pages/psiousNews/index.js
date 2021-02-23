import Link from 'next/link'

const psiousNews = ({articles}) => {
    return <div style={{textAlign: 'left'}}>
            <h1>This is a list of psious articles. Click to view:</h1>
            {articles.map(article => (
                <Link href={`/psiousNews/${article.id}`} key={article.id}>
                    <a>
                        <h4>{article.id} - {article.title.rendered}</h4>
                    </a>
                </Link>
            ))}
            </div>
}

export const getStaticProps = async () => {
    const res = await fetch(process.env.PSIOUS_NEWS_API)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

// export const getStaticPaths = async () => {
//     const res = await fetch(process.env.PSIOUS_NEWS_API)
//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params : {id : id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default psiousNews