import Link from 'next/link'
import { useRouter } from 'next/router'

const psiousArticle = ({ article }) => {
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

export const getServerSideProps = async (context) => {
        const res = await fetch(`${process.env.PSIOUS_NEWS_API}${context.params.id}/`)
        const article = await res.json()

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

export default psiousArticle