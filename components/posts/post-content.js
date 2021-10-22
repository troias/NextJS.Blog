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


const PostContent = () => {

    const imagePath = `/images/posts/${dummyPosts.slug}/${dummyPosts.image}`
    // console.log("content", dummyPosts.content)
    return (
        <article className={classes.content}>
            <PostHeader title={dummyPosts.title} image={imagePath} />
            <ReactMarkdown children={dummyPosts.content}/> 

        </article>
    )
}

export default PostContent
