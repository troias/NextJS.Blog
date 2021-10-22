const fs = require('fs')
import path from 'path'
import matter from 'gray-matter'


export const postsDirectory = path.join(process.cwd(), 'content', 'posts')



const getPostData = (fileName) => {
    const postPath = path.join(postsDirectory, fileName)
    // console.log("postPath", postPath)
    const fileContent = fs.readFileSync(postPath, 'utf8')
    const { data, content } = matter(fileContent)
    const slugName = fileName.replace(/\.md$/, '')
    const postData = {
        slug: slugName,
        ...data,
        content
    }
    return postData
}


export const getAllposts = () => {

    const allPostsinDir = fs.readdirSync(postsDirectory)
    console.log("allPostsinDir", allPostsinDir)

    const allPostsObjs = allPostsinDir.map(post => {
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