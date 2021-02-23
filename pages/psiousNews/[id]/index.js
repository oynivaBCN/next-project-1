import Link from 'next/link'
import { useRouter } from 'next/router'

const article = ({ article }) => {
    const router = useRouter()
    const { id } = router.query

    return <>
                {article?.id ? <h1>This is article {id}</h1> : <h1>404</h1>}
                <h1>{article?.title?.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: article?.excerpt?.rendered }} />
                <br />
                <Link href='/psiousNews'>&larr; Go back</Link>
            </>
}

// ========= getServerSideProps ==========
// ========= this is recommended. HTML generate on each request. Only use if needed.

export const getServerSideProps = async (context) => {
        const res = await fetch(`${process.env.PSIOUS_NEWS_API}${context.params.id}/`)
        const article = await res.json()

        // console.log('==========', article)
        // // OR E.G, if calling DB:
        // const db = await connectToDB()
        // const rows = db.fetchRows()
        // return {props: rows}

        if (article?.data?.status == '404') {
            return {
                props: {}
            }
        } else {
            return {
                props: {
                    article
                }
            }
        }

}

// ========= OR ==========

// // ========= getStaticProps + getStaticPaths==========
// // ========= this is recommended. html generated at BUILD time and reused on each request
// // Your page content depends on external data: Use getStaticProps.
// // Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps).

// export const getStaticProps = async (context) => {
//     // console.log('CONTEXT', context)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()

//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params : {id : id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }

export default article