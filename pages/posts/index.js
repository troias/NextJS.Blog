import React from 'react'
import AllPosts from '../../components/posts/allposts'
import { getAllposts} from '../../helpers/post-utils'


const Posts = (props) => {
    // console.log("AllPostsProps", props)
    return (

        <AllPosts posts={props.posts} />

    )
}

export const getStaticProps = () => {
    const allPosts = getAllposts()
    console.log("allPosts", allPosts)
    return {
        props: {
            posts: allPosts,
        }
    }
}
export default Posts
