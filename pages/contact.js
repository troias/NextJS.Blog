import React from 'react'
import ContactForm from '../components/contact/contact-form'
import Head from 'next/head'

 const Contact = () => {
    return (
        <>
        <Head>
            <title>Contact Page</title>
            <meta name="contact page" description=" contact page" content="contact page" />
        </Head>
  
            <ContactForm/>
   
        </>
    )
}

export default Contact
