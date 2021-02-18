import Link from 'next/link'
import { useRouter } from 'next/router'

const article = ({ article }) => {
    const router = useRouter()
    const { id } = router.query
    console.log( id )

    return <>
                <h1>This is an article {article.id}</h1>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
                <br />
                <Link href='/'>&larr; Go back</Link>
            </>
}

// ========= getServerSideProps ==========

// export const getServerSideProps = async (context) => {
//         // console.log('CONTEXT', context)
//         const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//         const article = await res.json()

//         return {
//             props: {
//                 article
//             }
//         }
// }

// ========= OR ==========
// ========= getStaticProps + getStaticPaths ==========

export const getStaticProps = async (context) => {
    // console.log('CONTEXT', context)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params : {id : id.toString()}}))

    return {
        paths,
        fallback: false
    }
}

export default article