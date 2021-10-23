import React from 'react'
import ReactMarkdown from 'react-markdown'

import {atomDark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';




const PostContent = (props) => {

    const { post } = props

    // console.log("PostContent", post)
    // console.log("content", dummyPosts.content)

    const customRenderers = {

        // img(image) {
    
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} height={300} width={600} />
    
        // },

        p(paragraph) {
            const { node } = paragraph;
        
            if (node.children[0].tagName === 'img') {
                const image = node.children[0];
    
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                )
    
            }
            return <p>{paragraph.children}</p>
        }, 
        code(code) { 
            console.log("code", code)
            const language = code.className.split('-')[1];
            return(
                // <>
                // // {code.children}
                // </>
                <SyntaxHighlighter language={language}  children={code.children} style={atomDark}/>
            )
        }
    }
    console.log("customRenderers", customRenderers)
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
            {/* <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown> */}
        </article>
    )
}

export default PostContent
