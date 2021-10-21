import React from 'react'
import AllPosts from '../../components/posts/allposts'
import { dummyPosts } from '../index'

const Posts = () => {
    return (

        <AllPosts posts={dummyPosts} />

    )
}

export default Posts
