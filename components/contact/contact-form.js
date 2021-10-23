import React, {useRef} from "react";
import classes from "./contact.module.css";

const ContactForm = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const msgRef = useRef()

    const contactMessageHandler = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const name = nameRef.current.value
        const message = msgRef.current.value

        const msgData = {
            email,
            name,
            message
        }
     
        const req = await fetch("/api/contact", 
        {method: "POST", body: JSON.stringify(msgData), headers: {'Content-Type': 'application/json'}})
        // if (!req.ok) {
        //     throw new Error("error sending message")
        // }
        const res = await req.json()
        console.log("resData", res)
    }
    return (
        <section className={classes.contact}>
            <h1>How can I help you</h1>
            <form className={classes.form} onSubmit={contactMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your email</label>
                        <input type="email" id="email" ref={emailRef} required />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your name</label>
                        <input type="name" id="name" required  ref={nameRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="message">Your message</label>
                        <textarea id="message" rows="5"  ref={msgRef}/>
                        <div className={classes.actions}>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
