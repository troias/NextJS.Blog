import React, { useRef, useState, useEffect } from "react";
import classes from "./contact.module.css";
import Notification from '../ui/notification/notification'



const sendContactData = async (contactDetails) => {

  const req = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: { "Content-Type": "application/json" },
  });

  if (!req.ok) {
    throw new Error("error sending message");

  }
  

  

}

const ContactForm = () => {

  const emailRef = useRef();
  const nameRef = useRef();
  const msgRef = useRef();
  const [reqStatus, setReqstatus] = useState();
 



  useEffect(() => {
    if (reqStatus === "pending" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqstatus(null);
      }, 3000)

      return () => clearTimeout(timer);
    }

    if (reqStatus === "sucess") {
      const timer = setTimeout(() => {
        setReqstatus(null);
      }, 30)

      return () => clearTimeout(timer);
    }



  }, [reqStatus])

  let reqData = {}

  if (reqStatus === "pending") {

    reqData = {
      status: "pending",
      message: "message sent pending",
      title: "pending"
    }


  }

  if (reqStatus === "success") {
    reqData = {
      status: "success",
      message: "message sent success",
      title: "success"
    }

  }

  if (reqStatus === "error") {
    reqData = {
      status: "error",
      message: "error error",
      title: "error"
    }

  }

  const contactMessageHandler = async (event) => {

    setReqstatus("pending")
    event.preventDefault();

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const message = msgRef.current.value;

    const msgData = {
      email,
      name,
      message,
    };

    try {

      await sendContactData(msgData)
      setReqstatus("success")
      emailRef.current.value = ""
      nameRef.current.value = ""
      msgRef.current.value = ""

    } catch (error) {
      setReqstatus("error")


    }


  };


  return (
    <>
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
              <input type="name" id="name" required ref={nameRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="message">Your message</label>
              <textarea id="message" rows="5" ref={msgRef} />
              <div className={classes.actions}>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </form>

      </section>
      {reqStatus && <Notification title={reqData.title} status={reqData.status} message={reqData.message} />}
    </>
  );
};

export default ContactForm;
