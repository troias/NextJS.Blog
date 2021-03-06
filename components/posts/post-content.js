import React from 'react'
import ReactMarkdown from 'react-markdown'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import PostHeader from './post-header'
import classes from './post-content.module.css'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';


SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = (props) => {

    const { post } = props



    const customRenderers = {

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
         
            const language = code.className.split('-')[1];
            return(
             
                <SyntaxHighlighter language={language}  children={code.children} style={atomDark}/>
            )
        }
    }
   
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent
