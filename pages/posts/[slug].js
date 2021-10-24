import React from 'react'
import PostContent from '../../components/posts/post-content'
import { getPostData, readPostsDir } from '../../helpers/post-utils'
import Head from 'next/head'

const PostDetail = (props) => {
    // console.log("PostDetail", props)
    
    return (
        <div>
            <Head> 
                <title>{props.postData.title}</title>
                <meta name="description" content={props.postData.excerpt}/>
            </Head>
            <PostContent post={props.postData}/>
        </div>
    )
}

export const getStaticPaths = (ctx) => {
    const readDir = readPostsDir()
    const updatedSlugName = readDir.map(path => path.replace(/\.md$/, ""))
   

    const paths = updatedSlugName.map(path => ({
        params: {slug: path}
    }))

    return {

        paths: paths, fallback: false,
    }
}
export const getStaticProps = (ctx) => {
 
    const {params} = ctx
    const {slug} = params
    const postData = getPostData(slug)
 
    return {
        props: {
            postData: postData,
            revalidate: 600
        }
    }
}

export default PostDetail

