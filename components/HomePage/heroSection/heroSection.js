import React from 'react'
import classes from './heroSection.module.css'
import Image from 'next/image'


const HeroSection = () => {
    return (
      
            <section className={classes.hero}>
                <div className={classes.image}>
                    <Image src="/images/site/troy.png" width="300" height="300" alt="image of Troy" />
                </div>
                <h1>Hi, I'm Troy</h1>
                <p>I blog on React</p>
            </section>
     
    )
}

export default HeroSection
