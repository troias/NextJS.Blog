import React from 'react'
import HeroSection from '../components/HomePage/heroSection/heroSection'
import FeaturedPost from '../components/homePage/featuredPosts/featuredPost'

export const dummyPosts = [{
    title: "getting-started-with-next-js",
    exerpt: "post 1 experpt",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-next-js1",
    date: "2022-02-12"
},
{
    title: "getting-started-with-next-js",
    exerpt: "post 1 experpt",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-next-js2",
    date: "2022-02-12",
},
{
    title: "getting-started-with-next-js",
    exerpt: "post 1 experpt",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-next-js3",
    date: "2022-02-12",
},
{
    title: "getting-started-with-next-js",
    exerpt: "post 1 experpt",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-next-js4",
    date: "2022-02-12",
}
]

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <FeaturedPost posts={dummyPosts} />
        </>
    )
}



export default HomePage
