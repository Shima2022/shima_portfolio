import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import styles from './contact.module.scss'


const Contact: React.FC = () => {
  
  //UseRef allows to persist values between renders.
  const form = useRef();
  //preventDefault cancels the event if it is cancelable.
  const sendEmail = (e: { preventDefault: () => void; }) => {

    emailjs.sendForm (
      "service id",
      "template id",
      "form.current",
      "user id"
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='name' />
          <label>Email</label>
          <input type='email' name='mail' />
          <label>Message</label>
          <textarea name='message' />
          <input type='submit' value='Send' />
        </form>
      </div>
  )
}

export default Contact

