import React from 'react'
import HeroSection from '../components/HomePage/heroSection/heroSection'
import FeaturedPost from '../components/homePage/featuredPosts/featuredPost'
import {getFeaturedPosts} from '../helpers/post-utils'



const HomePage = (props) => {
    // console.log("HomePageProps", props.featuredPosts )
    return (
        <>
            <HeroSection />
            <FeaturedPost posts={props.featuredPosts} />
        </>
    )
}

export const getStaticProps = () => {

    const featuredPosts = getFeaturedPosts()
    // console.log("featuredPosts", featuredPosts)

    return {
        props: {
            featuredPosts: featuredPosts
        }
    }
}



export default HomePage

