import React from 'react'
import classes from './featured-post.module.css'
import PostGrid from '../../posts/posts-grid'

const FeaturedPost = (props) => {
    
    const { posts } = props

    return (
        <div className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostGrid posts={posts} />
        </div>
    )
}

export default FeaturedPost
