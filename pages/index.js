import React from 'react'
import HeroSection from '../components/HomePage/heroSection/heroSection'
import FeaturedPost from '../components/homePage/featuredPosts/featuredPost'
import { getFeaturedPosts } from '../helpers/post-utils'
import Head from 'next/head'


const HomePage = (props) => {
    console.log("HomePageProps", process.env.MONGO_DB_NAME )
    return (
        <>
            <Head>
                <title>Troy blog</title>
                <meta name="description" content="I post about programming and web development" />
            </Head>
            <HeroSection />
            <FeaturedPost posts={props.featuredPosts} />
        </>
    )
}

export const getStaticProps = () => {

    const featuredPosts = getFeaturedPosts()
 

    return {
        props: {
            featuredPosts: featuredPosts
        }
    }
}



export default HomePage

