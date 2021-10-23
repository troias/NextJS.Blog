const fs = require('fs')
import path from 'path'
import matter from 'gray-matter'


export const postsDirectory = path.join(process.cwd(), 'content', 'posts')



export const getPostData = (postIdentifier) => {
    const slugName = postIdentifier.replace(/\.md$/, '')
    const postPath = path.join(postsDirectory, `${slugName}.md`)
    // console.log("postPath", postPath)
    const fileContent = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(fileContent)
   
    const postData = {
        slug: slugName,
        ...data,
        content
    }
    return postData
}

export const readPostsDir = () => fs.readdirSync(postsDirectory)

export const getAllposts = () => {
    const postsDirectory  = readPostsDir()
    // const allPostsinDir = fs.readdirSync(postsDirectory)
    console.log("allPostsinDir", postsDirectory)

    const allPostsObjs = postsDirectory.map(post => {
        return getPostData(post)
    })
    console.log("allPostsObjs", allPostsObjs)
    const sortedPosts = allPostsObjs.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
    return sortedPosts
}
export const getFeaturedPosts = () => {
    const allPosts = getAllposts()
    const featuredPosts = allPosts.filter(p => p.isFeatured)
    return featuredPosts
}

export const getSinglePost = () => {

}