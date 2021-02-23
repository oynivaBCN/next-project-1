import Link from 'next/link'
import Config from '../../config'

const psiousNews = ({articles}) => {
    return <div style={{textAlign: 'left'}}>
            <h1>This is a list of psious articles. Click to view:</h1>
            {articles.map(article => (
                <Link href={`psiousNews/${article.id}`}>
                    <h4>{article.id} - {article.title.rendered}</h4>
                </Link>
            ))}
            </div>
}

export const getServerSideProps = async () => {
    const res = await fetch(`${Config.PSIOUS_NEWS_API}`)
    const articles = await res.json()

    return {
        props: {
            articles
        }
    }
}

export default psiousNews