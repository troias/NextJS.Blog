import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import PostHeader from './post-header'
import classes from './post-content.module.css'



export const dummyPosts =
{
    title: "getting-started-with-next-js",
    content: "# This is a first post",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-next-js1",
    date: "2022-02-12"
}


const PostContent = (props) => {

    const {post} = props
    console.log("PostContent", post)
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    // console.log("content", dummyPosts.content)
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown children={post.content}/> 

        </article>
    )
}

export default PostContent
