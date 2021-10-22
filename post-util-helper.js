const fs = require('fs');
import path from 'path';
import matter from 'grey-matter'

const postDirectory = path.join(process.cwd(), '/content', 'posts')

const getPostData = (filename) => {
    const filePath = path.join(process.cwd(postDirectory, filename))
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = contentmatter(fileContent)

    const postSlug = filename.replace(/\.md$/, '')
    const postData = {
        slug: postSlug,
        ...data,
        content,
    }
    console.log("postData", postData)
    return postData
}

export const fetchAllPosts = () => {
    const postFiles = fs.readdirSync(postDirectory)

  const posts = postFiles.map(file => {
      return getPostFile(file)
  })

}

const fetechSinglePost = () => {

}