import React from 'react'
import AllPosts from '../../components/posts/allposts'
import { getAllposts } from '../../helpers/post-utils'
import Head from 'next/head'


const Posts = (props) => {

    return (
        <>
            <Head> 
                <title> All Posts</title> 
            <meta name="All Posts" content="All Posts" />
            </Head>
            <AllPosts posts={props.posts} />
        </>
    )
}

export const getStaticProps = () => {
    const allPosts = getAllposts()

    return {
        props: {
            posts: allPosts,
        }
    }
}
export default Posts
