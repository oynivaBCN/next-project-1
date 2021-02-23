import Image from 'next/image'

const about = () => {
    console.log('log from image page - this shows in browser console')
    return (
        <div>
            <h1 style={{textAlign: 'center'}} >Image</h1>
            <p>{`Import <Image /> with 'next/image', place image outside of viewport, and see how _next network call for image takes places upon scrolling.`}</p>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <h1>.</h1>
            <Image src="/screenshot.png" width={700} height={300}/>
        </div>
    )
}

export default about